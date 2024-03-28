import { Request, Response } from 'express';
import Member from '../models/member.model'

// Controller function to get all members from the database
export const getMembers = async (req: Request, res: Response) => {
    try {
        // Retrieve all members from the database
        const members = await Member.find();
        res.status(200).json(members);
    } catch (error) {
        res.status(500).send((error as Error).message)
    }
};

// Controller function to get a single member by ID
export const getMember = async (req: Request, res: Response) => {
    try {
        // Extract the member ID from the request parameters
        const memberId = req.params.id;
        // Find the member by ID in the database
        const member = await Member.findById(memberId);
        // Check if the member exists
        if (!member) {
            return res.status(404).send('Member not found');
        }
        res.status(200).json(member);
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
};

// Controller function to add a new member to the database
export const addMember = async (req: Request, res: Response) => {
    try {
        // Create a new member instance with the data from the request body
        const newMember = new Member(req.body);
        // Save the new member to the database
        await newMember.save();
        res.status(201).json(newMember);
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
};

// Controller function to update member information in the database
export const updateMemberInfo = async (req: Request, res: Response) => {
    const memberId = req.params.id;
    const updatedData = req.body;

    try {
        // Find and update the member by ID in the database
        const updatedMember = await Member.findByIdAndUpdate(memberId, updatedData, {
            new: true, // Return the updated document
            runValidators: true, // Run validation checks on the updated document
        })

        // Check if the member was not found
        if (!updatedMember) {
            return res.status(404).send('Member not found');
        }
        res.status(200).json(updatedMember);
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
}

// Controller function to delete a member from the database
export const deleteMember = async (req: Request, res: Response) => {
    const memberId = req.params.id;
    try {
        // Find and delete the member by ID from the database
        const deletedMember = await Member.findByIdAndDelete(memberId);
        // Check if the member was not found
        if (!deletedMember) {
            return res.status(404).send('Member not found');
        }
        res.json({ message: 'Member deleted successfully' });
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
}

// Controller function to update COVID-19 information for a member in the database
export const updateCovidInfo = async (req: Request, res: Response) => {
    const memberId = req.params.id;
    const { positiveTestDate, recoveryDate, vaccines } = req.body;

    try {
        // Find and update the COVID-19 information for the member by ID in the database
        const updatedCovidInfo = await Member.findByIdAndUpdate(
            { "_id": memberId },
            { "$set": { "positiveTestDate": positiveTestDate, "recoveryDate": recoveryDate, "vaccines": vaccines } },
            { new: true, runValidators: true }
        );
        // Check if the member was not found
        if (!updatedCovidInfo) {
            return res.status(404).send('Member not found');
        }
        res.status(200).json(updatedCovidInfo);

    } catch (error) {
        res.status(500).send((error as Error).message);
    }
}
