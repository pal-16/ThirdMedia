import React, { useEffect, useState } from "react";
import "../styles/NFTCard.css";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ColorExtractor } from "react-color-extractor";
import Card2 from "./base/Card2";
import Button from "./base/Button";
import { Colors } from "../constants/Colors";

import { ModelViewerElement } from "@google/model-viewer";
import { useARStatus } from "../hooks/isARStatus";

const FeedCard = ({
    username,
    nftName,
    price,
    nftSrc,
    likeCount,
    gradient,
    onClick,
}) => {
    const [isLike, setIsLike] = useState(false);
    const [colors, setColors] = useState([]);

    const isARSupport = useARStatus(nftSrc);

    useEffect(() => {
        console.log(isARSupport);
    }, []);

    const like = () => setIsLike(!isLike);

    const getColors = (colors) => {
        setColors((c) => [...c, ...colors]);
        //console.log(colors);
    };
    return (
        <Card2
            blurColor={colors[0]}
            child={
                <div className="flex flex-row gap-8">
                    <div className="">
                        {isARSupport ? (
                            <model-viewer
                                ar-scale="auto"
                                ar
                                ar-modes="webxr scene-viewer quick-look"
                                id="reveal"
                                loading="eager"
                                camera-controls
                                auto-rotate
                                src={nftSrc}
                            >
                                {" "}
                            </model-viewer>
                        ) : (
                            <>
                                <ColorExtractor getColors={getColors}>
                                    <img className="nft-image" src={nftSrc} />
                                </ColorExtractor>
                            </>
                        )}
                    </div>
                    <div>
                        <div className="wrapper gap-4">
                            <div className="info-container">

                                <p className="name">Best Startup Pitch</p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>

                        <div className="buttons">
                            {/* <button className="buy-now">Buy Now</button> */}
                            <Button
                                color={Colors.buttons.primary}
                                textContent="Donate"
                                onClick={onClick}
                            />
                            <div className="like-container">
                                <button className="like" onClick={like}>
                                    {!isLike ? (
                                        <AiOutlineHeart
                                            size="30"
                                            color="white"
                                        />
                                    ) : (
                                        <AiFillHeart
                                            size="30"
                                            style={{
                                                stroke: `-webkit-linear-gradient(
                    to bottom,
                    #38ef7d,
                    #11998e
                  );`,
                                            }}
                                            color="#00f5c966"
                                        />
                                    )}
                                </button>
                                <p className="like-count">12</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        ></Card2>
    );
};

export default FeedCard;
