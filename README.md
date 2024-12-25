# React Router DOM Learning Project

This project is a simple React application created to learn and explore the basics of routing using `react-router-dom`. It implements dynamic routes, nested routing, route loaders, and more to provide a hands-on understanding of React Router.

---

## 🚀 Features

- **Nested Routing:** Demonstrates the use of nested routes with shared layouts.
- **Dynamic Routing:** Showcases how to use dynamic parameters in routes (e.g., `/user/:userID`).
- **Route Loaders:** Integrates loaders for data fetching before rendering a component (e.g., GitHub component).
- **Component Structure:** Organized components for modular and reusable code.

---

## 💂️ Project Structure

```plaintext
src/
├── components/
│   ├── About/
│   │   └── About.jsx
│   ├── Contact/
│   │   └── Contact.jsx
│   ├── GitHub/
│   │   ├── GitHub.jsx
│   │   └── githubInfoLoader.js
│   ├── Home/
│   │   └── Home.jsx
│   └── User/
│       └── User.jsx
├── Layout.jsx
├── main.jsx
├── index.css
└── index.html
```

---

## 🛠️ Technologies Used

- **React**: Front-end library for building user interfaces.
- **React Router DOM**: Library for implementing routing in React.
- **JavaScript (ES6+)**: Modern syntax for developing the application.
- **CSS**: For basic styling.

---

## 📚 Key Concepts Learned

1. **Browser Router Setup**
   - Used `createBrowserRouter` to configure routes.
   - Demonstrated two approaches for defining routes:
     - Array-based configuration.
     - JSX-based route creation using `createRoutesFromElements`.

2. **Nested Routes**
   - Organized routes under a common layout component (`Layout.jsx`).

3. **Dynamic Routes**
   - Implemented a route with dynamic parameters (`/user/:userID`).

4. **Route Loaders**
   - Utilized `loader` for data fetching before rendering a route (`/github`).

---

## 🔧 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/imshashwatsingh/React-Router-Project.git
   cd React-Router-Project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to explore the app.

---

## 🖥️ Routing Details

| Path             | Component  | Description                                      |
|------------------|------------|--------------------------------------------------|
| `/`              | `Home`     | Displays the home page.                         |
| `/about`         | `About`    | Displays information about the app.             |
| `/contact`       | `Contact`  | Provides a contact form/page.                   |
| `/user/:userID`  | `User`     | Displays user-specific information dynamically. |
| `/github`        | `GitHub`   | Displays GitHub info with preloaded data.       |

---

## 📝 Future Improvements

- Add more examples of route guards (protected routes).
- Implement advanced data fetching with custom hooks.
- Explore animations during route transitions.
- Introduce error boundaries for handling route errors.

---

## 🙍🏻‍♂️ Contribution

Feel free to fork this project and submit pull requests to enhance it or report issues.

---

## 📜 License

This project is open source and available under the [MIT License](./LICENSE).

---

## 🙌 Acknowledgments

This project was built as part of a learning exercise to explore the features of `react-router-dom`. Special thanks to the React community for providing amazing resources and documentation.

