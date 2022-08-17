import React from "react";
import PropTypes from "prop-types";
import classes from "./ProjectCard.module.css";
import { ProfileImg, FeaturedIcon } from "../../constant/imagePath";
import Ratings from "react-star-ratings";
import { MdVerified } from "react-icons/md";
import { ReactSVG } from "react-svg";
import { StarRating } from "../StarRating";
import { Tags } from "../Tags";
import { imageUrl } from "../../config/apiUrl";
import { useSelector } from "react-redux";
import { IoBookmarks, IoBookmarksOutline } from "react-icons/io5";

export const ProjectCard = ({ data, onClick, HandleBookmarkResponse }) => {
  const user = useSelector((state) => state.authReducer?.user);
  return (
    <>
      <style jsx>{`
        .star-container svg path {
          stroke: #ffcd02 !important;
          stroke-width: 3px !important;
        }
      `}</style>
      <div className={[classes.cardBg].join(" ")} onClick={onClick}>
        <div className={[classes.logoImg].join(" ")}>
          <img src={`${imageUrl}${data?.logo}`} alt="..." />
        </div>
        <div className={[classes.middleSectionDiv].join(" ")}>
          <div className={[classes.titleDiv].join(" ")}>
            <p className={[classes.title, classes.w90].join(" ")}>
              {data?.jobTitle}
            </p>
            {user?.role !== "business" &&
              (data?.isBookmarked ? (
                <IoBookmarks color={"var(--main-color)"} size="30px" />
              ) : (
                <IoBookmarksOutline color={"var(--main-color)"} size="30px" />
              ))}
          </div>
          <p className={[classes.description, classes.w90].join(" ")}>
            {data?.description}
          </p>
          <div className={[classes.mb14].join(" ")}>
            <Tags tags={data?.preferences} />
          </div>
          <div className={[classes.lastSectionDiv].join(" ")}>
            <StarRating numberOfStars={5} rating={data?.avgRating} />
            <div className={[classes.verifiedDiv].join(" ")}>
              {data?.isVerifiedByAdmin && (
                <div className={[classes.dflex].join(" ")}>
                  <MdVerified fill={"var(--main-color)"} />
                  <p className={[classes.verifyColor].join(" ")}>
                    Project Verified
                  </p>
                </div>
              )}
              {data?.isFeatured && (
                <div className={[classes.dflex].join(" ")}>
                  <img
                    className={[classes.featureImage].join(" ")}
                    src={FeaturedIcon}
                  />
                  <p className={[classes.verifyColor].join(" ")}>
                    Project Featured
                  </p>
                </div>
              )}
              {/* <div>
                <p className={[classes.proposalColor].join(" ")}>
                  No Of Candidates:
                  <span>{data?.noOfCandidates}</span>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
ProjectCard.propTypes = {
  data: PropTypes.object,
  rating: PropTypes.string,
  isFeatured: PropTypes.bool,
};

ProjectCard.defaultProps = {
  data: {
    title: "UI/UX Designer needed for hight fidelity",
    description:
      "We are looking for a Figma designer for a 2 page design. If we are satisfied then more pages will follow. Also it will be a trial for a potential long term position.",
    preferedTypes: ["Figma", "Landing", "Designer"],
    noOfCanditates: 10,
    logoImg: ProfileImg,
    isFeatured: true,
    avgRating: 3,
    user: {
      id: 1,
      ratingAverage: 4,
    },
  },
};
