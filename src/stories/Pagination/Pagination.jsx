import React, { useEffect } from "react";
import Colors from "../assets/Colors";
import Fonts from "../assets/Fonts";
import classes from "./Pagination.module.css";
import Pagination from "@mui/material/Pagination";
import "./pagination.css";

export const PaginationComponent = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div className={[classes.paginationDiv].join(" ")}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        className={[classes.pageItem].join(" ")}
      />
    </div>
  );
};
