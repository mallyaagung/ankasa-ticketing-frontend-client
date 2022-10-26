import React, { useState, Outlet } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "../pages/Profile";
import MyBooking from "../pages/MyBooking";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import SearchPage from "../pages/SearchPage";
import TicketDetail from "../pages/TicketDetail";
import BookingDetail from "../pages/BookingDetail";
import AdminAirlines from "../pages/admin/Airlanes/index.js";
import Create from "../pages/admin/Airlanes/Create.js";
import Detail from "../pages/admin/Airlanes/Detail.js";
import Edit from "../pages/admin/Airlanes/Edit.js";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  if (token) {
    return children;
  }
  return <Navigate to="/login" />;
}

function PublicRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return children;
  }
  return <Navigate to="/" />;
}

function Roles({ children }) {
  const level = localStorage.getItem("level");
  if (level == 2) {
    return children;
  }
  return <Navigate to="/" />;
}
const AdminRoute = () => {
  const [level, setLevel] = useState(
    localStorage.getItem("level") == 2 ? true : null
  );

  return level ? <Outlet /> : <Navigate to="/false" />;
};

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/admin/airlines"
          element={
            <Roles>
              <AdminAirlines />
            </Roles>
          }
        />
        <Route
          exact
          path="/admin/createAirlines"
          element={
            <Roles>
              <Create />
            </Roles>
          }
        />
        <Route
          exact
          path="/admin/detailAirlines/:id"
          element={
            <Roles>
              <Detail />
            </Roles>
          }
        />
        <Route
          exact
          path="/admin/editAirlines/:id"
          element={
            <Roles>
              <Edit />
            </Roles>
          }
        />
        <Route
          path="/"
          element={
            // <PrivateRoute>
            <Home />
            //  </PrivateRoute>
          }
        />

        <Route path="/search" element={<SearchPage />} />

        <Route
          path="/detail/:id"
          element={
            <PrivateRoute>
              <BookingDetail />
            </PrivateRoute>
          }
        />

        <Route
          path={"/ticket-detail/:id"}
          element={
            <PrivateRoute>
              <TicketDetail />
            </PrivateRoute>
          }
        />

        <Route
          path="/mybooking"
          element={
            <PrivateRoute>
              <MyBooking />
            </PrivateRoute>
          }
        />

        <Route path="/profile">
          <Route
            index
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            // <PublicRoute>
            <Login />
            // </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            // <PublicRoute>
            <Signup />
            // </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
