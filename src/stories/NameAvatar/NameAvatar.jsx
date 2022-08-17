// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { Avatar } from "@material-ui/core";
// import classes from "./nameAvatar.module.css";
// import { Col, Container, Row } from "react-bootstrap";
// import {
//   // applyAsCoachIcon,
//   // helpIcon,
//   // logoutIcon,
//   // settingIcon,
// } from "../../constant/imagePath";
// import Colors from "../assets/Colors";
// import Fonts from "../assets/Fonts";

// export const NameAvatar = ({
//   userName,
//   backgroundColor,
//   textColor,
//   isAllowDropDown,
//   size,
//   customStyle,
// }) => {
//   var values = userName !== undefined ? userName.split(" ") : [];
//   var fisrtNameAlphabet = values[0] ? values[0].charAt(0) : "";
//   var lastNameAlphabet = values[1] ? values[1].charAt(0) : "";
//   const [openList, setOpenList] = useState(false);

//   return (
//     <div className={[classes.mainContainer].join(" ")}>
//       <Avatar
//         style={{
//           backgroundColor: backgroundColor && backgroundColor,
//           color: textColor && textColor,
//           width: size ? size : '28px',
//           height: size ? size : '28px',
//           ...Fonts.p4,
//           ...customStyle,
//         }}
//         onClick={() => {
//           isAllowDropDown && setOpenList(!openList);
//         }}
//       >
//         {fisrtNameAlphabet.toUpperCase()}
//         {lastNameAlphabet.toUpperCase()}
//       </Avatar>
//       {openList && (
//         <Container className={[classes.dropDownContainer].join(" ")}>
//           <Row>
//             <Col md={12} className={[classes.itemContainer].join(" ")}>
//               <img
//                 src={''}
//                 alt=""
//                 className={[classes.icons].join(" ")}
//               />
//               <span>Apply as Coach</span>
//             </Col>
//             <Col md={12} className={[classes.itemContainer].join(" ")}>
//               <img
//                 src={''}
//                 alt=""
//                 className={[classes.icons].join(" ")}
//               />
//               <span>Help</span>
//             </Col>
//             <Col md={12} className={[classes.itemContainer].join(" ")}>
//               <img
//                 src={''}
//                 alt=""
//                 className={[classes.icons].join(" ")}
//               />
//               <span>Settings</span>
//             </Col>
//             <Col md={12} className={[classes.itemContainer].join(" ")}>
//               <img
//                 src={logoutIcon}
//                 alt=""
//                 className={[classes.icons].join(" ")}
//               />
//               <span>Log out</span>
//             </Col>
//           </Row>
//         </Container>
//       )}
//     </div>
//   );
// };

// NameAvatar.propTypes = {
//   backgroundColor: PropTypes.string,
//   textColor: PropTypes.string,
//   userName: PropTypes.string.isRequired,
//   size: PropTypes.string,
//   customStyle: PropTypes.object,
// };

// NameAvatar.defaultProps = {
//   backgroundColor: Colors.neutralShadesOfNero,
//   textColor: "#ffffff",
//   userName: "Test User",
//   size: "28px",
// };
