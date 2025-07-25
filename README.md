## Project Description

This is my personal blog, developed as a full-stack application using Vue.js for the frontend, Node.js (Express.js) for the backend, and MongoDB as the database. Here, I share my thoughts, experiences, and various content.

## Technologies Used

**Frontend (Client):**
* [Vue.js 3](https://vuejs.org/) - JavaScript Framework
* [Vue Router](https://router.vuejs.org/) - Frontend Routing
* [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
* [Axios](https://axios-http.com/) - HTTP Client

**Backend (Server):**
* [Node.js](https://nodejs.org/) - JavaScript Runtime
* [Express.js](https://expressjs.com/) - Web Framework
* [Mongoose](https://mongoosejs.com/) - MongoDB ODM (Object Data Modeling)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud Database Service
* [Nodemailer](https://nodemailer.com/) - Email sending
* [Dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management
* [CORS](https://www.npmjs.com/package/cors) - Cross-Origin Resource Sharing

## Quick Start (Local Setup)

### Prerequisites

* [Node.js](https://nodejs.org/) (v14+ recommended)
* [Git](https://git-scm.com/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB)

---

### Setup Instructions

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/humakrpnr13/mevn-blog.git](https://github.com/humakrpnr13/mevn-blog.git)
    cd mevn-blog
    ```

2.  **Install Dependencies:**
    * **Install 'concurrently' in the project root:** (Needed for `npm run dev`)
        ```bash
        npm install concurrently
        ```
    * **Install Backend dependencies:**
        ```bash
        cd server
        npm install
        ```
    * **Install Frontend dependencies:**
        ```bash
        cd ../client
        npm install
        ```

3.  **Create Environment File (.env) for Backend:**
    * Navigate back to the `server/` directory:
        ```bash
        cd ../server
        ```
    * Create a file named `.env` in this `server/` directory and add your configuration variables:
        ```plaintext
        # server/.env
        PORT=3000
        MONGODB_URI=mongodb+srv://<your_username>:<your_password>@<cluster-url>/<database>?retryWrites=true&w=majority
        EMAIL_USER=your_email@gmail.com
        EMAIL_PASS=your_email_app_password
        RECEIVER_EMAIL=email_to_receive_messages@example.com
        ```
    * ⚠️ **Important:** Do not commit this `.env` file to Git. Also, ensure you whitelist your IP on MongoDB Atlas or allow access from `0.0.0.0/0`.

4.  **Run the App (Frontend & Backend Concurrently):**
    * Navigate to the **project root directory** (`mevn-blog/`):
        ```bash
        cd .. # If you are in the 'server' directory
        ```
    * Run the development command:
        ```bash
        npm run dev
        ```
        *(This command starts both the frontend and backend concurrently.)*

---

### Open the Blog

After running the app, visit:
👉 `http://localhost:8080`

---

### Contact

For any feedback or questions, feel free to reach out via the contact form on the blog or by opening an issue on GitHub.
