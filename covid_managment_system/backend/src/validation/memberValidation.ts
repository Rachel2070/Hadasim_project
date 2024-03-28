import Joi from "joi";

// Schema for validating request body when adding a new member
export const addMemberSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    identityCard: Joi.string().required(),
    address: Joi.object({
        city: Joi.string().required(),
        street: Joi.string().required(),
        number: Joi.number().required()
    }),
    dateOfBirth: Joi.date().required(),
    telephone: Joi.string().required(),
    mobilePhone: Joi.string().required(),
});

// Schema for validating request body when updating member information
export const updateMemberInfoSchema = Joi.object({
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    identityCard: Joi.string().optional(),
    address: Joi.object({
        city: Joi.string().optional(),
        street: Joi.string().optional(),
        number: Joi.number().optional()
    }),
    dateOfBirth: Joi.date().optional(),
    telephone: Joi.string().optional(),
    mobilePhone: Joi.string().optional(),
});

// Schema for validating request body when updating COVID-19 information
export const updateCovidInfoSchema = Joi.object({
    positiveTestDate: Joi.date().optional(),
    recoveryDate: Joi.date().optional(),
    vaccines : Joi.array().optional(),
});