# coworking-discovery-app
Preview: This coworking tracking app allows a user to keep track of NYC coworking locations such as coffee shops, libraries, public places with details such as hours, address, wifi speeds, and more. 

Users: The users of this app will be working professionals, digital nomads, and students.

Problem: It’s often hard to find coworking spaces such as coffee shops or public places to work from in NYC that have reliable wifi, outlets, and restrooms. And when a location is found, there are no apps that help track these locations in a centralized place.  

Solution: The web application that I plan on building will be a simple CRUD application that allows a user to track “coworking locations”. It will essentially be a tracker app that has location “components” that has details such as name of location, wifi speeds, bathroom availability and more.  

MVP Scope: The MVP scope for this project will be to have a user able to add, read, update, and delete a coworking location “component” with the following fields: 
1. Address (text)
2. Wifi Speed (text)
3. Bathroom availability (checkbox)
4. Outlet availability (checkbox)
5. Hours (text)

Toughest Technical Challenges: The tough technical challenges with this problem will be implementing all CRUD functionality. I will have to make sure the user can add, read, update, and delete a location with appropriate fields. 

Stretch Goals: The stretch goal will be to have functionality to upload pictures. Additionally, a stretch feature will be to  implement authentication and authorization. My eventual goal is to turn it into a platform where users can discover coworking locations through a feed (similar to Airbnb). 

Data Model: 
Each location component will have the following fields:
0: id (auto generated - start at 1)
1. Name of location (string)
2. Address (string)
3. Wifi Speeds (number)
4. Hours (string)
5. Outlet Availability (boolean)
6. Restroom Availability (boolean)

User story: 
As a working professional, I want to keep track of coworking locations in NYC so that I can reliably get work done when needed.

Acceptance Criteria: 

Scenario 1: User adds a coworking location
GIVEN I am a working professional and I want to add a new location to track
WHEN I visit the coworking site
AND I press on the plus
THEN I am greeted with a popup modal that asks me to enter the required fields

Scenario 2: User edits a coworking location
GIVEN I am a working professional and I want to edit an existing location
WHEN I press on the edit button on the location component
THEN I am prompted with a popup modal that allows me to change the existing fields

Scenario 3: User delete a coworking location
GIVEN I am a working professional and I want to delete and existing location
WHEN I press on the delete button within the location component
THEN I am prompted with a confirmation screen asking if I want to delete

Scenario 4: User reads existing coworking location
GIVEN I am a working professional and I want to read existing location components
WHEN I navigate to the home page
THEN I should be greeted with a home page that reads all existing location components stored in the database


Technical Challenges:
1. Figuring how to initialize MongoDB database and connect it via server.js
2. Figuring how to connect all files and folders together. Don't know which files/folders are needed
3. How to configure server.js and how to initialize the server
4. Figuring out which npm modules to download and which to have as dev dependencies
5. Figuring how to initialize .env file?
6. Figuring out the relationship between App.jsx, index.html, and index.js
7. Figuring out what the relationship betweeen components are. 
8. Having a webpack issue not building my app
  8.1 The answer was that import statements need to have .jsx
9. Figuring out how to make a 'Locations' collection and hook up my react components


Wins By Day: 
9-20-23: Got Github Repo setup and submitted project brief. Also completed Figma simple mockup. Have "very" basic folder structure setup as well
9-21-23: Got webpack.config setup successfully and am able to load App component on localhost:8080 dev server. Additionally, got package.json and dependencies installed. 
9-22-23: Built basic header in App.jsx for front end component. Figured out the webpack build issue -> Import statements need the .jsx extension at the end
9-23-23: Got MongoDB database connected! Also figured out that you need to import React for components to avoid errors.

Unknowns/Clarifying Questions: 
- What should be inside gitignore?
- What's the relationship between App.jsx, index.html, and index.js
- How do I add a new collection to CoworkingLocation database and add a new document to that collection 
- What do I need in my .eslintrc.json file? What needs to be included and how do I find what I need?
- How do I send example data to the database?
- What's the relationaship between model, controller, and routes?
- Is best practice to put the mongoDB connection in server.js or model.js?


const exampleLocation = { 
  id: '1',
  name: 'Hungry Ghost Coffee',
  address: '123 Bedford Ave',
  hours: {
    monday: '9-5pm',
    tuesday: '9-5pm',
    wednesday: '9-5pm',
    thursday: '9-5pm',
    friday: '9-5pm',
    saturday: '10-6pm',
    sunday: '11-7pm'
  },
  wifiSpeed: {
    down: 100, 
    up: 50
  },
  outlet: true,
  restroom: true
};

json: 
{ 
  "name": "Hungry Ghost Coffee",
  "address": "123 Bedford Ave",
  "hours": {
    "monday": "9-5pm",
    "tuesday": "9-5pm",
    "wednesday": "9-5pm",
    "thursday": "9-5pm",
    "friday": "9-5pm",
    "saturday": "10-6pm",
    "sunday": "11-7pm"
  },
  "wifiSpeed": {
    "down": "100", 
    "up": "50"
  },
  "outlet": "true",
  "restroom": "true"
};


mongoose models -> create method
