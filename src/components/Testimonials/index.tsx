"use client";
import React from "react";
import FeedbackCard from "./FeedbackCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: "https://i.imgur.com/Dn0qoCG.png",
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: "https://i.imgur.com/fk8eEvW.png",
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: "https://i.imgur.com/dLxxRDy.png",
  },
  {
    id: "feedback-4",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman sinha",
    title: "Founder & Leader",
    img: "https://i.imgur.com/Dn0qoCG.png",
  },
  {
    id: "feedback-5",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: "https://i.imgur.com/fk8eEvW.png",
  },
  {
    id: "feedback-6",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: "https://i.imgur.com/dLxxRDy.png",
  },
  {
    id: "feedback-7",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: "https://i.imgur.com/Dn0qoCG.png",
  },
  {
    id: "feedback-8",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: "https://i.imgur.com/fk8eEvW.png",
  },
  {
    id: "feedback-9",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: "https://i.imgur.com/dLxxRDy.png",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="clients" className={`sm:py-16 py-6 relative bg-white text-black `}>
      <div className="absolute z-0 w-60 h-60 -right-1/2 rounded-full blue__gradient bottom-40" />

      <div className="w-full flex flex-col sm:flex-row justify-between items-center relative z-1">
        <h2 className={`font-poppins font-semibold text-4xl text-black leading-tight w-full sm:justify-center`}>
        𝑾𝒉𝒂𝒕 𝒐𝒖𝒓 𝑬𝒎𝒑𝒍𝒐𝒚𝒆𝒆𝒔 𝒂𝒓𝒆 <br className="sm:block hidden" /> 𝒔𝒂𝒚𝒊𝒏𝒈 𝒂𝒃𝒐𝒖𝒕 𝒖𝒔
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`font-poppins font-normal text-black text-lg leading-normal max-w-md`}>
          𝑩𝒆𝒉𝒊𝒏𝒅 𝒕𝒉𝒆 𝑺𝒄𝒆𝒏𝒆𝒔: 𝑽𝒐𝒊𝒄𝒆𝒔 𝒐𝒇 𝑶𝒖𝒓 𝑻𝒆𝒂𝒎
          </p>
        </div>
      </div>

      <Slider {...settings} className="mt-6">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </Slider>
  
    </section>
  );
};

export default Testimonials;
