import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owlstyles.css'
function Owldemo1(props) {
    const {works} = props;
    return (
        <div>
            <div className='container-fluid p-0'>
                <OwlCarousel items={1}
                    className="owl-theme"
                    loop={false}
                    nav={false}
                    dots={false}
                    margin={0} autoplay={false}>
                    <div className="col-lg-12 p-0 m-0 d-flex flex-row flex-wrap align-items-start justify-content-between">
                        {
                            works.length>0?works.map((item, index) => {
                                const {imageSrcUrl, hrefLink} = item;
                                return (
                                    <div key={index} className="col-lg-3 p-2">
                                        <div className="col-lg-12 p-0 item-img-block">
                                            <img alt="sampeimage" className="img" src={`${process.env.PUBLIC_URL}${imageSrcUrl}`} />
                                            <div className="p-0 on-over-work-item">
                                                <Link className="d-flex flex-row flex-wrap align-items-center justify-content-center h-100" to={{pathname: hrefLink}} target="_blank" rel="noopener noreferrer">
                                                    <i className="fa fa-external-link-square font-30"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }):"No data found"
                        }
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}
export default Owldemo1  