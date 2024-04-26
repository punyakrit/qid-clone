import bg from "../assets/bg2.png";
import qr from "../assets/qr.png";
import data from "../assets/data.png";
import { FaChevronRight } from "react-icons/fa";

function Analytics() {
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

              <div className="bg-white text-black mt-6 font-medium text-xl sm:py-4 sm:px-6 py-3 px-4 cursor-pointer rounded-full flex justify-center w-max items-center">
                Create Business Account{" "}
                <FaChevronRight className="bg-black text-white rounded-full p-1 ml-2" />
              </div>
            </div>
          </div>

          <div className="py-20">
            <div className="text-7xl font-medium text-center">
              Identified by <span className="italic font-bold">qid</span>
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

export default Analytics;
