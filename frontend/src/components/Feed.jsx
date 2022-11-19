import React from "react";
import FeedCard from "./FeedCard";
import "../styles/Feed.css";
import { useNavigate } from "react-router-dom";

const Feed = ({ list, type = "horizontal" }) => {
    let navigate = useNavigate();

    return (

        <div className="flex flex-row overflow-hidden">
            <div>
                <div
                    id="card-list"
                    style={{
                        flexDirection: type == "horizontal" ? "row" : "column",
                    }}
                >
                    {list.map((item, index) => (
                        <FeedCard
                            nftSrc={item.src}
                            key={index}
                            onClick={() =>
                                navigate("/detail", { state: { item: item } })
                            }
                        />
                    ))}
                </div>
            </div>
            <div className="static_data pr-8 ">
                <div >
                    <br></br>
                    <br></br>
                    <br></br>
                    <span style={{
                        fontWeight: 'bold', textDecoration: 'underline', textAlign: 'center'
                    }} className="font-poppins  text-[20px] leading-[32px] text-white">
                        Articles to help you learn more about Web3
                    </span>

                    <li className="font-poppins text-white">
                        Learn more about stable coins here!
                    </li>

                    <li className="font-poppins text-white">
                        Intro to Blockchains
                    </li>
                    <li className="font-poppins text-white">
                        All about crypto
                    </li>

                    <li className="font-poppins text-white">
                        How to pay in cryptocurrency?
                    </li>
                    <li className="font-poppins text-white">
                        Creator economy in 2022
                    </li>

                    <li className="font-poppins text-white">
                        Next era of creators and subscribers
                    </li>
                    <li className="font-poppins text-white">
                        Learn more about stable coins here!
                    </li>

                    <li className="font-poppins text-white">
                        Intro to Blockchains
                    </li>
                    <li className="font-poppins text-white">
                        All about crypto
                    </li>

                    <li className="font-poppins text-white">
                        How to pay in cryptocurrency?
                    </li>
                    <li className="font-poppins text-white">
                        Creator economy in 2022
                    </li>

                    <li className="font-poppins text-white">
                        Next era of creators and subscribers
                    </li>
                </div>
            </div>
        </div >
    );
};

export default Feed;
