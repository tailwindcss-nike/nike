import React from 'react';
import Button from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {shoes, statistics} from "../constants/index.js";
import {bigShoe1} from "../assets/images/index.js";
import ShoeCard from "../components/ShoeCard.jsx";
import {useState} from "react";

const Hero = () => {

    const [bigShoeImg, changeBigShoeImage] = useState(bigShoe1);
    return (
        <section id={"home"} className={'w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'}>
          <div className={"relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"}>
              <p className={"font-montserrat text-xl text-coral-red"}>Our Summer Collection</p>
              <h1 className={"mt-10 font-palanquin text-8xl max-sm:[-72px] max-sm:leading-[82pxnpm ] font-bold"}>
                  <span className={"xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"}>The New Arrival</span>
                  <br/>
                  <span className={"inline-block mt-3 text-coral-red"}>Nike</span> Shoes
              </h1>
              <p className={"font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"}>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
              </p>
              <Button label={"Shop now"} iconUrl={arrowRight}/>
              <div className={"flex justify-start items-start flex-wrap w-full mt-20 gap-16"}>
                  {statistics.map((item) => (
                      <div key={item.label}>
                          <p className={"text-4xl font-palanquin font-bold"}>
                              {item.value}
                          </p>
                          <p className={"leading-7 font-montserrat text-slate-gray"}>
                              {item.label}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
            <div className={"relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"}>
                <img
                    src={bigShoeImg}
                    alt={"shoe collection"}
                    width={610}
                    height={500}
                    className={"object-contain relative z-10"}
                />
                <div className={"flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6"}>
                    {shoes.map((shoe) => (
                        <div key={shoe.id}>
                            <ShoeCard
                                imgUrl={{thumbnail: shoe.thumbnail, bigShoe: shoe.bigShoe}}
                                changeBigShoeImage={(shoe) => changeBigShoeImage(shoe)}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;