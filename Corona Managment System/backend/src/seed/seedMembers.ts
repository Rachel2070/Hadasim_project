import mongoose, { connect, disconnect } from "mongoose";
import { faker } from "@faker-js/faker";

import Member from '../models/member.model';
import {mongoUri} from '../database';

const vaccineManufacturers = [
    "Pfizer",
    "Moderna",
    "Johnson & Johnson",
    "AstraZeneca",
    "Sinovac"
];

const generateUniqueDigits = (length: number, existingIdentityCards: Set<string>) => {
    let result = '';

    do {
        result = '';
        for (let i = 0; i < length; i++) {
            result += Math.floor(Math.random() * 10).toString();
        }
    } while (existingIdentityCards.has(result));

    existingIdentityCards.add(result);

    return result;
};

const generateRandomPhoneNumber = () => {
    const prefix = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    const firstThreeDigits = Math.floor(Math.random() * 1000);
    const lastFourDigits = Math.floor(Math.random() * 10000);

    const phoneNumber = `(${prefix}) ${firstThreeDigits}-${lastFourDigits.toString()}`

    return phoneNumber;
};

const generateMembers = (numMembers: number) => {
    const existingIdentityCards: Set<string> = new Set();
    return Array.from({ length: numMembers }, () => ({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        identityCard: generateUniqueDigits(9, existingIdentityCards),
        address: {
            city: faker.location.city(),
            street: faker.location.street(),
            number: faker.location.buildingNumber()
        },
        dateOfBirth: faker.date.past({ years: 90, refDate: new Date() }),
        telephone: generateRandomPhoneNumber(),
        mobilePhone: generateRandomPhoneNumber(),
        positiveTestDate: faker.date.past({ years: 4, refDate: new Date('2024-01-01') }),
        recoveryDate: faker.date.between({ from: new Date('2020-01-01'), to: new Date() }),
        vaccines: [
            {
                date: faker.date.past({ years: 2 }),
                manufacturer: vaccineManufacturers[faker.number.int({ min: 0, max: vaccineManufacturers.length - 1 })]
            }
        ]
    }));
};

const seedMembers = async () => {
    try{
        await connect(mongoUri);
        console.log('Connected to MongoDB.');

        await Member.deleteMany({});
        console.log('Existing members removed.');

        const members = generateMembers(50);
        await Member.insertMany(members);
        console.log('Database seeded with members.');

        await disconnect();
        console.log('Disconnected from MongoDB.');
    }catch(error){
        console.error("Database seeding error:", error);
    }
};

if(require.main === module) {
    seedMembers();
}