# E-Learning Web App

This is my E-Learning Portal Portfolio Project

## About the project

Created in January 2024 by Jakob Grosse.

## Main Features


### A:

a

### B:

a

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
