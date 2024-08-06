"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import img1 from "../../../../../public/NewsLetter_img/News-img.jpg";
import News_thumb from "../../../../../public/NewsLetter_img/News_thumb.jpg";
import pr_thumb from "../../../../../public/NewsLetter_img/pr_thumb.jpg";
import pr_Video2_thumb from "../../../../../public/NewsThumnails/valorEstate-news.png";
import arrow from "../../../../../public/NewsLetter_img/arrow.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../../../globals.css";
// import "../premium-collection/premiumSection_module.css";
import "./newsletter.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Tab, Tabs } from "react-bootstrap";
// import SwTabOne from "../premium-collection/SwTabOne";

export default function NewsLetter() {
  return (
    <div className="newsletter-section cstm-cont-wdt">
      <div className="Newshd">
        <h2 className="section_hd">Media</h2>
      </div>

      <div className="newsletter-slider">
        <div className="tab-section">
          <div className="row">
            <div className="col-md-12">
              <div className="pipeline_section ">
                <Tabs defaultActiveKey="tab1" id="pipeline_tabs">
                  <Tab className="tab-ttl hd-mob" eventKey="tab1" title="News">
                    <Swiper
                      spaceBetween={30}
                      navigation={true}
                      breakpoints={{
                        320: {
                          slidesPerView: 1, // For mobile devices
                        },
                        768: {
                          slidesPerView: 2, // For larger screens
                        },
                        1024: {
                          slidesPerView: 3, // For larger screens
                        },
                        1279: {
                          slidesPerView: 4, // For larger screens
                        },
                      }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      <SwiperSlide>
                        <div className="news-container">
                          <div className="news-img">
                            <Image src={News_thumb} />
                          </div>
                          <div className="section-contain font-museo">
                            <p className="date-cstm">05 MAR, 2024</p>
                            <h3 className="para-sld">
                              Rahul Pandit Takes the Helm of DB Realty’s
                              Hospitality Division
                            </h3>
                            <div className="new-btn flex new-btn">
                              <a
                                href="https://www.foodandhospitality.org/appointment/rahul-pandit-takes-the-helm-of-db-realtys-hospitality-division/"
                                target="_blank"
                                className="font-museo rd-mr-a news-ltr-a"
                              >
                                Read More{" "}
                              </a>
                              <Image src={arrow} />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="news-container">
                          <div className="news-img">
                            <img src="https://wordpress-1034502-4717804.cloudwaysapps.com/wp-content/uploads/2024/07/thumb3-scaled.jpg" />
                          </div>
                          <div className="section-contain font-museo">
                            <p className="date-cstm">04 MAR, 2024</p>
                            <h3 className="para-sld">
                              Rahul Pandit to head DB Realty’s hospitality
                              division
                            </h3>
                            <div className="new-btn flex new-btn ">
                              <a
                                href="https://hospitality.economictimes.indiatimes.com/news/hotels/rahul-pandit-to-head-db-realtys-hospitality-division/108203465"
                                target="_blank"
                                className="font-museo rd-mr-a news-ltr-a"
                              >
                                Read More{" "}
                              </a>
                              <Image src={arrow} />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="news-container">
                          <div className="news-img">
                            <img src="https://wordpress-1034502-4717804.cloudwaysapps.com/wp-content/uploads/2024/07/thumb2-scaled.jpg" />
                          </div>
                          <div className="section-contain font-museo">
                            <p className="date-cstm">04 MAR, 2024</p>
                            <h3 className="para-sld">
                              Rahul Pandit Takes the Helm at D B Realty’s
                              Hospitality Division
                            </h3>
                            <div className="new-btn flex new-btn">
                              <a
                                href="https://hospitalitybizindia.com/news-track/rahul-pandit-takes-the-helm-at-d-b-realtys-hospitality-division/"
                                target="_blank"
                                className="font-museo rd-mr-a news-ltr-a"
                              >
                                Read More{" "}
                              </a>
                              <Image src={arrow} />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </Tab>



                  <Tab
                    className="tab-ttl"
                    eventKey="tab2"
                    title="Press Release"
                  >
                    <Swiper
                      spaceBetween={30}
                      navigation={true}
                      breakpoints={{
                        320: {
                          slidesPerView: 1, // For mobile devices
                        },
                        768: {
                          slidesPerView: 2, // For larger screens
                        },
                        1024: {
                          slidesPerView: 3, // For larger screens
                        },
                        1279: {
                          slidesPerView: 4, // For larger screens
                        },
                      }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      <SwiperSlide>
                          <div className="news-container">
                            <div className="news-img">
                              <Image src={pr_thumb} />
                            </div>
                            <div className="section-contain font-museo">
                              <p className="date-cstm">13 JUN, 2024</p>
                              <h3 className="para-sld">
                                Valor Estate to demerge hospitality business
                              </h3>
                              <div className="new-btn flex new-btn">
                                <a
                                  href="valor-estate-to-demerge-hospitality-business"
                                  className="font-museo rd-mr-a news-ltr-a"
                                >
                                  Read More{" "}
                                </a>
                                <Image src={arrow} />
                              </div>
                            </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="news-container">
                            <div className="news-img">
                              <Image src={pr_Video2_thumb} />
                            </div>
                            <div className="section-contain font-museo">
                              <p className="date-cstm">10 JUN, 2024</p>
                              <h3 className="para-sld">
                                Valor Estate News: New Deals, Launches & FY25 Outlook
                              </h3>
                              <div className="new-btn flex new-btn">
                                <a
                                  href="/valor-estate-news"
                                  className="font-museo rd-mr-a news-ltr-a"
                                >
                                  Read More{" "}
                                </a>
                                <Image src={arrow} />
                              </div>
                            </div>
                          </div>
                      </SwiperSlide>
                    </Swiper>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
