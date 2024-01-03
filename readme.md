
1. Install dependencies:
cd your-project
npm install



Create a .env file in the root directory and set the necessary environment variables (refer to Environment Variables).


Run the application:
npm start


API Routes
User Routes
POST /api/user/login: User login route.
POST /api/user/register: User registration route.



Note Routes
POST /api/notes/addNotes: Add a new note.
GET /api/notes/getNotes: Get all notes.
GET /api/notes/getNotes/:id: Get a specific note by ID.
PUT /api/notes/updateNotes/:id: Update a note by ID.
DELETE /api/notes/deleteNotes/:id: Delete a note by ID.


Environment Variables
Create a .env file in the root directory with the following variables:

PORT=3000
MONGO_URI=your_mongodb_uri
SECRET_KEY=your_secret_key


Make sure to replace your_mongodb_uri and your_secret_key with your actual MongoDB connection URI and a secret key for JWT.