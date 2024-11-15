# Phase 2 Code Challenge: Plantsy

## Demo

Use this gif as an example of how the app should work.

![Demo GIF](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-mock-code-challenge-plantshop/plantsy_demo.gif)

## A React application for managing a plant shop, allowing users to view, add, update, and search for plants. This project utilizes React, a json-server for the backend, and includes full CRUD functionality with a user-friendly interface.

## Table of Contents
## 1. Core Features
## 2.Project Structure
## 3.Technologies Used
## 4.Setup and Installation
## 5.Usage
## 6.License

## Core Features
## View All Plants: Displays a list of all available plants with details (name, price, and image).
## Add a New Plant: Users can submit a form to add a new plant.
## Search Plants: Search functionality to filter plants by name.
## Update Plant Price: Edit and update the price of plants, with changes persisted. Using increasing and decreasing buttons at the far right side of the plant page.
## Mark Plants as Sold Out: Toggle a plant's availability.
## Delete a Plant: Remove plants from the database.
## Persistent Data: All changes (add, edit, delete) are saved and persist after refreshing the page.

## Project Structure
## react-hooks-cc-plantshop-master/
## |--backend/
##    |-node-modules
##    |-db.json
##    |-package-lock.json
##    |-package.json
##    |server.js
## ├── src/
## │   ├── components/
## │   │   ├── App.js
## │   │   ├── PlantList.js
## │   │   ├── PlantForm.js
## │   │   ├── PlantCard.js
## │   │   ├── Search.js
## │   │__ index.css
## │   └── index.js
## ├── public/
##     |---images
##     ├── index.html
##     ├── favicon.ico
##     |---logo192.png
##     |---logo512.png
##     |---manifest.json
##     |---robots.txt
## |--.canvas
## |--.gitignore
## |--babel.config.js
## |--demo.gif
## |--jest.setup.js
## ├── package-lock.json
## ├── package.json
## ├── README.md

## Technologies Used
## React: Frontend library for building the user interface.
## json-server: A lightweight backend to simulate a REST API.
## CSS: For styling components.
## JavaScript (ES6): Core scripting language for logic and DOM manipulation.

## Setup and Installation
## Follow these steps to set up and run the project locally:

## Prerequisites
## Node.js and npm installed. Download Node.js
## Git installed. Download Git
## Steps
## Clone the Repository.

## Install Dependencies:

## RUN CODE:
## "npm install"
## Start the Backend Server: Open a terminal and run:

## RUN CODE:
## "npx json-server --watch db.json --port 3001"
## Start the React App: In a new terminal, run:

## RUN CODE:
## "npm start"
## Access the App: Open http://localhost:3000 in your browser to view the application.

## Usage
## Adding a Plant
## Fill out the "Add Plant" form with the plant's name, image URL, and price.
## Click Add Plant to see it appear in the list.
## Searching for Plants
## Use the search bar to filter plants by name.
## Updating Plant Price
## Click the "Edit" button for a plant and update its price.
## Click Save to persist the changes.
## Marking a Plant as Sold Out
## Click the "Mark as Sold Out" button to update a plant’s availability.
## Deleting a Plant
## Click the Delete button to remove a plant.

## License
## Copyright(C) 2024 Evans Kabiru, Inc.


