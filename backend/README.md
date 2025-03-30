this is the following dependencies we have to install to run the project 


{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^5.0.1",
    "@types/jsonwebtoken": "^9.0.9",
    "@types/node": "^22.13.14",
    "prisma": "^6.5.0",
    "tsx": "^4.19.3",
    "typescript": "^5.8.2"
  },
  "dependencies": {
    "@prisma/client": "^6.5.0",
    "bcryptjs": "^3.0.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "nodemon": "^3.1.9"
  }
}


to run the project locally we need to run the command
1 npm install 

after doing the npm install we need to run the nodemon index.ts if nodemon is not exist in the package.json file then 
first install the 
2.npm i nodemon after running the npm i nodemon you can now run the project running the command 
nodemon index.ts 


overview of tech stack used 

Node.js – JavaScript runtime for server-side execution

Express.js – Web framework for handling API routes

Prisma ORM – Database management for CRUD operations

PostgreSQL/MySQL (or any DB) – Database to store user data

JWT (JSON Web Token) – Secure authentication mechanism

bcryptjs – Password hashing for security

dotenv – Environment variable management

CORS – Enables cross-origin requests

Nodemon – Automatically restarts server during development



project structure overview 
📦 my-auth-backend  
 ┣ 📂 src  
 ┃ ┣ 📂 controllers  
 ┃ ┃ ┣ 📜 authController.ts  # Handles login, registration, logout  
 ┃ ┣ 📂 models (prisma models) 
 ┃ ┃ ┣ 📜 userModel.ts  # Defines user schema using Prisma  
 ┃ ┣ 📂 routes  
 ┃ ┃ ┣ 📜 authRoutes.ts  # Authentication routes (login, register, logout)  
 ┃ ┣ 📜 index.ts  # Starts the Express server  
 ┣ 📜 .env  # Stores API keys, DB credentials  
 ┣ 📜 prisma/schema.prisma  # Defines database schema  
 ┣ 📜 tsconfig.json  # TypeScript configuration  
 ┣ 📜 package.json  # Dependencies & scripts  
 ┗ 📜 nodemon.json  # Configuration for automatic restarts  
