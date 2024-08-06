import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import MumImage from '../../../../../public/Premium-Slider/Hilton-Mumbai-International-Airport-Exterior 1.jpg'
import GrandHyyat from '../../../../../public/Premium-Slider/GrandHyyat.jpg'
import NewDelhi from '../../../../../public/Premium-Slider/NewDelhi.jpg'
import Marriott from '../../../../../public/Premium-Slider/marriottNewDelhi.jpg'
import Stregis from '../../../../../public/Premium-Slider/stregis.jpg'
import riverwalk from '../../../../../public/riverWalkHotel/riverWalkTab.png'
import rightic from '../../../../../public/ESG-images/right-icon.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import './SwiperTabs.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Link from 'next/link';

export default function SwTabLandingClear() {

  return (
    <div className='tab-swiper-slider'>
      <div className='tabs-inside-slider'>

      <button className="arrow-left arrow"></button>
      <button className="arrow-right arrow"></button>

      <Swiper
          spaceBetween={20}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          breakpoints={{
            320: {
              slidesPerView: 1.2, // For mobile devices
            },
            1024: {
              slidesPerView: 3.2, // For larger screens
            },
            768: {
              slidesPerView: 2.2, // For larger screens
            },
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper2"
        >
          {/* <SwiperSlide>
            <div>

                <div className='insd_tab'> 
                  <div className='img_tab'>
                    <Image src={MumImage}  alt=''/>
                  </div>
                  <div className='content_tab'>
                    <h3 className='hd-tb-tp'>Hilton Mumbai</h3>
                    <p className='para-tb-md'>Mumbai, India</p>
                    <div className='rdm-btn flex'>
                      <a href='/hilton-international' className='font-museo rd-mr-a rd-mr-tbtn mob-read-btn'>Read More </a>
                      <Image className='slider-img-prem' src={rightic}  alt=''/>
                    </div>
                  </div>
                </div>
  
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div>
              <div className='insd_tab'>
                <div className='img_tab'>
                  <Image src={GrandHyyat}  alt=''/>
                </div>
                <div className='content_tab'>
                  <h3 className='hd-tb-tp'>Grand Hyaat</h3>
                  <p className='para-tb-md'>Goa, India</p>
                  <div className='rdm-btn flex'>
                    <a href='/grand-hayat' className='font-museo rd-mr-a rd-mr-tbtn mob-read-btn'>Read More </a>
                    <Image className='slider-img-prem' src={rightic}  alt=''/>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
    
              <div className='insd_tab'>
                <div className='img_tab'>
                  <Image src={NewDelhi} />
                </div>
                <div className='content_tab'>
                  <h3 className='hd-tb-tp'>Delhi aerocity</h3>
                  <p className='para-tb-md'>Delhi, India</p>
                  <div className='rdm-btn flex'>
                    <a href='/delhi-aerocity-hotel' className='font-museo rd-mr-a rd-mr-tbtn mob-read-btn'>Read More </a>
                    <Image src={rightic} />
                  </div>
                </div>
              </div>
      
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
       
              <div className='insd_tab'>
                <div className='img_tab'>
                  <Image className='slider-img-prem' src={Marriott} />
                </div>
                <div className='content_tab'>
                  <h3 className='hd-tb-tp'>Marriott Marquis</h3>
                  <p className='para-tb-md'>delhi, India</p>
                  <div className='rdm-btn flex'>
                    <a  href='/marriot-marquis' className='font-museo rd-mr-a rd-mr-tbtn mob-read-btn'>Read More </a>
                    <Image src={rightic} />
                  </div>
                </div>
              </div>
       
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
 
              <div className='insd_tab'>
                <div className='img_tab'>
                  <Image className='slider-img-prem' src={Stregis} />
                </div>
                <div className='content_tab'>
                  <h3 className='hd-tb-tp'>Stregis</h3>
                  <p className='para-tb-md'>location</p>
                  <div className='rdm-btn flex'>
                    <a href='/st-regis' className='font-museo rd-mr-a rd-mr-tbtn mob-read-btn'>Read More </a>
                    <Image src={rightic} />
                  </div>
                </div>
              </div>
        
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
     
              <div className='insd_tab'>
                <div className='img_tab'>
                  <Image className='slider-img-prem' src={GrandHyyat} />
                </div>
                <div className='content_tab'>
                  <h3 className='hd-tb-tp'>esteem - sahar hotel</h3>
                  <p className='para-tb-md'>Mumbai International Airport, India</p>
                  <div className='rdm-btn flex'>
                    <a  href='/esteem-shara-hotel' className='font-museo rd-mr-a rd-mr-tbtn mob-read-btn'>Read More </a>
                    <Image src={rightic} />
                  </div>
                </div>
              </div>
          
            </div>
          </SwiperSlide> */}

          <SwiperSlide>
            <div>
      
              <div className='insd_tab'>
                <div className='img_tab'>
                  <Image className='slider-img-prem' src={GrandHyyat} />
                </div>
                <div className='content_tab'>
                  <h3 className='hd-tb-tp'>worli hotel</h3>
                  <p className='para-tb-md'>Mumbai, India</p>
                  <div className='rdm-btn flex'>
                    <a href='/worli-hotel' className='font-museo rd-mr-a rd-mr-tbtn '>Read More </a>
                    <Image src={rightic} />
                  </div>
                </div>
              </div>
          
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
           
              <div className='insd_tab'>
                <div className='img_tab'>
                  <Image className='slider-img-prem' src={riverwalk} />
                </div>
                <div className='content_tab'>
                  <h3 className='hd-tb-tp'>riverwalk hotel</h3>
                  <p className='para-tb-md'>bkc Mumbai, India</p>
                  <div className='rdm-btn flex'>
                    <a href='/riverwalk-hotel' className='font-museo rd-mr-a rd-mr-tbtn '>Read More </a>
                    <Image src={rightic} />
                  </div>
                </div>
              </div>
          
            </div>
          </SwiperSlide>

        </Swiper>


    </div>
    </div>
  );
}
