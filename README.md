# 🔐 Authentication System (JWT-Based) – Full Stack Project Documentation

## 📌 Project Overview

This project is a full-stack web application that implements a secure user authentication system using JSON Web Tokens (JWT). It allows users to register, log in, and access protected routes such as a personalized dashboard and profile section.

The system is built using Django for backend development, MySQL/SQLite for database management, and HTML, CSS, and JavaScript for the frontend. The application ensures secure password handling, token-based authentication, and a responsive user interface.

---

## 🎯 Objectives

* Implement a complete authentication flow (Register + Login)
* Ensure secure password storage using hashing
* Use JWT for stateless authentication
* Protect sensitive routes (e.g., profile/dashboard)
* Provide a clean and responsive UI
* Deploy the application on a cloud platform

---

## 🛠️ Tech Stack

### Backend

* Django
* Django REST Framework (DRF)
* JWT Authentication (SimpleJWT)

### Frontend

* HTML5
* CSS3 (Glassmorphism UI)
* JavaScript (Fetch API)

### Database

* SQLite (development)
* MySQL (optional production)

### Deployment

* Render (Backend Hosting)
* WhiteNoise (Static File Handling)

---

## 🏗️ System Architecture

The application follows a client-server architecture:

1. Frontend sends HTTP requests using JavaScript (Fetch API)
2. Backend (Django REST API) processes requests
3. Database stores user credentials securely
4. JWT tokens are issued upon successful login
5. Protected routes validate JWT before granting access

---

## 🔄 Authentication Flow

### 1. User Registration

* User enters username, email, and password
* Backend validates input
* Email uniqueness is checked
* Password is hashed using Django’s hashing system
* User is stored in the database

### 2. User Login

* User submits credentials
* Backend authenticates user
* JWT token is generated and returned
* Token is stored in browser localStorage

### 3. Access Protected Route

* Frontend sends token in Authorization header:

  ```
  Authorization: Bearer <token>
  ```
* Backend verifies token
* If valid → access granted
* If invalid → access denied

---

## 🔐 Security Features

* Password hashing using Django’s built-in hashers
* JWT-based authentication (stateless)
* Protected API endpoints
* Email uniqueness validation
* Token-based access control
* Session-less authentication (no cookies)

---

## 📁 Project Structure

```
auth_project/
│
├── accounts/
│   ├── views.py
│   ├── serializers.py
│   ├── urls.py
│
├── templates/
│   ├── login.html
│   ├── register.html
│   ├── home.html
│
├── static/
│   ├── css/
│   │   ├── style.css
│   │   ├── dashboard.css
│   ├── js/
│       ├── app.js
│       ├── dashboard.js
│
├── auth_project/
│   ├── settings.py
│   ├── urls.py
│
├── manage.py
├── requirements.txt
├── Procfile
```

---

## 🌐 API Endpoints

| Endpoint       | Method | Description                  |
| -------------- | ------ | ---------------------------- |
| /api/register/ | POST   | Register new user            |
| /api/login/    | POST   | Authenticate user            |
| /api/profile/  | GET    | Get user details (Protected) |

---

## 🎨 Frontend Features

* Modern glassmorphism UI design
* Responsive layout
* Login and Register pages
* Dashboard with welcome message
* Profile dropdown with user details
* Token handling using localStorage
* Smooth navigation and redirection

---

## 🖥️ Dashboard Functionality

* Displays personalized message:
  “Welcome to Dashboard, <username>”
* Fetches user data from protected API
* Includes:

  * Profile dropdown (username + email)
  * Logout functionality
  * Interactive UI cards

---

## ⚙️ Static Files Handling

* Static files include CSS and JavaScript
* Managed using Django static framework
* WhiteNoise used in production for serving static files
* `collectstatic` command aggregates all static files

---

## 🚀 Deployment Process

The application is deployed using a cloud platform.

### Steps:

1. Push project to GitHub
2. Create a new Web Service
3. Configure:

   * Build Command: `pip install -r requirements.txt`
   * Start Command: `gunicorn auth_project.wsgi`
4. Add environment variables
5. Run migrations
6. Collect static files

---

## 🧪 Testing

* Tested registration and login flow
* Verified JWT token generation
* Tested protected route access
* Checked UI responsiveness
* Verified duplicate email prevention

---

## ⚠️ Challenges Faced

* Static files not loading in production
* Git authentication conflicts
* Database migration issues
* JWT token handling errors

### Solutions:

* Used WhiteNoise for static files
* Fixed Git credentials and permissions
* Ran proper migrations
* Handled token storage and headers correctly

---

## 📈 Future Enhancements

* Email-based login instead of username
* Password reset functionality
* User profile editing
* Token refresh mechanism
* Role-based authentication
* Dark mode UI
* Deployment with Docker

---

## 📌 Conclusion

This project demonstrates a complete implementation of a secure authentication system using modern web development practices. It integrates frontend and backend seamlessly while ensuring security, scalability, and usability.

The use of JWT enables stateless authentication, making the system efficient and suitable for real-world applications.

---

## 👩‍💻 Author

Bhavika Chandrawat
B.Tech CSE (2022–2026)
Medicaps University, Indore

---

## 🔗 Project Highlights

* Full-stack implementation
* JWT authentication
* Clean UI/UX
* Deployed application
* Industry-relevant features

---
