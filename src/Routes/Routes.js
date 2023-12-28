import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Verification/Login";
import Signup from "../Verification/Signup";
import Companies from "../Companies/Companies";
import JobsList from "../Jobs/JobsList";
import CompanyDetail from "../Companies/CompanyDetail";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Profile/Profile";

const AppRoutes = ({ login, signup }) => {

  console.debug(
    "Routes",
    `login=${typeof login}`,
    `signup=${typeof signup}`,
);



  return (
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login login={login}/>} />
        <Route exact path="/signup" element={<Signup signup={signup}/>} />
        <Route element={<PrivateRoute/>}>
          <Route element={<Companies/>} path="/companies" exact />
          <Route exact path="/companies/:handle" element={ <CompanyDetail />}/>
          <Route exact path="/jobs" element={<JobsList />}/>
          <Route exact path="/users/:username" element={<Profile /> } />
        </Route>
      </Routes>
  );
};

export default AppRoutes;
