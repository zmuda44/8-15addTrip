import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Landing from "./pages/landing/landing.jsx";
import DreamTrips from "./pages/trips/dreamTrips.jsx";
import IndividualTrip from "./pages/trips/individualTrip.jsx";
import Login from "./pages/siteEntry/login.jsx";
import PreviousTrips from "./pages/trips/previousTrips.jsx";
import Profile from "./pages/profile/profile.jsx";
import SignUp from "./pages/siteEntry/signUp.jsx";
import UpcomingTrips from "./pages/trips/upcomingTrips.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/dreamtrips",
        element: <DreamTrips />,
      },
      {
        path: "/individualtrip",
        element: <IndividualTrip />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/previoustrips",
        element: <PreviousTrips />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/upcomingtrips",
        element: <UpcomingTrips />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// Will delete the lines below eventually
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
