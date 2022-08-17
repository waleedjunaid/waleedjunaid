import React, { useEffect, useRef, useState } from "react";
import classes from "./BlogCard.module.css";
import { useNavigate } from "react-router-dom";
import { ProfileImg } from "../../constant/imagePath";
import { Button } from "../Button/Button";
import { Col, Container, Row } from "react-bootstrap";

function BlogCard({ isButton = true, index, item }) {
  const navigate = useNavigate();

  const RenderContent = () => {
    return (
      <div
        className={`${classes.blogCardContainer}`}
        style={{
          paddingLeft: index % 2 == 0 ? "5%" : "25%",
          paddingRight: index % 2 == 0 ? "25%" : "5%",
        }}
      >
        <h3>{`Great Alternatives To Adobe’s Expensive App Subscriptions`}</h3>
        <div className={`${classes.blogCardDateContainer}`}>
          <span className=".p-18">{`Published: 20, June, 2022`}</span>
          {/* <span>{`|`}</span>
          <span className=".p-18">{`Royal Design Team`}</span> */}
        </div>
        <p className=".p-18">
          {`Adobe is considered as one of the widely used software all over the
          globe. Whether a professional is using it or a non-professional
          because of its easy to use guidelines it has become increasingly
          popular. Whereas Adobe appears to have upset many users with the
          increase in prices for its application subscriptions
          As you have already seen the increase in prices has set off a rise in
          activity on the internet.`}
        </p>
        {isButton && (
          <Button
            label={"Read More"}
            className={classes.btn1}
            onClick={() => navigate(`/blog/test`)}
          />
        )}
      </div>
    );
  };

  return (
    <Container fluid className={`g-0 ${classes.blogCardMainContainer}`}>
      <Row className="g-0">
        {index % 2 == 1 && (
          <Col md={6}>
            <RenderContent />
          </Col>
        )}
        <Col md={6}>
          <div className={`${classes.blogCardImageContainer}`}>
            <img src={ProfileImg} alt="blogCardImage" />
          </div>
        </Col>
        {index % 2 == 0 && (
          <Col md={6}>
            <RenderContent />
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default BlogCard;

// import React, { useEffect, useRef, useState } from "react";
// import classes from "./BlogCard.module.css";
// import { useNavigate } from "react-router-dom";
// import { ProfileImg } from "../../constant/imagePath";
// import { Button } from "../Button/Button";

// function BlogCard({ isButton = true }) {
//   const navigate = useNavigate();

//   return (
//     <>
//       <div className={`${classes.blogCardContainer}`}>
//         <div className={`${classes.blogCardImageContainer}`}>
//           <img src={ProfileImg} alt="blogCardImage" />
//         </div>
//         <div className={`${classes.blogCardDateContainer}`}>
//           <span className=".p-18">{`Published: 20, June, 2022`}</span>
//           <span>{`|`}</span>
//           <span className=".p-18">{`Royal Design Team`}</span>
//         </div>
//         <h3>{`Great Alternatives To Adobe’s Expensive App Subscriptions`}</h3>
//         <p className=".p-18">
//           {`Adobe is considered as one of the widely used software all over the
//           globe. Whether a professional is using it or a non-professional
//           because of its easy to use guidelines it has become increasingly
//           popular. Whereas Adobe appears to have upset many users with the
//           increase in prices for its application subscriptions
//           As you have already seen the increase in prices has set off a rise in
//           activity on the internet, which involves many annoyed users jumping
//           onto the conclusion of alternatives to Adobe on Twitter threads and
//           blog posts.`}
//         </p>
//         {isButton && (
//           <Button
//             label={"Learn More"}
//             className={classes.btn1}
//             onClick={() => navigate(`/blogs/test`)}
//           />
//         )}
//       </div>
//     </>
//   );
// }

// export default BlogCard;
