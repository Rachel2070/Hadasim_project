# Project Title

Corona Management System for Health Funds.

## Description

The Corona Management System is a comprehensive solution designed for health funds to manage member information while focusing on monitoring of COVID-19 data. This system allows healthcare organizations to efficiently record and update member data, including vaccination status, history of covid-19 infection and recovery details. Aiming to improve the management of pandemic-related health data, the system offers a user-friendly web interface for data entry and reporting, alongside a powerful server-side API for data manipulation, storage and retrieval.


### Getting Started

### Dependencies
Node.js version 14.x or higher
MongoDB version 4.x or higher

### Installing

To set up the Corona Management System for development:

1. Clone the repository: `git clone https://github.com/Rachel2070/Hadasim_project.git`
2. Navigate to the project directory: `cd Corona Managment System`
3. Install dependencies: `npm install`

## Executing Program

To run the system locally:

1. Start the server: `npm start`
2. Seed the database (optional):`npm run seed`


## API Reference

Member Management

* List Members
GET `/api/members`
Description: Retrieves a list of all members in the health fund.

* Get Member Details
GET `/api/members/:id`
Description: Retrieves details of a specific member by their ID.

* Add Member
POST `/api/members`
Description: Adds a new member to the health fund. Requires member details in the request body. This endpoint includes validation through validateAddMember and validateUniqueIdentityCardPost.

* Update Member Information
PATCH `/api/members/:id/info`
Description: Updates an existing member's information (excluding vaccination records). Requires member ID in the URL and updated details in the request body. This endpoint includes validation through validateUpdateMemberInfo and validateUniqueIdentityCardPutOrPatch.

* Delete Member
DELETE `/api/members/:id`
Description: Removes a member from the health fund. Requires the member ID in the URL.
Vaccination Records

* Add Vaccination Record
POST `/api/members/:id/vaccines`
Description: Adds a vaccination record for a member. Requires the member ID in the URL and vaccine details in the request body. This endpoint includes validation through validateAddVaccine.

* Update Vaccination Record
PATCH `/api/members/:id/vaccines/:vaccineId`
Description: Updates a specific vaccination record for a member. Requires both the member ID and the vaccine ID in the URL, and the updated vaccine details in the request body. This endpoint reuses the validateAddVaccine for validation.

* Delete Vaccination Record
DELETE `/api/members/:id/vaccines/:vaccineId`
Description: Deletes a specific vaccination record for a member. Requires both the member ID and the vaccine ID in the URL.


