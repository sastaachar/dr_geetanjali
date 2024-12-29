import { Horizontal, Vertical } from "@cute-style/container";

const Review = () => {
  return (
    <Horizontal
      style={{
        maxWidth: "220px",
        border: "1px solid red",
      }}
    >
      <Horizontal>Image</Horizontal>
      <Vertical>
        <span>awdwa</span>
        <span>stasrt astasrt astasrt</span>
      </Vertical>
    </Horizontal>
  );
};

export const Reviews = () => {
  return (
    <Horizontal
      style={{
        maxHeight: "80px",
        border: "1px solid blue",
      }}
    >
      <Review />
      <Review />
    </Horizontal>
  );
};
