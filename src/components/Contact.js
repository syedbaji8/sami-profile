import React from 'react';
import Loading from './Loading'

const Contact = (props) => {
    const {isLoading, setisLoading, user:{ profileData: {mobile, email, address, socialLinks: {facebook, twitter, linkedin, youtube} } }} = props;
    return isLoading?<Loading setisLoading={setisLoading} />:(
        <div className="contact-page col-lg-12 p-0 d-flex flex-row flex-wrap align-items-start justify-content-start h-100 to-top">
            <div className="col-lg-12 p-0 d-flex flex-row flex-wrap align-items-start justify-content-start">
                <div className="col-lg-12 p-0 in-row bb-1 mb-4">
                    <h1 className="text-white m-0">Contact</h1>
                </div>
                <div className="col-lg-12 p-0 in-row d-flex flex-row flex-wrap align-items-start justify-content-center">
                    <div className="col-lg-4 pl-lg-0">
                        <div className="col-lg-12 box py-4 px-2 d-flex justify-content-center mb-4">
                            <div className="col-lg-12 p-0">
                                <a href="tel:7338324752">
                                    <p className="m-0 text-center">
                                        <label className="text-bold"><i className="fa fa-mobile font-30"></i></label>
                                        <br />
                                        +91 - {mobile}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pl-lg-0">
                        <div className="col-lg-12 box py-4 px-2 d-flex justify-content-center mb-4">
                            <div className="col-lg-12 p-0">
                                <a href="mailto:syedbaji8@gmail.com">
                                    <p className="m-0 text-center">
                                        <label className="text-bold"><i className="fa fa-envelope font-30"></i></label>
                                        <br />
                                        {email}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pl-lg-0">
                        <div className="col-lg-12 box py-4 px-2 d-flex justify-content-center mb-4">
                            <div className="col-lg-12 p-0">
                                <p className="m-0 text-center">
                                    <label className="text-bold"><i className="fa fa-map-marker font-30"></i></label>
                                    <br />
                                    {address}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 pl-lg-0">
                        <div className="col-lg-12 box py-4 px-2 d-flex align-items-center justify-content-center">
                            <div className="col-lg-12 p-0">
                                <p className="m-0 text-center">
                                    <label className="text-bold"><i className="fa fa-check-circle font-30"></i></label>
                                    <br />
                                    Available for Freelance
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
