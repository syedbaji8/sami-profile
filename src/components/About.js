import React from 'react';
import Loading from './Loading'

const About = (props) => {
    const { isLoading, setisLoading, user: { profileData: { aboutDescription, mobile, email, address, education } } } = props;
    return isLoading ? <Loading setisLoading={setisLoading} /> : (
        <div className="col-lg-12 p-0 d-flex flex-row flex-wrap align-items-start justify-content-start h-100 to-top">
            <div className="col-lg-12 p-0 d-flex flex-row flex-wrap align-items-start justify-content-start">
                <div className="col-lg-12 p-0 in-row bb-1 mb-4">
                    <h1 className="text-white m-0">About me</h1>
                </div>
                <div className="col-lg-12 p-0 in-row">
                    <p className="text-white">{aboutDescription}</p>
                </div>
                <div className="col-lg-12 p-0 in-row mb-5">
                    <div className="col-lg-4 pl-lg-0">
                        <div className="col-lg-12 p-0">
                            <div className="col-lg-12 p-0">
                                <a href="tel:7338324752">
                                    <p className="mb-3">
                                        <label className="text-bold">Phone:</label>
                                        <br />
                                        +91 - {mobile}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pl-lg-0">
                        <div className="col-lg-12 p-0">
                            <div className="col-lg-12 p-0">
                                <a href="mailto:syedbaji8@gmail.com">
                                    <p className="mb-3">
                                        <label className="text-bold">Email:</label>
                                        <br />
                                        {email}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pl-lg-0">
                        <div className="col-lg-12 p-0">
                            <div className="col-lg-12 p-0">
                                <p className="mb-3">
                                    <label className="text-bold">Address:</label>
                                    <br />
                                    {address}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 p-0 in-row">
                    <div className="col-lg-12 p-0 mb-4">
                        <h3>Education</h3>
                    </div>
                    <div className="col-lg-12 p-0 d-flex flex-row flex-wrap align-items-start justify-content-between timeline-second-style">
                        <div className="col-lg-12 p-0">
                            {
                                education.length > 0 ? education.map((item, index) => {
                                    const { dateTo, college, course, where } = item;
                                    return (
                                        <div key={index} className="timeline-item clearfix">
                                            <div className="left-part">
                                                <h5 className="item-period">{dateTo}</h5>
                                                <span className="item-company">{college}</span>
                                            </div>
                                            <div className="divider"></div>
                                            <div className="right-part">
                                                <h4 className="item-title">{course}</h4>
                                                <p>{college}, {where}</p>
                                            </div>
                                        </div>
                                    )
                                }) : "No data found"
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
