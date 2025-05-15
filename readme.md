# Mini Job Board Backend

This is the backend for a mini job board application built with Node.js, Express, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mini-job-board-backend.git
   cd mini-job-board-backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB URI:
   ```plaintext
   MONGODB_URI=your_mongodb_uri
   PORT=5000
   ```

## Usage

To start the server, run:
npm start

The server will run on `http://localhost:5000`.

## API Endpoints

### Jobs

- **GET** `/api/jobs` - Retrieve all jobs
- **GET** `/api/jobs/:id` - Retrieve a single job by ID
- **POST** `/api/jobs` - Create a new job

### Example Request

To create a new job, send a POST request to `/api/jobs` with the following JSON body:

json
{
"title": "Software Engineer",
"company": "Tech Company",
"type": "Full-time",
"location": "Remote",
"description": "Job description goes here."
}


## Environment Variables

- `MONGODB_URI`: Your MongoDB connection string.
- `PORT`: The port on which the server will run (default is 5000).

