"use client";
import React from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// CAROUSEL DATA
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
    return (
      <div className="pt-40 pb-32 lg:py-32" id="testimonial-section">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
          <h3 className="text-center text-4xl sm:text-20xl text-treetop">Comentários</h3>
  
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            // centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              1200: {
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 2,
              },
              650: {
                slidesPerView: 1,
              }
            }}
            className="mySwiper"
          >
            {postData.map((items, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col bg-white shadow-lg m-3 p-10 my-20 rounded-3xl">
                  <Image
                    src={items.imgSrc}
                    alt={items.name}
                    width={71}
                    height={71}
                    className="rounded-full inline-block m-auto"
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  };
  

export default MultipleItems;