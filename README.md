# Full-Stack User Management System (Angular + PHP MVC)

A complete full-stack web application for user management with secure login/signup, dashboard, CRUD operations, and gender-based filtering.

## 🔧 Tech Stack
- **Frontend:** Angular 13 (Reactive Forms, TypeScript, LocalStorage)
- **Backend:** PHP (Custom MVC Architecture)
- **Database:** MySQL

## ✨ Features
- User authentication with session management
- Gender-based user filtering
- CRUD operations with pre-filled form updates
- Auto-fill form values using localStorage
- MVC pattern with separate Controller, Model, and View
- Access control to restrict unauthorized access

## 📂 Folder Structure
- `/frontend`: Angular project
- `/backend`: PHP MVC backend with Controllers, Models, Views

## 🚀 Setup Instructions
1. Clone the repo
2. Import DB schema from `database.sql`
3. Configure DB credentials in `config/db.php`
4. Run Angular frontend and PHP server separately

## 🔒 Auth Flow
- Non-logged-in users are redirected to login
- Logged-in users access dashboard
- Sessions used for authentication control
