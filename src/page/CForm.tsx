import { Chrome } from "lucide-react";
import bg from "../assets/bg2.png";
import image from "../assets/aiimg.png";
import pjh from "../assets/phio.png";
import en from "../assets/imgggg.png";
function CForm() {
  return (
    <div className="bg bg-repeat " style={{ backgroundImage: `url(${bg})` }}>
      <div className="h-full">
        <div className="to-black/60 bg-gradient-to-b from-black  w-full h-full  pb-10 ">
          <div className="pt-52 text-white 2xl:px-[750px] xl:px-52 px-6 ">
            <div className="text-6xl md:text-[80px] font-medium">
              <span className="bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">
                C-Form
              </span>{" "}
              Automation
            </div>
            <div className="md:text-3xl text-xl text-white/60 py-4">
              Say Goodbye to Manual C-Forms
            </div>

            <div className="md:flex mt-4 space-y-6 md:space-y-0 md:space-x-5">
              <div className=" bg-white w-max text-xl font-medium text-black px-8 py-4 rounded-full">
                Book a demo
              </div>
              <div className="flex items-center w-max bg-black text-xl font-medium border border-white/40 px-8 py-5 rounded-full">
                <Chrome className="mr-2" /> Get Chrome Extension
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {<img className="pl-20 -mt-10" src={image}></img>}
          </div>
          <div className="md:hidden ml-8 mt-10">
            <img src={en}></img>
          </div>
          <div className="text-white/80 font-medium  text-4xl md:text-8xl 2xl:px-[750px] xl:px-52 px-6 mt-10">
            Trust us, it's truly a matter of just{" "}
            <span className="bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text text-transparent">
              one click.
            </span>
          </div>

          <div className="py-20 md:flex 2xl:px-[750px] xl:px-52 px-6 space-y-6 md:space-y-0 md:space-x-5 ">
            <Card>
              <div>Your guests upload photos of their Passport and Visa.</div>
            </Card>
            <Card>
              <div>
                Qid's AI engine extracts details like Passport Number, Visa
                Number, Name, Country, and Photos from the images
              </div>
            </Card>
            <Card>
              <div>
                Go to the C-Form website Open the qid C-Form Pro Chrome plugin.
                Select the guest. Done!
              </div>
            </Card>
          </div>

          <div className="md:flex 2xl:px-[750px] xl:px-52 px-6 mt-10">
            <div className="md:w-2/3 ">
              <div className="flex flex-col h-full justify-center items-center">
                <div className="md:text-5xl text-4xl text-white">
                  Elevate C-Form Processing with qid's State-of-the-Art Chrome
                  Extension
                </div>
                <div className="text-white/80 text-xl py-6">
                  Simplify C-Form management like never before with qid’s
                  revolutionary Chrome extension.
                </div>
                <div className="flex items-center bg-white text-xl font-medium border border-white/40 px-8 py-5 rounded-full">
                  <Chrome className="mr-2" /> Get Chrome Extension
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-8 py-8 ml-8">
              <img src={pjh} className="rounded-3xl  -skew-x-3 skew-y-6" />
            </div>
          </div>

          <div className="bg-black text-white  p-8 my-4 rounded-3xl border 2xl:mx-[750px] xl:mx-52 mx-6">
            <div className="md:text-5xl text-4xl font-medium text-white/90">
              What is C-Form?
            </div>

            <div className="py-6 space-y-4 text-white/80 text-xl md:text-2xl">
              <div>
                In India, a <span className="text-white underline">C-Form</span>{" "}
                is a mandatory document required under the Foreigners’
                Registration Act, 1946.
              </div>
              <div>
                It serves as a record of the stay of foreign nationals within
                the country.
              </div>
              <div>
                Hotels, guesthouses, and other accommodation providers are
                legally obligated to submit C-Forms to local authorities for
                every foreign guest’s stay.
              </div>
            </div>

            <div className="text-xl rounded-full border w-max  px-8 py-4 border-white/50">
              Ream More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ children }: any) {
  return (
    <div className="text-white p-8 rounded-3xl border border-white/30 z-10 text-3xl md:w-1/3 bg-gradient-to-tr from-black to-zinc-800">
      {children}
    </div>
  );
}

export default CForm;
