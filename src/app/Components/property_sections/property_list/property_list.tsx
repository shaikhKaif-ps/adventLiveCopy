"use client";
import React from "react";
import "../../../globals.css";
import "./property_list.css";
import "../../Home-page-section/premium-collection/PremiumSection_module.css";
import "../../Home-page-section/premium-collection/SwiperTabs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs } from "react-bootstrap";

import Image from "next/image";
import MumImage from "../../../../../public/Premium-Slider/Hilton-Mumbai-International-Airport-Exterior 1.jpg";
import GrandHyyat from "../../../../../public/Premium-Slider/GrandHyyat.jpg";
import NewDelhi from "../../../../../public/Premium-Slider/NewDelhi.jpg";
import Marriott from "../../../../../public/Premium-Slider/marriottNewDelhi.jpg";
import Stregis from "../../../../../public/Premium-Slider/stregis.jpg";
import riverWalik from "../../../../../public/riverWalkHotel/riverWalkTab.png";
import rightic from "../../../../../public/ESG-images/right-icon.svg";

export default function Property_list() {
  return (
    <div className="property_list_sec tab_padding">
      <div className="cstm-cont-wdt">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 pro_list_grid_parent ">

            <Tabs defaultActiveKey="tab1" id="pipeline_tabs" className="">

              {/* All */}
              <Tab className="tab-ttl hd-mob" eventKey="tab1" title="All">
                <div className="row tabsRow">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image src={MumImage} alt="" />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Hilton Mumbai</h3>
                        <p className="para-tb-md">Mumbai, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/hilton-international"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image
                            className="slider-img-prem"
                            src={rightic}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image src={GrandHyyat} alt="" />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Grand Hyaat</h3>
                        <p className="para-tb-md">Goa, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/grand-hayat"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image
                            className="slider-img-prem"
                            src={rightic}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image src={NewDelhi} alt="" />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Delhi aerocity</h3>
                        <p className="para-tb-md">Delhi, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/delhi-aerocity-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={Marriott}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Marriott Marquis</h3>
                        <p className="para-tb-md">delhi, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/marriot-marquis"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={Stregis}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Stregis</h3>
                        <p className="para-tb-md">location</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/st-regis"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={GrandHyyat}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">esteem - sahar hotel</h3>
                        <p className="para-tb-md">
                          Mumbai International Airport, India
                        </p>
                        <div className="rdm-btn flex">
                          <a
                            href="/esteem-shara-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={GrandHyyat}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">worli hotel</h3>
                        <p className="para-tb-md">Mumbai, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/worli-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn "
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={riverWalik}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">riverwalk hotel</h3>
                        <p className="para-tb-md">BKC Mumbai, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/riverwalk-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn "
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>


              {/* Operational */}
              <Tab className="tab-ttl" eventKey="tab2" title="Operational">
                <div className="row tabsRow">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image src={MumImage} alt="" />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Hilton Mumbai</h3>
                        <p className="para-tb-md">Mumbai, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/hilton-international"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image
                            className="slider-img-prem"
                            src={rightic}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image src={GrandHyyat} alt="" />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Grand Hyaat</h3>
                        <p className="para-tb-md">Goa, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/grand-hayat"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image
                            className="slider-img-prem"
                            src={rightic}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image src={NewDelhi} alt="" />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Delhi aerocity</h3>
                        <p className="para-tb-md">Delhi, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/delhi-aerocity-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={Marriott}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Marriott Marquis</h3>
                        <p className="para-tb-md">delhi, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/marriot-marquis"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={Stregis}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Stregis</h3>
                        <p className="para-tb-md">location</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/st-regis"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={GrandHyyat}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">esteem - sahar hotel</h3>
                        <p className="para-tb-md">
                          Mumbai International Airport, India
                        </p>
                        <div className="rdm-btn flex">
                          <a
                            href="/esteem-shara-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={GrandHyyat}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">worli hotel</h3>
                        <p className="para-tb-md">Mumbai, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/worli-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn "
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={riverWalik}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">riverwalk hotel</h3>
                        <p className="para-tb-md">bkc Mumbai, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/riverwalk-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn "
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </Tab>


              {/*Under construction */}
              <Tab className="tab-ttl" eventKey="tab3" title="Under construction">
                <div className="row tabsRow">
                  {/* <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image src={MumImage} alt="" />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Hilton Mumbai</h3>
                        <p className="para-tb-md">Mumbai, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/hilton-international"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image
                            className="slider-img-prem"
                            src={rightic}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image src={GrandHyyat} alt="" />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Grand Hyaat</h3>
                        <p className="para-tb-md">Goa, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/grand-hayat"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image
                            className="slider-img-prem"
                            src={rightic}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image src={NewDelhi} alt="" />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Delhi aerocity</h3>
                        <p className="para-tb-md">Delhi, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/delhi-aerocity-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={Marriott}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Marriott Marquis</h3>
                        <p className="para-tb-md">delhi, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/marriot-marquis"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={Stregis}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Stregis</h3>
                        <p className="para-tb-md">location</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/st-regis"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={GrandHyyat}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">esteem - sahar hotel</h3>
                        <p className="para-tb-md">
                          Mumbai International Airport, India
                        </p>
                        <div className="rdm-btn flex">
                          <a
                            href="/esteem-shara-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={GrandHyyat}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">worli hotel</h3>
                        <p className="para-tb-md">Mumbai, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/worli-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn "
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={riverWalik}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">riverwalk hotel</h3>
                        <p className="para-tb-md">bkc Mumbai, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/riverwalk-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn "
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div> */}


                </div>
              </Tab>


              {/*Planning*/}
              <Tab className="tab-ttl" eventKey="tab4" title="Planning">
                <div className="row tabsRow">
                  {/* <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image src={MumImage} alt="" />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Hilton Mumbai</h3>
                        <p className="para-tb-md">Mumbai, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/hilton-international"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image
                            className="slider-img-prem"
                            src={rightic}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image src={GrandHyyat} alt="" />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Grand Hyaat</h3>
                        <p className="para-tb-md">Goa, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/grand-hayat"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image
                            className="slider-img-prem"
                            src={rightic}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image src={NewDelhi} alt="" />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Delhi aerocity</h3>
                        <p className="para-tb-md">Delhi, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/delhi-aerocity-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={Marriott}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Marriott Marquis</h3>
                        <p className="para-tb-md">delhi, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/marriot-marquis"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={Stregis}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Stregis</h3>
                        <p className="para-tb-md">location</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/st-regis"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={GrandHyyat}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">esteem - sahar hotel</h3>
                        <p className="para-tb-md">
                          Mumbai International Airport, India
                        </p>
                        <div className="rdm-btn flex">
                          <a
                            href="/esteem-shara-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={GrandHyyat}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">worli hotel</h3>
                        <p className="para-tb-md">Mumbai, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/worli-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn "
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={riverWalik}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">riverwalk hotel</h3>
                        <p className="para-tb-md">bkc Mumbai, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/riverwalk-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn "
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </Tab>

              {/*land Clearing*/}
              <Tab className="tab-ttl" eventKey="tab5" title="Land Clearing">
                <div className="row tabsRow">
                  {/* <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image src={MumImage} alt="" />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Hilton Mumbai</h3>
                        <p className="para-tb-md">Mumbai, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/hilton-international"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image
                            className="slider-img-prem"
                            src={rightic}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image src={GrandHyyat} alt="" />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Grand Hyaat</h3>
                        <p className="para-tb-md">Goa, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/grand-hayat"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image
                            className="slider-img-prem"
                            src={rightic}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image src={NewDelhi} alt="" />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Delhi aerocity</h3>
                        <p className="para-tb-md">Delhi, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/delhi-aerocity-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={Marriott}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Marriott Marquis</h3>
                        <p className="para-tb-md">delhi, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/marriot-marquis"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={Stregis}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">Stregis</h3>
                        <p className="para-tb-md">location</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/st-regis"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={GrandHyyat}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">esteem - sahar hotel</h3>
                        <p className="para-tb-md">
                          Mumbai International Airport, India
                        </p>
                        <div className="rdm-btn flex">
                          <a
                            href="/esteem-shara-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn mob-read-btn"
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={GrandHyyat}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">worli hotel</h3>
                        <p className="para-tb-md">Mumbai, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/worli-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn "
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="insd_tab">
                      <div className="img_tab">
                        <Image
                          className="slider-img-prem"
                          src={riverWalik}
                          alt=""
                        />
                      </div>
                      <div className="content_tab">
                        <h3 className="hd-tb-tp">riverwalk hotel</h3>
                        <p className="para-tb-md">bkc Mumbai, India</p>
                        <div className="rdm-btn flex">
                          <a
                            href="/riverwalk-hotel"
                            className="font-museo rd-mr-a rd-mr-tbtn "
                          >
                            Read More{" "}
                          </a>
                          <Image src={rightic} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>

              
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
