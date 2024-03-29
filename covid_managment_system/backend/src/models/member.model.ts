import mongoose, { Schema, Document } from "mongoose";

// Define the structure of the vaccine information
interface IVaccineInfo {
    date: Date;
    manufacturer: string
}

// Interface for member document, extending Mongoose Document
export interface IMember extends Document {
    firstName: String;
    lastName: String;
    identityCard: String;
    address: {
        city: String;
        street: String;
        number: number;
    };
    dateOfBirth: Date;
    telephone: String;
    mobilePhone: String;
    positiveTestDate?: Date;
    recoveryDate?: Date;
    photoUrl?: string;
    vaccines: IVaccineInfo[];
}

// Schema for vaccine information
const VaccineInfoSchema: Schema = new Schema({
    date: {type: Date, required: true},
    manufacturer: {type: String, required: true}
})

// Schema for address
const AddressSchema: Schema = new Schema({
    city: {type: String, required: true},
    street: {type: String, required: true},
    number: {type: Number, required: true}
})

// Schema for member
const MemberSchema: Schema = new Schema({
    // memberCode: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    identityCard: {type: String, required: true},
    address: {type: AddressSchema, required: true},
    dateOfBirth: {type: Date, required: true},
    telephone: {type: String, required: true},
    mobilePhone: {type: String, required: true},
    positiveTestDate: {type: Date},
    recoveryDate: {type: Date},
    photoUrl: { type: String },
    vaccines: [VaccineInfoSchema],
});

// Mongoose automatically looks for the plural, lowercased version of your model name.
// For "Member", the collection should be "members".

export default mongoose.model<IMember>('Member', MemberSchema);
