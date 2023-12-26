import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Verification/Login";
import Signup from "../Verification/Signup";
import Companies from "../Companies/Companies";
import JobsList from "../Jobs/JobsList";
import CompanyDetail from "../Companies/CompanyDetail";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = ({ login, signup }) => {

  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`,
);



  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login login={login}/>} />
        <Route exact path="/signup" element={<Signup signup={signup}/>} />
        <PrivateRoute> exact path="/companies" element={<Companies />} </PrivateRoute>
        <PrivateRoute> exact path="/companies/:handle" element={<CompanyDetail />} </PrivateRoute>
        <PrivateRoute> exact path="/jobs" element={<JobsList />} </PrivateRoute>
        <PrivateRoute> exact path="/users/:username" element={<Signup />} </PrivateRoute>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
