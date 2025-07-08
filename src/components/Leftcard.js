import React from 'react';
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import Loading from './Loading'

const Leftcard = (props) => {
    const {isLoading, setisLoading, rendercomponent, onClickGotoComponentFn, user:{profileData:{name, position, resumeDownLink, socialLinks:{facebook, twitter, linkedin}}}} = props;
    return isLoading?<Loading setisLoading={setisLoading} />:(
        <>
            <div className="col-lg-12 p-0 to-top">
                <div className="col-lg-12 p-0 mx-auto profile-pic-block mb-3 bs-1">
                    <img className="img-fluid w-100" src={process.env.PUBLIC_URL + '/images/pro-1.JPG'} alt="logo" />
                </div>
                <div className="col-lg-12 p-0 pb-4 profile-details-block text-center">
                    <h2 className="name text-bold m-0 mb-2 font-20 font-lg-20">{name}</h2>
                    <h4 className="designation font-14 font-lg-16 m-0">{position}</h4>
                </div>
                <div className="col-lg-12 p-0 pb-4 mobile-navigation-block d-block d-lg-none">
                    <Navigation active={rendercomponent} onClickGotoComponentFn={onClickGotoComponentFn} />
                </div>
                <div className="col-lg-12 p-0 pb-4 profile-social-block d-flex justify-content-center flex-row flex-wrap font-16 font-lg-24">
                    <Link className="social-icon mx-2" to={{pathname: facebook}} target="_blank">
                        <i className="fa fa-linkedin"></i>
                    </Link>
                    <Link className="social-icon mx-2" to={{pathname: twitter}} target="_blank">
                        <i className="fa fa-twitter"></i>
                    </Link>
                    <Link className="social-icon mx-2" to={{pathname: linkedin}} target="_blank">
                        <i className="fa fa-facebook"></i>
                    </Link>
                </div>
                <div className="col-lg-12 p-0 pb-3 profile-details-block text-center">
                    <Link to={{pathname: resumeDownLink}} className="btn border text-white" target="_blank">Download CV</Link>
                </div>
            </div>
        </>
    );
}

export default Leftcard;
