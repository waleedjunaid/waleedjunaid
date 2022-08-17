import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, useLocation } from "react-router-dom";

function ProtectedRouter({ element: Element }) {
  const location = useLocation();
  const path = location.pathname;
  const isAuthenticated = useSelector((state) => state.authReducer.isLogin);
  const verifiedAccount = useSelector(
    (state) => state.authReducer?.user?.isVerifiedByAdmin
  );
  return (
    <>
      {(isAuthenticated && verifiedAccount && path !== "/thankyou") ||
      (isAuthenticated && !verifiedAccount && path == "/thankyou") ? (
        Element
      ) : isAuthenticated && verifiedAccount ? (
        <Navigate replace to="/dashboard" />
      ) : isAuthenticated && !verifiedAccount ? (
        <Navigate replace to="/thankyou" />
      ) : (
        <Navigate replace to="/login" />
      )}
    </>
  );
}
export default ProtectedRouter;

// import React from "react";
// import { useSelector } from "react-redux";
// import { Route, Navigate } from "react-router-dom";

// function ProtectedRouter({ element: Element, ...restOfProps }) {
//     const isAuthenticated = useSelector((state) => state.authReducer.isLogin);

//     return (
//         <Route
//             {...restOfProps}
//             element={isAuthenticated ? Element : <Navigate replace to="/" />}
//         />
//     );
// }
// export default ProtectedRouter;
