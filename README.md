# E-Learning Web App

This is my E-Learning Portal Portfolio Project

## About the project

Started in January 2024 by Jakob Grosse.

## Main Features


### 1. View and buy courses from the database

Courses are loaded from the MongoDB Atlas database and schown to the user. The user can click on a card to see the course details, buy the course and enroll.

### 2. Add Courses via CMS

Tutors can login and create courses by adding course material (e.g. Rich text, Videos, Images, PDFs) via the Contentful headless CMS.

### 3. Work on courses and see learning progress

Students can see the course material of courses they are enrolled in. The student's lerning progress is measured.


## Technologies used

React.js, Tailwind, 
vite, react router dom, axios, uuidv4, dotenv, bcrypt, jwt

Node.js, Express.js, MongoDB Atlas, Mongoose.js, Render.com




## Installation

git clone https://github.com/j-grosse/e-learning-app.git

cd e-learning-app/client  
npm i  
cp .env.example .env
cd ..  
cd server  
npm i  
cp .env.example .env

-> add your environment variables to the files /server/.env and /client/.env

# Start commands

cd server  
npm run dev  
cd ..  
cd client  
npm run dev

# Deployment

for deployment on render.com

- choose "create Web Service"
- add environment variables in "Environment"
- add deployment settings:  
  Branch: main  
  Root Directory: server  
  Build Command: npm i && cd ../client && npm i && npm run build  
  Start Command: npm start
