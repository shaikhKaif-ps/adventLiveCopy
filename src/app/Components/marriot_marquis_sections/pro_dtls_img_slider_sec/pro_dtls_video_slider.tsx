

"use client"

import React, { useRef, useState } from 'react';
import Image from 'next/image';

// PopUP
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Link from 'next/link';
import '../../about_sections/about_team_sec/popup_team.css'




// Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../../../globals.css';
import './pro_dtls_img_slider.css'
import { FreeMode, Navigation } from 'swiper/modules';


export default function Pro_dtls_video_slider() {
    const [modalOpen1, setModalOpen1] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalOpen3, setModalOpen3] = useState(false);

    const openModal1 = () => setModalOpen1(true);
    const closeModal1 = () => setModalOpen1(false);

    const openModal2 = () => setModalOpen2(true);
    const closeModal2 = () => setModalOpen2(false);

    const openModal3 = () => setModalOpen3(true);
    const closeModal3 = () => setModalOpen3(false);
  return (
    
    <div className='pro_media_main_slider_dv'>
        <Swiper
            spaceBetween={0}
            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
            slidesPerView={2.8}
            // centeredSlides={true}
            loop={true}
            modules={[FreeMode, Navigation]}
            breakpoints={{
            320: {
                slidesPerView: 1, // For mobile devices
            },
            480: {
                slidesPerView: 1.2, // For mobile devices
            },
            767: {
                slidesPerView: 2.3, // For larger screens
            },
            1270: {
                slidesPerView: 2.8 // For larger screens
            }
            }}
            className="mySwiper2"
        >
            <SwiperSlide>
                <div className='pro_dtl_medi_sld'>
                    <iframe
                    id='property_video_id'
                    className="property_video"
                    src='./Hotel_Video.mp4'
                    ></iframe>
                </div>
            </SwiperSlide>
           
        
        </Swiper>

        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
        <button className="swiper-pop-button " onClick={openModal1}></button>

        <Modal open={modalOpen1} onClose={closeModal1} center>
            <Swiper
            spaceBetween={0}
            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
            slidesPerView={1}
            // centeredSlides={true}
            loop={true}
            modules={[FreeMode, Navigation]}
            breakpoints={{
            320: {
                slidesPerView: 1, 
            },
            480: {
                slidesPerView: 1, 
            },
            767: {
                slidesPerView: 1, 
            },
            
            }}
            className="mySwiper2 popup_slider"
        >
            <SwiperSlide>
                <div className='pro_dtl_medi_sld'>
                    <iframe
                    id='property_video_id'
                    className="property_video"
                    src='./Hotel_Video.mp4'
                    ></iframe>
                </div>
            </SwiperSlide>
           
        
        </Swiper>
        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
        </Modal>

    </div>


  
  )
}
