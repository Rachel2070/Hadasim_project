import Joi from "joi";

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
}).min(1);


export const updateCovidInfoSchema = Joi.object({
    positiveTestDate: Joi.date().optional(),
    recoveryDate: Joi.date().optional(),
    vaccines : Joi.array().optional(),
}).min(1);