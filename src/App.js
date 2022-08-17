import "./assets/Styles/style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-quill/dist/quill.snow.css";

import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Login from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUp/SignUp";
import LandingPage from "./pages/LandingPage";

import TermsAndCondition from "./pages/TermsAndCondition/TermsAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

import BeforeLoginRoute from "./Helper/BeforeLoginRoute";

import { useDispatch, useSelector } from "react-redux";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.authReducer?.user);

  useEffect(() => {
    const getToken = async () => {
      // let token = "";
      // if (firebase.messaging.isSupported()) {
      // token = await messaging.getToken(firebaseVapidObject);
      // dispatch(SaveFcmToken(token));
      // }
    };

    getToken();
  }, []);

  return (
    <>
      <ToastContainer />

      <BrowserRouter>
        <Routes>
          {/* Before Login Screens */}
          <Route
            path="/login"
            exact
            element={<BeforeLoginRoute element={<Login />} />}
          />
          <Route
            path="/signup"
            exact
            element={<BeforeLoginRoute element={<SignUp />} />}
          />
          <Route
            path="/"
            exact
            element={<BeforeLoginRoute element={<LandingPage />} />}
          />
          <Route
            path="/terms-and-condition"
            exact
            element={<BeforeLoginRoute element={<TermsAndCondition />} />}
          />
          <Route
            path="/privacy-policy"
            exact
            element={<BeforeLoginRoute element={<PrivacyPolicy />} />}
          />
          <Route
            path="/blogs"
            exact
            element={<BeforeLoginRoute element={<Blog />} />}
          />
          <Route
            path="/blog/:title"
            exact
            element={<BeforeLoginRoute element={<BlogDetail />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
