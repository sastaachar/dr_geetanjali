/* eslint-disable @next/next/no-img-element */
import { Horizontal, Vertical } from "@cute-style/container";
import { getReviews, ReviewI } from "../../services/review.";
import { Loader } from "@cute-style/loader";
import React from "react";

import style from "./reviews.module.scss";
import { t } from "@translation";

const Rating = ({ rating }: { rating: number }) => {
  return (
    <Horizontal>
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
    <Horizontal className={style.review}>
      <img alt={t("MAIN_IMG_ALT")} src={review.userProfileLink} />
      <Vertical>
        <span>{review.username}</span>
        <Rating rating={review.rating} />
        <span>{review.comment}</span>
      </Vertical>
    </Horizontal>
  );
};

export const Reviews = async () => {
  const reviewsData = await getReviews();
  return (
    <Horizontal className={style.reviews}>
      {reviewsData.length === 0 && <Loader />}

      {reviewsData.map((r) => {
        return <Review review={r} key={r.id} />;
      })}
    </Horizontal>
  );
};
