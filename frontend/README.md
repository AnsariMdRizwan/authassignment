# React + TypeScript + Vite

this is the list of the dependencies to install 


{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.8.4",
    "cors": "^2.8.5",
    "express": "^4.21.2",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.55.0",
    "react-router-dom": "^7.4.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.7.2",
    "typescript-eslint": "^8.24.1",
    "vite": "^6.2.0"
  }
}


to run the project locally you hva follow this command 
1.npm install this will install all the required dependencies for the project 


here is the technology stack that is used across the project are as follow 
Frontend:
React (with TypeScript) – for building UI components

Vite – for fast development & build optimizations

React Hook Form – for managing form validation

React Router – for navigation

Axios – for making API requests

Tailwind CSS – for styling



project structure are as follow 

📦 my-auth-project  
 ┣ 📂 src  
 ┃ ┣ 📂 pages  
 ┃ ┃ ┣ 📜 Home.tsx  # Home page (after login)  
 ┃ ┃ ┣ 📜 Login.tsx  # Login page  
 ┃ ┃ ┣ 📜 Register.tsx  # Registration page  

 ┃ ┣ 📜 App.tsx  # Main application component  
 ┃ ┣ 📜 main.tsx  # React entry point  
 ┃ ┣ 📜 routes.tsx  # Defines all application routes  
 ┣ 📂 public  
 ┣ 📜 .env  # Environment variables  
 ┣ 📜 tsconfig.json  # TypeScript configuration  
 ┣ 📜 tailwind.config.js  # Tailwind CSS configuration  
 ┣ 📜 package.json  # Dependencies & scripts  
 ┗ 📜 vite.config.ts  # Vite configuration  



this is all about the frontend project 
