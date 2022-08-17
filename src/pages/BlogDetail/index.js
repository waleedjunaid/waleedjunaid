import React, { useEffect, useState } from "react";
import classes from "./BlogDetail.module.css";
import { Container } from "react-bootstrap";
import Footer from "../../stories/Footer";
import Header from "../../stories/Header";
import parse from "html-react-parser";
import { apiHeader, BaseURL } from "../../config/apiUrl";
import { Get } from "../../Axios/AxiosFunctions";
import { Loader } from "../../stories/Loader";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const BlogDetail = (props) => {
  const state = useLocation()?.state;
  const accessToken = useSelector((state) => state?.authReducer?.access_token);

  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState(null);
  let blogUrl = BaseURL(`blog/${state?.id}`);

  // useEffect(() => {
  //   GetBlogData();
  // }, []);

  const GetBlogData = async function () {
    setLoading(true);
    const responseData = await Get(blogUrl, accessToken);
    if (responseData !== undefined) {
      setBlogData(responseData?.data?.data);
    }
    setLoading(false);
  };

  return (
    <div className={[classes.BlogMainSection].join(" ")}>
      <Header containerClass={classes.mainContainer} />

      {loading ? (
        <div className={classes.loaderBox}>
          <Loader />
        </div>
      ) : (
        <Container
          fluid
          className={[classes.mainContainer, classes.MiddleSection].join(" ")}
        >
          <div>
            <h2 className={[classes.header].join(" ")}>Blog Detail</h2>
          </div>
        </Container>
      )}

      <Footer containerClass={classes.mainContainer} />
    </div>
  );
};

export default BlogDetail;
