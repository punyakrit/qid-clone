import bg from "../assets/bg2.png";
import qr from "../assets/qr.png";
import data from "../assets/data.png";
import { FaChevronRight } from "react-icons/fa";
import p1 from "../assets/pq.jpg";
import p2 from "../assets/ps.jpg";
import p3 from "../assets/px.jpg";
import p4 from "../assets/pz.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { useNavigate } from "react-router-dom";

function Analytics() {
  const Navigate = useNavigate()
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, loop: true })
  );
  return (
    <div className="bg bg-repeat" style={{ backgroundImage: `url(${bg})` }}>
      <div className="h-full">
        <div className="bg-black/85 text-white  w-full h-max  2xl:px-[750px] xl:px-52 px-6  py-10">
          <div className="md:flex">
            <div className="md:w-2/6">
              <Card>
                <img src={qr} className="rounded-3xl"></img>
                <div className="text-2xl mt-4 text-center font-medium">
                  Collect IDs with QR
                </div>
                <div className="py-4 text-gray-500 text-center">
                  Easy to setup QR code stand
                </div>
              </Card>

              <Card>
                <div className="text-2xl  text-center font-medium">
                  Customized Interface
                </div>
                <div className="py-4 text-gray-500">
                  Tailor qid’s interface to perfectly align with your brand,
                  creating a seamless and personalized user experience.
                </div>
              </Card>
            </div>
            <div className="md:w-4/6">
              <div>
                <Card>
                  <div className="text-2xl py-4 font-medium">
                    Business Analytics
                  </div>
                  <img src={data} className=""></img>
                  <div className="py-4 text-gray-500">
                    Unlock the power of data with qid – your ultimate tool for
                    comprehensive business analytics.
                  </div>
                </Card>
              </div>

              <div className="md:flex">
                <div className="md:w-1/2">
                  <Card>
                    <div className="text-2xl  text-center font-medium">
                      Developer APIs
                    </div>
                    <div className="py-4 text-gray-500">
                      Supercharge your applications with qid’s robust developer
                      APIs, enabling you to effortlessly leverage the full
                      potential of our platform and create unique, personalized
                      experiences for your users.
                    </div>
                  </Card>
                </div>
                <div className="md:w-1/2">
                  <Card>
                    <div className="text-2xl  text-center font-medium">
                      One-Click C-Form
                    </div>
                    <div className="py-4 text-gray-500">
                      Simplify C-Form filling with qid’s 1-Click solution,
                      automating the process and saving you time while ensuring
                      compliance.
                    </div>
                  </Card>
                </div>
              </div>

              <div onClick={()=>{
                Navigate('/app')
              }} className="bg-white text-black mt-6 font-medium text-xl sm:py-4 sm:px-6 py-3 px-4 cursor-pointer rounded-full flex justify-center w-max items-center">
                Create Business Account{" "}
                <FaChevronRight className="bg-black text-white rounded-full p-1 ml-2" />
              </div>
            </div>
          </div>

          <div className="py-20">
            <div className="md:text-7xl text-5xl font-medium text-center">
              <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                Identified
              </span>{" "}
              by <span className="italic font-bold">qid</span>
            </div>
            <div className="md:text-2xl text-xl py-4 text-center">
              Let’s dive into the real stories of how our service has touched
              the lives of our customers.
            </div>

            <div className=" mt-6 px-10  items-center">
              <Carousel plugins={[plugin.current]}>
                <CarouselContent>
                  <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                    <PersonCard
                      img={p1}
                      title={
                        " Guests are benefited as they can pre-fill the required documents beforethey come-in."
                      }
                      name={"Krishan Pandey"}
                      desc={"Property Owner, The Unmad, Dharamkot"}
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <PersonCard
                      img={p2}
                      title={
                        "Best bheed management software for your property's front desk. ID collection has never been this fast."
                      }
                      name={"Dhruv Arora"}
                      desc={"Property Owner, Unplan Hostels, Rishikesh"}
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <PersonCard
                      img={p3}
                      title={
                        "Even while on the move, QID allows me to easily monitor and manage the business with precision."
                      }
                      name={"Jitesh Agarwal"}
                      desc={"Founder, The Lost Hostels"}
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <PersonCard
                      img={p4}
                      title={
                        " QID is set to revolutionise not just hospitality, but also other identity-centric industries."
                      }
                      name={"Mayur Sontakke"}
                      desc={"Founder & CEO, NomadGao"}
                    />
                  </CarouselItem>
                </CarouselContent>
                
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ children }: any) {
  return (
    <div className="p-6 border rounded-3xl  border-gray-400/40 bg-gradient-to-r from-white/10  to-black m-4">
      {children}
    </div>
  );
}

function PersonCard({ img, title, name, desc }: any) {
  return (
    <div className="p-4 border rounded-3xl h-96 border-gray-400/20 bg-black m-2 flex flex-col">
      <img src={img} className="w-24 h-24 object-cover rounded-full mb-4"></img>
      <div className="text-xl mb-2">{title}</div>
      <div className="text-xl text-gray-500 font-bold mb-2">{name}</div>
      <div className="text-gray-500">{desc}</div>
    </div>
  );
}


export default Analytics;
