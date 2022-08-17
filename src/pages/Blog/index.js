import React, { useEffect, useState } from "react";
import classes from "./Blog.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../stories/Footer";
import Header from "../../stories/Header";
import { apiHeader, BaseURL } from "../../config/apiUrl";
import { Get } from "../../Axios/AxiosFunctions";
import { Loader } from "../../stories/Loader";
import BlogCard from "../../stories/BlogCard/BlogCard";
import { useSelector } from "react-redux";
import { LogoWhite } from "../../constant/imagePath";
import HeaderClasses from "../../stories/Header/DesktopHeader.module.css";

const Blog = (props) => {
  const accessToken = useSelector((state) => state?.authReducer?.access_token);

  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState([1, 2, 3, 4, 5]);
  let blogUrl = BaseURL(`blog`);

  const GetAllBlogData = async () => {
    setLoading(true);
    const responseData = await Get(blogUrl, accessToken);
    if (responseData !== undefined) {
      setBlogData(responseData?.data?.data);
    }
    setLoading(false);
  };

  // useEffect(() => {
  //   GetAllBlogData();
  // }, []);

  return (
    <div className={[classes.BlogMainSection].join(" ")}>
      <Header
        backgroundColor={"var(--white-color)"}
        containerClass={classes.mainContainer}
      />

      {loading ? (
        <div className={classes.loaderBox}>
          <Loader />
        </div>
      ) : (
        <Container fluid className={`g-0`}>
          <Row className="g-0">
            {blogData.map((item, index) => {
              return (
                <Col md={12}>
                  <BlogCard item={item} index={index} key={index} />{" "}
                </Col>
              );
            })}
          </Row>
        </Container>
      )}

      <Footer containerClass={classes.mainContainer} />
    </div>
  );
};

export default Blog;
