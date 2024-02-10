# Full Stack Web App with Deno Cron Job

[Live App](https://pure-dog-76.deno.dev/)

![Deno](https://img.shields.io/badge/Deno-000000?style=for-the-badge&logo=deno&logoColor=white) ![React](https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react&logoColor=blue)

This full-stack web application showcases the power of Deno by running a background cron job every second, demonstrating real-time data processing and display using a modern React frontend. Our cron job, orchestrated by Deno, performs timely tasks to ensure our application data is always fresh and up-to-date.

## 🚀 Features

- **Real-Time Data Processing:** Utilizes Deno to run a cron job every second, ensuring data is constantly updated.
- **Modern UI:** Built with React, offering a seamless and responsive user experience.
- **Full-Stack Integration:** A cohesive integration between the backend Deno application and the React frontend, providing a robust solution for real-time web applications.

## 🛠️ Technologies Used

- **Deno:** A secure runtime for JavaScript and TypeScript.
- **React:** A JavaScript library for building user interfaces.
- **Supabase (Optional):** An open-source Firebase alternative providing database and authentication solutions.
- **iOS Icons Usage:** This project's documentation utilizes iOS-style icons to represent the technology stack and features.

## 📲 Installation

Before you begin, ensure you have Deno installed on your system. Visit [Deno's official website](https://deno.land/) for installation instructions.

1. **Clone the repository:**

   \```bash
   git clone https://github.com/yourusername/yourprojectname.git
   cd yourprojectname
   \```

2. **Install dependencies (if any):**

   For React frontend:

   \```bash
   cd frontend
   npm install
   \```

3. **Environment Variables:**

   Ensure you set up your environment variables for both the Deno backend and React frontend as needed.

## 🚀 Running the Application

To run the Deno cron job:

\```bash
deno run --allow-net --allow-read --allow-write index.ts
\```

To start the React frontend:

\```bash
cd frontend
npm start
\```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
