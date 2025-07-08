import React from 'react';
import Loading from './Loading'

const Resume = (props) => {
    const { isLoading, setisLoading, user: { profileData: { experience, skillSet } } } = props;
    return isLoading ? <Loading setisLoading={setisLoading} /> : (
        <div className="col-lg-12 p-0 d-flex flex-row flex-wrap align-items-start justify-content-start h-100 to-top">
            <div className="col-lg-12 p-0 d-flex flex-row flex-wrap align-items-start justify-content-start">
                <div className="col-lg-12 p-0 in-row bb-1 mb-4">
                    <h1 className="text-white">Resume</h1>
                </div>
                <div className="col-lg-12 p-0 in-row">
                    <div className="col-lg-12 p-0 d-flex flex-row flex-wrap align-items-start justify-content-between">
                        <div className="col-lg-7 timeline-second-style p-0">
                            <div className="col-lg-12 p-0 mb-4">
                                <h3>Experience</h3>
                            </div>
                            <div className="col-lg-12 p-0 mb-4">
                                {
                                    experience.length > 0 ? experience.map((item, index) => {
                                        const { dateFrom, dateTo, company, role, responsibility } = item;
                                        return (
                                            <div key={index} className="timeline-item clearfix">
                                                <div className="left-part">
                                                    <h5 className="item-period font-16">{dateFrom} - {dateTo ? dateTo : '*'}</h5>
                                                    <span className="item-company font-14">{company}</span>
                                                </div>
                                                <div className="divider"></div>
                                                <div className="right-part">
                                                    <h4 className="item-title font-18 font-lg-22">{role}</h4>
                                                    <p>{responsibility}</p>
                                                </div>
                                            </div>
                                        )
                                    }) : "No data found"
                                }
                            </div>
                        </div>
                        <div className="col-lg-5">
                            {
                                skillSet.length > 0 ? skillSet.map((item, index) => {
                                    const { groupTitle, skills } = item;
                                    return (
                                        <div key={index} className="col-lg-12 p-0 skill-set">
                                            <div className="col-lg-12 p-0 mb-4">
                                                <h3>{groupTitle}</h3>
                                            </div>
                                            <div className="skills-info skills-second-style">
                                                {
                                                    skills.length > 0 ? skills.map((skillitem, index) => {
                                                        const { name, percentage } = skillitem;
                                                        return (
                                                            <>
                                                                <div key={index} className="skill clearfix">
                                                                    <h4>{name}</h4>
                                                                    <div className="skill-value">{percentage}%</div>
                                                                </div>
                                                                <div className="skill-container skill-1">
                                                                    <div className="skill-percentage" style={{'width': `${percentage}%`}}></div>
                                                                </div>
                                                            </>
                                                        )
                                                    }) : "No data found"
                                                }
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

export default Resume;
