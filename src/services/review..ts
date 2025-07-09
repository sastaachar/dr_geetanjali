export interface ReviewI {
  username: string;
  comment: string;
  rating: number;
  userProfileLink: string;
  id: string;
  reviewLink?: string;
}

const demoData: ReviewI[] = [
  {
    comment:
      "I had an amazing experience with Geetanjali ma'am during my root canal cap, and cavity filling treatments. She was incredibly professional and thorough, taking the time to explain every step of the process in detail. Her calm and reassuring demeanor helped ease my anxiety throughout the procedures. I truly appreciate her patience and dedication to ensuring I was comfortable at all times. Highly recommend her for anyone looking for excellent dental care!",
    id: "1",
    rating: 5,
    username: "Rahul Singh",
    userProfileLink:
      "https://lh3.googleusercontent.com/a/ACg8ocJ6gEUeVm7SNqzbvpw9G_Mm-xMZ-VHCBOWirJyqwsFIM3HR6FPa=w60-h60-p-rp-mo-br100",
  },
  {
    comment:
      "Had gone to Dr Geetanjali clinic for my braces treatment and it was such a good experience. Dr Geetanjali is good at her work and explained the procedure well. Highly recommended",
    id: "2",
    rating: 5,
    username: "Harsimran Chawla",
    userProfileLink:
      "https://lh3.googleusercontent.com/a/ACg8ocIotvz0wmWbYFmAZkKZWRa3hnVL2m1WlfIb_mLbJun026gRRQ",
  },
  {
    comment:
      "Visited Dr. Geetanjali’s clinic for a cleaning. Ambience of the clinic was really nice and overall the doctor’s attitude was very professional. Completely satisfied with the treatment. Dr. Geetanjali makes an extra effort to educate her patients on how to maintain good oral hygiene.",
    id: "3",
    rating: 5,
    username: "Dinal Malviya",
    userProfileLink:
      "https://lh3.googleusercontent.com/a/ACg8ocK8Y5M-JghxHUFGFss6Ll7QPsm6oBf1EKik4IccdrsLoeGy",
  },
  {
    comment:
      "Really nice clinic. Dr. Geetanjali is a professional. I accompanied my friend for her root canal here. The procedure was absolutely painless and the outcome was also amazing.",
    id: "4",
    rating: 5,
    username: "Ruhi Rajita",
    userProfileLink:
      "https://lh3.googleusercontent.com/a-/ALV-UjUD5FP6PQ4t1xzKdUuq9SlbeZZERnn0-EazevcwrXhi0LxRigtzHQ",
  },
  {
    comment:
      "I have done my teeth cleaning here, it was done very professionally and the results were quite good. Will recommend 10/10",
    id: "5",
    rating: 5,
    username: "Justin John Mathew",
    userProfileLink:
      "https://lh3.googleusercontent.com/a/ACg8ocKK1QCRKqmI0nzFcqzy9u0vlL7Ts-_swYIsr9myrorUEfABiQ",
  },
  {
    comment:
      "I couldn't be more pleased with my experience at Dr Geetanjali's clinic. The staff is welcoming and professional.Dr Geetanjali is incredibly skilled and attentive, and made sure I was comfortable throughout the process. I loved  how she checked in with me regularly, making sure I was doing okay. Im  relieved and grateful for the excellent care I received and highly recommend it for anyone in need of a root canal or any other dental work!",
    id: "6",
    rating: 5,
    username: "Joyce James",
    userProfileLink:
      "https://lh3.googleusercontent.com/a-/ALV-UjWz8CU0cCx2InNIIAtsOGtjWu8BkxegNihXuaJsSBPe-pyxPZzGxw",
  },
];

export async function getReviews() {
  return demoData;
}
