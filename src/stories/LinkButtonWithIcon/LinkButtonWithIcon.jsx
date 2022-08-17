// import React from "react";
// import PropTypes from "prop-types";
// import Colors from "../assets/Colors";
// import Fonts from "../assets/Fonts";
// import classes from "./LinkButtonWithIcon.module.css";
// import { ReactSVG } from "react-svg";

// export const LinkButtonWithIcon = ({
//   text,
//   onClick,
//   rightIcon,
//   leftIcon,
//   customStyle,
//   iconStyle,
//   disabled,
//   primary,
//   iconColor,
//   textColor,
// }) => {
//   return (
//     <>
//       <style jsx>{`
//         .${classes.btnWithIcon} {
//         }
//         .${classes.iconDisabled} path {
//           stroke: ${Colors.neutralShadesOfDimGray};
//         }
//         .${classes.blueColor} {
//           color: ${Colors.mainBlue};
//         }
//         .${classes.blueColor}:hover {
//           color: ${Colors.mainBlue};
//         }
//         .${classes.blueColor}:disabled,
//           .${classes.blueColor}:disabled
//           svg
//           path {
//           color: ${Colors.neutralShadesOfDimGray};
//           stroke: ${Colors.neutralShadesOfDimGray};
//         }

//         .${classes.blackColor} {
//           color: ${Colors.neutralShadesOfNero};
//         }
//         .${classes.blackColor}:hover {
//           color: ${Colors.mainBlue};
//         }
//         .${classes.blackColor}:disabled,
//           .${classes.blackColor}:disabled
//           svg
//           path {
//           color: ${Colors.neutralShadesOfDimGray};
//           stroke: ${Colors.neutralShadesOfDimGray};
//         }

//         .${classes.blackColor}:hover path {
//           stroke: ${Colors.mainBlue};
//         }
//         .${classes.blackIcon} path {
//           stroke: ${Colors.neutralShadesOfNero};
//         }
//         .${classes.blueIcon} path {
//           stroke: ${Colors.mainBlue};
//         }
//       `}</style>

//       <button
//         className={`${[
//           primary === true ? classes.blueColor : classes.blackColor,
//         ].join(" ")}`}
//         onClick={onClick}
//         style={{
//           color: textColor && textColor,
//           ...Fonts.b2,
//           lineHeight: "20px",
//           ...customStyle,
//         }}
//         disabled={disabled}
//       >
//         {leftIcon && (
//           <span className={classes.left} style={{ ...iconStyle }}>
//             <ReactSVG
//               src={leftIcon}
//               beforeInjection={(svg) => {
//                 svg.classList.add(
//                   disabled === true
//                     ? classes.iconDisabled
//                     : primary === true
//                     ? classes.blueIcon
//                     : classes.blackIcon
//                 );
//               }}
//               style={{ stroke: iconColor }}
//             />
//           </span>
//         )}
//         {text}
//         {rightIcon && (
//           <span className={classes.right} style={{ ...iconStyle }}>
//             <ReactSVG
//               src={rightIcon}
//               beforeInjection={(svg) => {
//                 svg.classList.add(
//                   disabled === true
//                     ? classes.iconDisabled
//                     : primary === true
//                     ? classes.blueIcon
//                     : classes.blackIcon
//                 );
//               }}
//               style={{ stroke: iconColor }}
//             />
//           </span>
//         )}
//       </button>
//     </>
//   );
// };

// LinkButtonWithIcon.propType = {
//   text: PropTypes.string,
//   onClick: PropTypes.func,
//   rightIcon: PropTypes.string,
//   leftIcon: PropTypes.string,
//   customStyle: PropTypes.object,
//   disabled: PropTypes.bool,
//   primary: PropTypes.bool,
// };

// LinkButtonWithIcon.defaultProps = {
//   text: "",
//   // primary: true,
// };
