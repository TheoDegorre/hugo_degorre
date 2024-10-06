import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import ErrorPage from "./pages/ErrorPage";
import WelcomePage from "./pages/WelcomePage";
import BiographyPage from "./pages/BiographyPage";
import EventPage from "./pages/EventPage";
import DirectoryPage from "./pages/DirectoryPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <WelcomePage />,
      },
      {
        path: "/biography",
        element: <BiographyPage />,
      },
      {
        path: "/event",
        element: <EventPage />,
        
      },
      {
        path: "/directory",
        element: <DirectoryPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
