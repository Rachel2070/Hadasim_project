import { Request, Response, NextFunction } from 'express';
import { addMemberSchema, updateCovidInfoSchema, updateMemberInfoSchema } from '../validation/memberValidation'; // Import validation schemas
import MemberSchema from '../models/member.model'; // Import Mongoose model for members

// Middleware to validate the request body for adding a new member
export const validateAddMember = (req: Request, res: Response, next: NextFunction) => {
    const { error } = addMemberSchema.validate(req.body); // Validate request body against the add member schema
    if (error) {
        return res.status(400).send({ message: error.details[0].message }); // Return validation error message
    }
    next(); // Move to the next middleware if validation passes
};

// Middleware to validate the request body for updating member's COVID info
export const validateUpdateMember = (req: Request, res: Response, next: NextFunction) => {
    const { error } = updateMemberInfoSchema.validate(req.body); // Validate request body against the update member schema
    if (error) {
        return res.status(400).send({ message: error.details[0].message }); // Return validation error message
    }
    next(); // Move to the next middleware if validation passes
};

// Middleware to check if the identity card of the member is unique
export const validateUniqueIdentityCardPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { identityCard } = req.body; // Get identity card from request body

        // Check if the request method is POST or PUT/PATCH
        // For POST requests, check if any member exists with the same identity card
        const existingMember = await MemberSchema.findOne({ identityCard });
        if (existingMember) {
            return res.status(400).send('A member with this ID card already exists.'); // Return error message if member already exists
        }

        next(); // Move to the next middleware if validation passes
    } catch (error) {
        console.error('Error while checking unique identity card:', error); // Log error if any
        return res.status(500).send('Internal Server Error'); // Return internal server error message
    }
};


export const validateUniqueIdentityCardPutOrPatch = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { identityCard } = req.body; // Get identity card from request body
        // For PUT/PATCH requests, exclude the current member being updated from the check
        const { id } = req.params; // Get member ID from request parameters
        const existingMember = await MemberSchema.findOne({ _id: { $ne: id }, identityCard }); // Find member by ID and identity card
        
        if (existingMember) {
            return res.status(400).send('Another member with this ID card already exists.'); // Return error message if another member with the same ID card exists
        }

        next();

    } catch (error) {
        console.error('Error while checking unique identity card:', error); // Log error if any
        return res.status(500).send('Internal Server Error'); // Return internal server error message
    };
};

export const validateUpdateCovidInfo = (req: Request, res: Response, next: NextFunction) => {
    const { error } = updateCovidInfoSchema.validate(req.body); // Validate request body against the update member schema
    if (error) {
        return res.status(400).send({ message: error.details[0].message }); // Return validation error message
    }
    next(); // Move to the next middleware if validation passes
}

