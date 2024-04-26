import { FaChevronRight } from "react-icons/fa";
import bg from "../assets/bg2.png";
import mb from "../assets/mobile.png";

function Info() {
  return (
    <div className="bg bg-repeat" style={{ backgroundImage: `url(${bg})` }}>
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
                <div className="text-white sm:text-5xl text-center text-2xl py-4">
                  Managing
                </div>
              </div>

              <div className="bg-[#1a1507] h-min rounded-3xl border border-white/40 w-1/2 p-4 shadow-bottom-left">
                <div className="text-white sm:text-5xl text-center text-2xl py-4">
                  Sharing
                </div>
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

              <div className="bg-[#1a1507]/70 h-min rounded-3xl border border-white/40 w-1/2 p-4 shadow-bottom-left">
                <div className="text-5xl font-bold text-white/40 pb-1">2</div>
                <div className="text-white text-5xl py-4">Sharing</div>
                <div className="text-white/50 pb-2">
                  Experience lightning-fast and trackable ID sharing with qid,
                  ensuring seamless and efficient communication
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-2/12 flex flex-col ">
              <div className=" border-b pb-5 w-10 flex -ml-4 justify-center">
                <div className="h-28 md:h-20 w-2 bg-gradient-to-b from-transparent to-[#93fb6f] "></div>
              </div>
              <div className=" border-b mt-4 pb-5 w-10 flex -ml-4 justify-center">
                <div className="h-80 md:h-56 w-2 bg-gradient-to-b  from-[#93fb6f] via-green-500 to-orange-500 "></div>
              </div>
              <div className="  mt-4  pb-5 w-10 flex -ml-4 justify-center">
                <div className="h-56 md:h-36 w-2 bg-gradient-to-b  from-orange-500 to-transparent "></div>
              </div>
            </div>
            <div className="ml-4 lg:-ml-4">
              <div className="py-10">
                <div className="md:text-5xl text-3xl text-white md:w-[500px]">
                  Your true identity,{" "}
                  <span className="bg-gradient-to-r from-green-200 to-green-500 bg-clip-text text-transparent">
                    managed
                  </span>{" "}
                  with ease.
                </div>
                <div className="pt-4 text-white/40">
                  With qid, managing your IDs has never been easier. You can
                  store and access all your IDs in one place, share them
                  securely with others, and even get them verified with just a
                  few clicks. Say goodbye to the hassle of carrying physical IDs
                  or struggling with tedious verification processes, and hello
                  to the convenience and simplicity of qid.
                </div>
              </div>

              <div className="py-10">
                <div className="md:text-5xl text-3xl text-white md:w-[600px]">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                    Share
                  </span>{" "}
                  your identity with ease, qid has got you covered!
                </div>
                <div className="pt-4 text-white/40">
                  Sharing IDs with qid is simple and convenient. Just add the ID
                  to your qid profile and share it with anyone, anytime,
                  anywhere. No need to carry physical IDs or worry about losing
                  them.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
