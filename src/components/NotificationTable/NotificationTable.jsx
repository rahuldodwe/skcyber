import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
const NotificationTable = ({ table1, table2, table3, pageUrl, column1Title = "Result", column2Title = "Admit Card", column3Title = "Latest Jobs" }) => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-4">
                    <h4 className="tbl-h">{column1Title}</h4>
                    <div className="b">
                        {table1 && table1.length > 0 ? (
                            table1.map((singleResult, index) => (
                                <div key={index} className="jobs">
                                    <FaArrowRightLong className="arrow" />
                                    <button
                                        onClick={() => navigate("/job", { state: { jobData: singleResult } })}
                                        className="job-text"
                                        style={{ 
                                            background: 'none', 
                                            border: 'none', 
                                            color: 'inherit', 
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            width: '100%',
                                            padding: 0
                                        }}
                                    >
                                        {singleResult?.title}
                                    </button>
                                </div>
                            ))
                        ) : (
                            <h1 className="text-center pt-3">Data Loading...</h1>
                        )}
                    </div>
                </div>

                <div className="col-md-4 col-sep">
                    <h4 className="tbl-h">{column2Title}</h4>
                    <div className="b">
                        {table2 && table2.length > 0 ? (
                            table2.map((singleCard, index) => (
                                <div key={index} className="jobs">
                                    <FaArrowRightLong className="arrow" />
                                    <button
                                        onClick={() => navigate("/job", { state: { jobData: singleCard } })}
                                        className="job-text"
                                        style={{ 
                                            background: 'none', 
                                            border: 'none', 
                                            color: 'inherit', 
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            width: '100%',
                                            padding: 0
                                        }}
                                    >
                                        {singleCard?.title}
                                    </button>
                                </div>
                            ))
                        ) : (
                            <h1 className="text-center pt-3">Data Loading...</h1>
                        )}
                    </div>
                </div>
                <div className="col-md-4 col-sep">
                    <h4 className="tbl-h">{column3Title}</h4>
                    <div className="b">
                        {table3 && table3.data && table3.data.length > 0 ? (
                            table3.data.map((singleJob, index) => (
                                <div key={index} className="jobs">
                                    <FaArrowRightLong className="arrow" />
                                    <button
                                        onClick={() => navigate(table3.navigationUrl, { state: { jobData: singleJob } })}
                                        className="job-text"
                                        style={{ 
                                            background: 'none', 
                                            border: 'none', 
                                            color: 'inherit', 
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            width: '100%',
                                            padding: 0
                                        }}
                                    >
                                        {singleJob?.title}
                                    </button>
                                </div>
                            ))
                        ) : (
                            <h1 className="text-center pt-3">Data Loading...</h1>
                        )}
                    </div>
                </div>
            </div>
            {/* <hr style="height: 2px; color: black; background-color: gray;"> */}
            <center>
                <button onClick={() => navigate(pageUrl)} className="button-reg">See More..</button>
            </center>
        </div>
    );
};

export default NotificationTable;
