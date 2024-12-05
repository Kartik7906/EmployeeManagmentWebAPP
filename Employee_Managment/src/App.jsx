import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Authentication/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/Localstorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null); // Tracks the user role: 'admin', 'employee', or null
  const [loggedInUserData, setLoggedInUserData] = useState(null); // Stores employee details if logged in
  const [userData, setUserData] = useContext(AuthContext); // Employee data from context

  useEffect(() => {
    // Initialize localStorage on first load
    setLocalStorage();

    // Check for logged-in user in localStorage
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      if (parsedUser.role === "employee") {
        setLoggedInUserData(parsedUser.data);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }));
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
      } else {
        alert("Invalid email or password.");
      }
    } else {
      alert("No employee data found. Please try again later.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedInUserData(null);
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard changeUser={handleLogout} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
