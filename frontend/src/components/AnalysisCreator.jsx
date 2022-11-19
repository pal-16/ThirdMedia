import React from "react";
import '../styles/Analysis.css';

const AnalysisCreator = () => {
    const data = [
        {
            address: "0x0000000000000000000000000000000000000000",
            revenue: "20 TEZ",
            source: "Donation"
        },
        {
            address: "0x0000000000000000000000000000000000000000",
            revenue: "5 TEZ",
            source: "Minting"
        },
        {
            address: "0x0000000000000000000000000000000000000000",
            revenue: "1 TEZ",
            source: "Donation"
        },

    ]
    return (
        <div className="analysis pt-10">

            <span className="font-poppins font-semibold text-[20px] leading-[32px] text-white center " >Creator {" "}Revenue {" "} Analysis</span>


            <br>
            </br>
            <table className="container">
                <thead>
                    <tr>
                        <th>
                            <span className="font-poppins font-semibold text-[20px] leading-[32px] text-white">Address</span>
                        </th>
                        <th>
                            < span className="font-poppins font-semibold text-[20px] leading-[32px] text-white">Revenue</span>
                        </th>
                        <th>
                            <span className="font-poppins font-semibold text-[20px] leading-[32px] text-white">Source</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.address}</td>
                                    <td>{item.revenue}</td>
                                    <td>{item.source}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AnalysisCreator;
