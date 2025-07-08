import React from 'react';
import Owldemo1 from './OwlDemo/Owldemo1'
import Loading from './Loading'

const Portfolio = (props) => {
    const {isLoading, setisLoading, user:{ profileData: { works } }} = props;
    return isLoading?<Loading setisLoading={setisLoading} />:(
        <div className="col-lg-12 p-0 d-flex flex-row flex-wrap align-items-start justify-content-start h-100 to-top">
            <div className="col-lg-12 p-0 d-flex flex-row flex-wrap align-items-start justify-content-start">
                <div className="col-lg-12 p-0 in-row bb-1 mb-2">
                    <h1 className="text-white m-0">Works</h1>
                </div>
                <div className="col-lg-12 p-0">
                    <Owldemo1 works={works}></Owldemo1>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
