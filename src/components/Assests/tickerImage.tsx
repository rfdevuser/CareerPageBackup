"use client"
import React from 'react';

interface News {
  title: string;
  imageUrl: string;
}

const TickerWrapperIMG: React.FC = () => {
  // Define newsItems directly within the component
  const newsItems: News[] = [
    {
      title: '',
      imageUrl: '/client_logo/marriott.jpg',
    },
    {
      title: '',
      imageUrl: '/client_logo/shangrila.jpg',
    },
    {
      title: '',
      imageUrl: '/client_logo/shreyas.jpg',
    },
    {
      title: '',
      imageUrl: '/client_logo/tamara.jpg',
    },
    {
      title: '',
      imageUrl: '/client_logo/thepaul.jpg.jpg',
    },
  ];

  return (
    <div id="cbwrap">
      {/* Horizontal ticker */}
      <div className="hwrap">
        <div className="hmove">
          {newsItems.map((item, index) => (
            <div key={index} className="hitem">
              {/* Display image */}
              <img src={item.imageUrl} alt={item.title} />
              {/* Optionally display title */}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TickerWrapperIMG;
