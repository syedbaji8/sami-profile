import React from 'react';
import Loading from './Loading'
import {Link} from 'react-router-dom'

const Navigation = (props) => {
    const {active, isLoading, setisLoading, isAdmin} = props;
    return isLoading?<Loading setisLoading={setisLoading} />:(
        <div className="col-lg-12 p-0 d-flex flex-row flex-lg-column flex-wrap justify-content-around align-items-center align-content-center py-0 py-lg-5 font-20 font-lg-24 h-100 nav-container">
            <button className={`nav-iconn p-0 px-3 mb-3 mb-lg-0 bs-1 ${active === 'Home'?'active':''}`} title="Home" onClick={() => { props.onClickGotoComponentFn('Home') }}>
                <span className="font-14 mr-2">Home</span>
                <i className="font-20 fa fa-home"></i>
            </button>
            <button className={`nav-iconn p-0 px-3 mb-3 mb-lg-0 bs-1 ${active === 'About'?'active':''}`} title="About" onClick={() => { props.onClickGotoComponentFn('About') }}>
                <span className="font-14 mr-2">About </span>
                <i className="font-20 fa fa-user"></i>
            </button>
            <button className={`nav-iconn p-0 px-3 mb-3 mb-lg-0 bs-1 ${active === 'Resume'?'active':''}`} title="Resume" onClick={() => { props.onClickGotoComponentFn('Resume') }}>
                <span className="font-14 mr-2">Resume </span>
                <i className="font-20 fa fa-graduation-cap"></i>
            </button>
            <button className={`nav-iconn p-0 px-3 mb-3 mb-lg-0 bs-1 ${active === 'Portfolio'?'active':''}`} title="Portfolio" onClick={() => { props.onClickGotoComponentFn('Portfolio') }}>
                <span className="font-14 mr-2">Portfolio </span>
                <i className="font-20 fa fa-suitcase"></i>
            </button>
            <button className={`nav-iconn p-0 px-3 bs-1 ${active === 'Contact'?'active':''}`} title="Contact" onClick={() => { props.onClickGotoComponentFn('Contact') }}>
                <span className="font-14 mr-2">Contact </span>
                <i className="font-20 fa fa-envelope"></i>
            </button>
            {isAdmin && (<button className={`nav-iconn p-0 px-3 bs-1 admin-button`}>
                <Link to="/about">
                    <span className="font-14 mr-2">Admin </span>
                    <i className="font-20 fa fa-envelope"></i>
                </Link>
            </button>)}
        </div>
    );
}

export default Navigation;
