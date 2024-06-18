OICT Full-stack Application

Project Overview

This is a full-stack web application developed for an OICT task. It uses Next.js for both the frontend and backend, integrating authentication and various endpoints. The application includes features such as checking the status and validity of cards and displaying points of sale on a map.

Tech Stack

Frontend: Next.js, React, Tailwind CSS, TypeScript
Backend: Next.js API Routes, Node.js
Map: Leaflet, React-Leaflet
Authentication: Basic Authentication
Installation

Prerequisites
Node.js (v14 or higher)
npm (v6 or higher)
Steps to Set Up the Project
Clone the repository:

bash
Copy code
git clone https://github.com/HonzaPenicka/oict.git
cd your-project
Install dependencies:

bash
Copy code
npm install
Set up Tailwind CSS:
Tailwind CSS is already configured in this project. You can find the configuration in tailwind.config.js and styles/globals.css.

Install Leaflet and React-Leaflet:

bash
Copy code
npm install leaflet react-leaflet
Add Leaflet CSS to styles/globals.css:

css
Copy code
@import url('https://unpkg.com/leaflet@1.7.1/dist/leaflet.css');

.leaflet-container {
height: 100%;
width: 100%;
}
Usage

Run the development server
To start the development server, run:

bash
Copy code
npm run dev
This will start the application at http://localhost:3000.

Navigate to the following pages to test the application:
Home: http://localhost:3000
Login: http://localhost:3000/login
Dashboard: http://localhost:3000/dashboard
Points of Sale: http://localhost:3000/points-of-sale
