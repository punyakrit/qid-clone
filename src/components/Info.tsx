import { FaChevronRight } from "react-icons/fa";
import bg from "../assets/bg2.png";
import mb from "../assets/mobile.png";

function Info() {
  return (
    <div className=" ">
      <div className="h-full">
        <div className="bg-black/70  w-full h-max  2xl:px-[750px] xl:px-52 px-6  ">
          <div className="md:flex ">
            <div className="md:w-1/2 text-white flex flex-col justify-center pt-20 md:pt-0">
              <div className="md:text-7xl text-5xl font-bold">
                <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  Secure
                </span>
                , easy, and always with you.
              </div>
              <div className="bg-white text-black mt-6 font-medium text-xl py-4 px-6 cursor-pointer rounded-full flex justify-center w-max items-center">
                Create free Account{" "}
                <FaChevronRight className="bg-black text-white rounded-full p-1 ml-2" />
              </div>
            </div>
            <div className="md:w-1/2">
              <img src={mb} className="z-20 pt-10" />
            </div>
          </div>
          <div className="md:flex pb-10">

          <div className=" flex -mt-10 mb-10 md:hidden xl:ml-20 lg:ml-14 space-x-3">
              <div className="bg-[#121e13] -mt-14 h-min rounded-3xl border border-white/40 w-1/2 p-4 shadow-top-left">
                <div className="text-white sm:text-5xl text-center text-2xl py-4">Managing</div>
                
              </div>

              <div className="bg-[#1a1507] h-min rounded-3xl border border-white/40 w-1/2 p-4 shadow-bottom-left">
                <div className="text-white sm:text-5xl text-center text-2xl py-4">Sharing</div>
                
              </div>
            </div>

            <div className="text-white md:w-1/3 xl:text-7xl md:text-5xl text-3xl  font-bold">
              Two Base elements of Identity ecosystem
            </div>
            <div className="hidden md:flex w-2/3 xl:ml-20 lg:ml-14 space-x-3">
              <div className="bg-[#121e13] -mt-14 h-min rounded-3xl border border-white/40 w-1/2 p-4 shadow-top-left">
                <div className=" text-5xl font-bold text-white/40 pb-1">1</div>
                <div className="text-white text-5xl py-4">Managing</div>
                <div className="text-white/50 pb-2">
                  Consolidate all your IDs securely in one place with qid,
                  making them easily accessible whenever you need them
                </div>
              </div>

              <div className="bg-[#1a1507] h-min rounded-3xl border border-white/40 w-1/2 p-4 shadow-bottom-left">
                <div className="text-5xl font-bold text-white/40 pb-1">2</div>
                <div className="text-white text-5xl py-4">Sharing</div>
                <div className="text-white/50 pb-2">
                  Experience lightning-fast and trackable ID sharing with qid,
                  ensuring seamless and efficient communication
                </div>
              </div>
            </div>
          </div>


          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
