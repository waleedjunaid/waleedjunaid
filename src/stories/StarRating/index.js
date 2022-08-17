import React from "react";
import Ratings from "react-star-ratings";

export function StarRating({
  numberOfStars,
  rating,
  starDimension = "15px",
  starEmptyColor,
  starSpacing = "1px",
  type,
  setter,
}) {
  const changeRating = (newRating, name) => {
    setter(newRating);
  };
  return (
    <>
      <style jsx>{`
        .star-container svg path {
          stroke: #ffcd02 !important;
          stroke-width: 3px !important;
        }
        .star-container svg path:hover {
          fill: rgb(255, 205, 2) !important;
        }
      `}</style>

      <Ratings
        numberOfStars={numberOfStars}
        rating={rating || 0}
        starDimension={starDimension}
        starRatedColor="#FFCD02"
        starEmptyColor="transparent"
        starSpacing={starSpacing}
        changeRating={type === "submit" && changeRating}
        starSelectingHoverColor="#FFCD02"
      />
    </>
  );
}
