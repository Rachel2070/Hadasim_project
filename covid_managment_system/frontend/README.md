# Covid Management System

The Covid Management System is a web application built with React.js that facilitates the management of patient data and their COVID-19 related information for a health insurance fund.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Routes](#routes)

## Introduction
The Covid Management System provides healthcare professionals with a user-friendly interface to manage patient records efficiently. It allows users to view patient details, update COVID-19 information, and perform CRUD operations on patient records.

## Features
- **View Members**: Users can view a list of all members along with their basic information such as full name, identity card, and phone number.
- **Add New Member**: Users can add new members to the system by providing necessary details including personal information, address, and contact information.
- **View Member Details**: Detailed information about each member can be viewed, including their personal details, address, and contact information.
- **Edit Member Information**: Users can edit existing member information, such as updating their address or contact details.
- **Delete Member**: Users have the option to delete a member from the system, along with all associated data.
- **View Covid Details**: Users can view COVID-19 related information for each member, including positive test date, recovery date, and vaccine details.
- **Update Covid Details**: Healthcare professionals can update COVID-19 related information for each member, including positive test date, recovery date, and vaccine details.

## Installation
To run the Covid Management System locally, follow these steps:
1. Clone the repository: `git clone https://github.com/Rachel2070/Hadasim_project.gi`
2. Navigate to the project directory: `cd Corona Managment System`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the application in your browser: `http://localhost:3000`

## Usage
Once the application is running, users can perform various tasks using the provided interface:
- View a list of all members along with their basic information.
  -- Assumption: Currently there is no possibility to find a member according to parameters
![alt text](https://github.com/Rachel2070/Hadasim_project/blob/main/Corona%20Managment%20System/frontend/screenshots/list.png?raw=true)

- Add a member to the system by clicking the "Add Member" button on the top of thr members list page.

- Click on a member to view detailed information, including personal details, address, and contact information.
  
 ![alt text](https://github.com/Rachel2070/Hadasim_project/blob/main/Corona%20Managment%20System/frontend/screenshots/details.png?raw=true)
 
- Edit member information by clicking the "Edit" button on the member details page.
  
- Delete a member from the system by clicking the "Delete" button on the member details page.

- View COVID-19 related information for each member, including positive test date, recovery date, and vaccine details.

![alt text](https://github.com/Rachel2070/Hadasim_project/blob/main/Corona%20Managment%20System/frontend/screenshots/covid%20details.png?raw=true)

- Update COVID-19 related information for each member, including positive test date, recovery date, and vaccine details.

  

## Routes
The following routes are available in the application:
- `/`: Home page displaying a list of all members.
- `/member/:id`: Member details page displaying detailed information about a specific member.
- `/member/:id/EditMember`: Form page for editing member information.
- `/member/:id/DeleteMember`: Page for confirming deletion of a member.
- `/member/:id/MemberCovidInfo`: Page for viewing and updating COVID-19 related information for a member.
- `/member/addMember`: Form page for adding a new member to the system.


