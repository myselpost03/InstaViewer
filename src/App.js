
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  Private,
  FAQ,
  PrivateContact,
  Tasks,
  NotFound,
} from "./Pages/index";

import LoadingSpinner from "./Components/LoadingSpinner";

const publicRoutes = [
  { path: "/", component: Private },
  { path: "/home-page", component: Private },
  { path: "/FAQ", component: FAQ },
  { path: "/contact", component: PrivateContact },
  { path: "/tasks", component: Tasks },
];

// Detect mobile devices
const isMobileDevice = () =>
  /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

function AppContent() {
  const [ready, setReady] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Mark the app as ready after mounting
    setReady(true);
  }, []);

  if (!ready && isMobileDevice() && location.pathname === "/") {
    return <LoadingSpinner />;
  }

  return (
    <Routes>
      {publicRoutes.map(({ path, component: Component }) => (
        <Route
          key={path}
          path={path}
          element={<Component />}
        />
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
