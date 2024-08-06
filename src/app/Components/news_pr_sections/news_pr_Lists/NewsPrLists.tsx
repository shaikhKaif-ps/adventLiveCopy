'use client'
import React from 'react'

import '../../../../app/globals.css'
import { Tab, Tabs } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import '../../Home-page-section/premium-collection/PremiumSection_module.css';
import './newsPrLists.css'
import News_content from './news_content';
import Press_release_content from './press_release_content';
import Image from 'next/image'


const NewsPrLists = () => {
  return (
    <>
       <div className='news_pr_sec tab_padding'>
            <div className='cstm-cont-wdt'>
                <div className='row no_margin '>
                    <div className='col-12 no_padding'>
                    <Tabs defaultActiveKey="tab1" id="pipeline_tabs">
                        <Tab className='tab-ttl hd-mob' eventKey="tab1" title="News">
                            <News_content/>
                        </Tab>
                        <Tab className='tab-ttl' eventKey="tab2" title="Press Release">
                            <Press_release_content/>
                        </Tab>
                    </Tabs>
                    </div>
                </div>
            </div>
        </div>


        {/* <div className="tab_padding">
            <div className="singleNewsList cstm-cont-wdt">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="imgCon">
                            <img src="https://apollosupplychain.com/cms/wp-content/uploads/2022/12/automotive_blog.jpg" alt="" />
                        </div>
                        <div className="DespCon">
                            <div className="tag">
                                <p>News</p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae quidem soluta pariatur delectus autem modi aliquam aspernatur, inventore, voluptatem quam exercitationem eos error velit officia sapiente porro ipsa expedita.
                            </p>
                            <p>12 DEC, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

      
        
        {/* <div className="Parent cstm-cont-wdt">
            <div className="imgCon">
                <img src="https://apollosupplychain.com/cms/wp-content/uploads/2022/12/automotive_blog.jpg" alt="" />
            </div>
            <div className="DespCon">
                <div className="tag">
                    <p>News</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae quidem soluta pariatur delectus autem modi aliquam aspernatur, inventore, voluptatem quam exercitationem eos error velit officia sapiente porro ipsa expedita.
                </p>
                <p>12 DEC, 2024</p>
            </div>
        </div> */}



        

    </>
  )
}

export default NewsPrLists