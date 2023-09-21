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

Wins By Day: 
9-20-23: Got Github Repo setup and submitted project brief. Also completed Figma simple mockup. Have "very" basic folder structure setup as well
9-21-23: TBD

Unknowns/Clarifying Questions: 
1. Difference between MongoDB clusters vs database?
  1. Am I only allowed one shared cluster through MongoAtlas?
  2. Can I use the starwars cluster and just create another coworking database on that cluster?
2. What should be inside gitignore?
3. Do I need to download all node modules so it can be attached via package.json? Such as react or webpack