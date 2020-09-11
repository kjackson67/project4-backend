<!-- Project Overview
** Project Description **
This is the final project - our "Capstone Project" Using postgres/sequelize/associations to create an app for keeping track of golf scores on courses people have played.  This will let a user sign-up or log in to be able to either add a course or choose a course they've played and enter the date and score they shot on that date.  The user will be able to continuously add new scores to same course or enter a new course to add their score.
There may be many players for a course AND a course will be able to have many players.  

Goal for this app is to make it easy for a user to be able to sign-up or register (As a new user) and keep track of the courses played, when (dates played) and users score so it will make it easier to keep track of handicap.

**  USER STORIES  **
As a user, I want to be able to 'Sign Up' to the app so that I can add or see my course(s) I play.
As a user, I want to be able to 'Log In' to enter my round for the date played and enter my score.
As a user, i want to be able to see my past golf scores.
As a user, I want to be able to see what past dates I played and on what courses.

* Stretch Goal *
I would like to make this app able to apply a HDCP recording feature, so that players can keep track of not only their scores but be able to compare against their friends in a "friendly" competitive challenge as well.

      // Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

** Project Links **
github repo
deployment

** Wireframes **
Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.
wireframes
react architecture
Define the the React components and the architectural design of your app.

** MVP/PostMVP - 5min **
The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

MVP EXAMPLE
Find and use external api
Render data on page
Allow user to interact with the page

PostMVP EXAMPLE
Add localStorage or firebase for storage

** Components **
Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.
Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

Component	Description
App	This will make the initial data pull and include React Router
Header	This will render the header include the nav
Footer	This will render the header include the nav

** Time Frames **
Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

Component	Priority	Estimated Time	Time Invetsted	Actual Time
Adding Form	H	3hrs	3.5hrs	3.5hrs
Working with API	H	3hrs	2.5hrs	2.5hrs
Total	H	6hrs	5hrs	5hrs

** Additional Libraries **
Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

** Code Snippet **
1. date: {
        type: Sequelize.DATEONLY
      },
   date: new Date(2020,07,03),
 OR  date: "2020-08-03",



Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

function reverse(string) {
	// here is the code to reverse a string of text
}

** Issues and Resolutions **
1. ERROR: null value in column "createdAt" violates not-null constrain
   RESOLUTION:  Changed my migration create-round.js to
date: {
type: Sequelize.DATEONLY }, and then needed to change seeder-demo-round date integer to // date: new Date(2020,07,03), or date: "2020-08-03",
2. ERROR: column "userId" of relation "Courses" does not exist
   RESOLUTION:  added userId column manually in pgAdmin, should have used npx migrate from "add" userId instead. So I dropped entire db and re-ran createdb 'project_name' in terminal. I also utilized mirgration generate --name rename-courseid to coursename -- Needed to refer back to lessons from class



Use this section to list of all major issues encountered and their resolution.
SAMPLE.....
ERROR: app.js:34 Uncaught SyntaxError: Unexpected identifier
RESOLUTION: Missing comma after first object in sources {} object











 -->



<!-- ## Deere Project 2 Starter Code

## Set Up

1. Fork and clone this repo
1. `cd` into the folder and run `npm install`
1. In the root of your app, `touch .env` and add:

   ```bash
   PORT=3000
   JWT_SECRET=pancakes
   ```

1. Check out your `config/config.json` file. You'll need to create a database called `project2_Korby`
1. Sequelize is included in the app. You have a `User` model. Run `db:migrate` to create the `Users` table in your database.
1. Run `nodemon` and go to the Homepage: `localhost:3000/`

![](https://i.imgur.com/uuhrOxQ.png)

<br>

## Routes

You have the following routes available.

#### controllers/authController.js

- GET and POST `localhost:3000/auth/signup`
- GET and POST `localhost:3000/auth/login`
- GET `localhost:3000/auth/logout`

#### controllers/usersController.js

- GET `localhost:3000/profile/:id`

<br>

## Additional Resources

- [Fruit App Solution](https://git.generalassemb.ly/jdr-0622/fruit-app-in-class)
- [Pokemon Express Solution](https://git.generalassemb.ly/jdr-0622/pokemon-express-sequelize6)
- [Google Routes Spreadsheet](https://docs.google.com/spreadsheets/d/14-LHKXLtEkp_vKEz3qSKjREnrmSyzQ9fimTlmrPsZsQ/edit#gid=0)
- [JSON Web Tokens](https://jwt.io/) -->

