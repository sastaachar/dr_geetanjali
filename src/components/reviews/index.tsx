/* eslint-disable @next/next/no-img-element */
import { Horizontal, Vertical } from "@cute-style/container";
import { getReviews, ReviewI } from "../../services/review.";
import { Loader } from "@cute-style/loader";
import React from "react";

import style from "./reviews.module.scss";
import { t } from "@translation";

const Rating = ({ rating }: { rating: number }) => {
  return (
    <Horizontal
      alignItem="start"
      justifyContent="start"
      className={style.ratingWrapper}
    >
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? style.rating : style.ratingEmpty}>
          ★
        </span>
      ))}
    </Horizontal>
  );
};

export const Review: React.FC<{ review: ReviewI }> = ({ review }) => {
  return (
    <Horizontal
      className={style.review}
      alignItem="start"
    >
      <img alt={t("MAIN_IMG_ALT")} src={review.userProfileLink} />
      <Vertical
        alignItem="start"
        className={style.reviewContent}
      >
        <span>{review.username}</span>
        <Rating rating={review.rating} />
        <span className={style.reviewComment}>{review.comment}</span>
      </Vertical>
    </Horizontal>
  );
};
/**
 * No default state , cause assuming we always have reviews
 */
export const Reviews = async () => {
  const reviewsData = await getReviews();
  return (
    <Vertical
      className={style.reviewsWrapper}
      alignItem="start"
    >
      {reviewsData.length === 0 && <Loader />}
      <Horizontal
        alignItem="start"
        // take exactly 1 part and scroll rest
        parts={1}
        className={style.reviews}
      >
        {reviewsData.map((r) => {
          return <Review review={r} key={r.id} />;
        })}
      </Horizontal>
    </Vertical>
  );
};
