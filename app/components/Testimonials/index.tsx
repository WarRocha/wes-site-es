"use client";
import Slider from "react-slick";
import React from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA
interface DataType {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Lorena da Cruz",
    profession: 'CEO, Parkview Int.Ltd',
    comment: 'O Wesley é um profissional muito organizado, responsável e proativo. Sempre está disposto a aprender coisas novas e se reinventar. Com certeza, é um profissional e trilhará sempre o melhor caminho, onde estiver exercendo seus conhecimentos e práticas profissionais.',
    imgSrc: '/images/testimonial/lorena.jpeg',
  },
  {
    name: "Fábio Barbosa",
    profession: 'CEO, Parkview Int.Ltd',
    comment: 'Excelente professor de espanhol e de português para estrangeiros.',
    imgSrc: '/images/testimonial/fabio.jpeg',
  },
  {
    name: "Lorena da Cruz",
    profession: 'CEO, Parkview Int.Ltd',
    comment: 'O Wesley é um profissional muito organizado, responsável e proativo. Sempre está disposto a aprender coisas novas e se reinventar. Com certeza, é um profissional e trilhará sempre o melhor caminho, onde estiver exercendo seus conhecimentos e práticas profissionais.',
    imgSrc: '/images/testimonial/lorena.jpeg',
  },
];

// CAROUSEL SETTINGS
const MultipleItems = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 2,
    arrows: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="pt-40 pb-32 lg:py-32" id="testimonial-section">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
       
          <h3 className="text-center text-4xl sm:text-20xl text-treetop">Comentários</h3>
      

        <Slider {...settings}>
          {postData.map((items, i) => (
            <div key={i} className="relative">
              <div className="bg-white shadow-lg m-3 p-10 my-20 rounded-3xl">
                <Image
                  src={items.imgSrc}
                  alt={items.name}
                  width={71}
                  height={71}
                  className="rounded-full inline-block m-auto absolute -top-10 left-1/2 transform -translate-x-1/2"
                  priority
                />
                <h4 className="text-base font-medium text-gray-700 my-4">{items.comment}</h4>
                <hr className="border-lightgrey" />
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-base font-medium pt-4 pb-2">{items.name}</h3>
                    {/* <p className="text-sm text-gray-500">{items.profession}</p> */}
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon key={index} width={20} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MultipleItems;