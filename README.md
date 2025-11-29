# Movies App (React Native + Expo)

This project is a mobile application built with **React Native** and **Expo**, designed to consume and display data from a custom backend API. The application follows an organized and scalable structure so that additional views and components can be implemented easily.

---

## Project Structure

```
root/
│── app.config.js        # Expo configuration + environment variables
│── package.json
│── .env                 # Contains API_URL (not committed)
│
└── src/
    ├── controllers/
    │   ├── CategoryController.js
    │   └── MovieController.js
    │
    ├── services/
    │   ├── api.js       # Axios instance         
    │   ├── CategoryService.js
    │   └── MovieService.js
    │
    ├── views/
    │   ├── CategoryListView.js
    │   ├── MovieListView.js
    │   └── MovieDetailsView.js
    │
    ├── components/
    │   └── (pending)
    │
    ├── navigation/
    │   └── AppNavigator.js
    │
    └── utils/
        └── constants.js
```

---

## Tools and Technologies

### **Frontend**

* **React Native** (Expo managed workflow)
* **React Navigation** for screen transitions
* **Axios** for API requests
* **Expo Constants** for environment variables
* **Functional components + hooks** (useState, useEffect)

### **Backend (Referenced API)**

* FastAPI
* SQLAlchemy ORM
* PostgreSQL (Render)

Repository of the backend: **[Movies API](https://github.com/SamuelSanchez03/MoviesAPI)**

---

## App Functionalities

### Category List View

* Fetches all categories from the API.
* Displays category name and icon.
* Allows navigation to movies from the selected category.

### Movie List View

* Receives `category_id` as parameter.
* Fetches all movies belonging to the category.
* Shows posters, titles, and year.
* Each movie is clickable.

### Movie Details View

Suggested features for your teammates:

* Receives `movie_id` as parameter.
* Poster in larger size
* Title, year, description, director, IMDB score and rating.
* Back button to return to MovieListView

---

## How API Requests Work

### Layers:

1. **Service Layer**

   * Makes axios calls to the API.
2. **Controller Layer**

   * Handles errors, formatting, and returns clean data.
3. **Views**

   * Call controllers inside `useEffect()` and update state.

This separation makes the app maintainable and modular.

---

## Environment Variables

The app uses `app.config.js` to load environment variables.

`.env` file:

```
API_URL=https://movie-api.onrender.com
```

`app.config.js` exposes the URL:

```
extra: {
  apiUrl: process.env.API_URL
}
```

To access in code:

```
import Constants from "expo-constants";
const API_URL = Constants.expoConfig.extra.apiUrl;
```

This keeps API URLs out of the source code.

---

## How to Start the Project

```
npm install
npx expo start
```

Make sure to create `.env` in root before running.