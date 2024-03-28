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
1. Clone the repository: `git clone https://github.com/Rachel2070/Hadasim_project.git`
2. Navigate to the project directory: `cd covid_managment_system\frontend`
3. Install dependencies: `npm install`


## Executing Program
To run the system locally:

1. Start the server: `npm start`
2. Open the application in your browser: `http://localhost:3000`

## Usage
Once the application is running, users can perform various tasks using the provided interface:
- View a list of all members along with their basic information.
  
![members-list](https://github.com/Rachel2070/Hadasim_project/blob/main/covid_managment_system/frontend/screenshots/list%20(2).png?raw=true)

- Add a member to the system by clicking the "Add Member" button on the top of thr members list page.

- Click on a member to view detailed information, including personal details, address, and contact information.
  
 ![member-detail](https://github.com/Rachel2070/Hadasim_project/blob/main/covid_managment_system/frontend/screenshots/member_details.png%20.png?raw=true)
 
- Edit member information by clicking the "Edit" button on the member details page.
  
- Delete a member from the system by clicking the "Delete" button on the member details page.

- View COVID-19 related information for each member, including positive test date, recovery date, and vaccine details.

![covid-details](https://github.com/Rachel2070/Hadasim_project/blob/main/covid_managment_system/frontend/screenshots/covid%20details.png?raw=true)

- Update COVID-19 related information for each member, including positive test date, recovery date, and vaccine details.

  

## Routes
The following routes are available in the application:
- `/`: Home page displaying a list of all members.
- `/member/:id`: Member details page displaying detailed information about a specific member.
- `/member/:id/EditMember`: Form page for editing member information.
- `/member/:id/DeleteMember`: Page for confirming deletion of a member.
- `/member/:id/MemberCovidInfo`: Page for viewing and updating COVID-19 related information for a member.
- `/member/addMember`: Form page for adding a new member to the system.


## Assumptions
 Foundational assumptions I relied on:
 - Currently the format of the phone number and the mobile phone are the same
 - I worked according to the requirements of the task - deleting a member.The possibility of changing status should be considered instead of deletion.
 - At the moment it is not possible to upload a picture from the user side, but when seeding the dummy data I did place a picture automatically.
 - I assumed that when adding a new member to the health insurance fund, their standard data will usually be taken - and only after adding the covid-19 data.
 - The most correct way to select a city for a member (either by adding or updating) is to make a selection from a list of cities - at the moment I haven't done it.
 - I assumed that the dates that will be entered (between birth dates and between the dates of the Covid-19 data) will be valid dates - not future ones.
 - The presentation of the members can be divided into several pages, at the moment I have presented them on one scrolling page.
 - By clicking the phone button next to the member, a dialing window opens (currently only visual), for the future possibility of direct dialing to the member
