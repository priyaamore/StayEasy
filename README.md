# 🏡 StayEasy

StayEasy is a full-stack Airbnb-inspired web application where users can explore, create, edit, and manage vacation rental listings. It provides a seamless booking-style experience with secure authentication, image uploads, interactive maps, and user reviews.

🔗 **Live Demo:** https://stayeasy-rlp5.onrender.com

---

## 🚀 Features

- 🔐 User Authentication (Signup, Login & Logout)
- 🏠 Create, Edit & Delete Property Listings
- 📸 Image Upload using Cloudinary
- 🗺️ Interactive Maps with Mapbox
- ⭐ Add & Delete Reviews
- 👤 Authorization (Only owners can edit/delete their listings)
- 📱 Responsive Design
- 💾 MongoDB Database Integration
- ⚡ Server-side Rendering using EJS

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Passport.js
- Express Session

### Cloud Services
- Cloudinary (Image Storage)
- Mapbox (Maps & Geocoding)

### Deployment
- Render

---

## 📂 Project Structure

```
StayEasy/
│── controllers/
│── models/
│── routes/
│── views/
│── public/
│── utils/
│── middleware.js
│── app.js
│── package.json
│── README.md
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/your-username/stayeasy.git
```

Go to the project directory

```bash
cd stayeasy
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_secret_key

CLOUD_NAME=your_cloudinary_cloud_name

CLOUD_API_KEY=your_cloudinary_api_key

CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

Start the application

```bash
npm start
```

or

```bash
node app.js
```

The application will run at

```
http://localhost:8080
```

---

## 📸 Screenshots

> Add screenshots of your Home Page, Listing Page, Login Page, and Property Details Page here.

Example:

```
screenshots/
    home.png
    listing.png
    login.png
    details.png
```

---

## 🌍 Deployment

The application is deployed on Render.

**Live Website**

https://stayeasy-rlp5.onrender.com

---

## 📚 Key Functionalities

- User Registration & Login
- Property Listing Management
- Image Upload & Storage
- Review System
- Interactive Maps
- Authentication & Authorization
- Flash Messages
- Error Handling
- Responsive UI

---

## 🔮 Future Enhancements

- ❤️ Wishlist Feature
- 🔍 Advanced Search
- 📅 Booking System
- 💳 Payment Integration
- 📍 Nearby Attractions
- 📊 Admin Dashboard
- 🌙 Dark Mode
- 📱 Progressive Web App (PWA)

---

## 👩‍💻 Author

**Priya More**

- GitHub: https://github.com/priyaamore
- Linkedin: https://www.linkedin.com/in/priya-more-8220aa32a/

---

## ⭐ Support

If you like this project, don't forget to **star ⭐ the repository**.
