import { Mail, Phone } from "lucide-react";
import bg from "../assets/bg2.png";
function Contact() {
  return (
    <div
      className="md:h-screen h-full border-b border-gray-500/30"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="py-32 md:pt-32 bg-black/80  pt h-full w-full text-white 2xl:px-[750px] xl:px-52 px-6">
        <div className="md:flex h-full">
          <div className="md:w-1/2 flex flex-col justify-center ">
            <div className=" text-5xl lg:text-8xl font-medium">Contact Us</div>
            <div className="text-2xl py-4 text-white/60">
              Discover Qid – Your Partner in Secure Identity Management
            </div>
            <div className="space-y-5 pb-10">
              <div className="flex text-lg font-medium items-center">
                <Mail className="mr-4" />{" "}
                <a
                  href="mailto:contact@oneqid.com"
                  className="text-red-400 hover:text-purple-900"
                >
                  contact@oneqid.com
                </a>
              </div>
              <div className="flex text-lg font-medium items-center">
                <Phone className="mr-4" />{" "}
                <a href="tel:+919606406404">+91 960 640 640 4</a>
              </div>
            </div>
            <div className="text-[#6fa7fd] border-t border-gray-500 lg:mr-40 md:mr-20 mr-10 py-10 text-3xl font-medium">
              Trusted by 25,000+ Users
            </div>
          </div>
          <div className="md:w-1/2 flex items-center lg:pl-6 justify-center">
            <div className="border bg-black border-white/30 md:p-12 p-6 w-full h-min rounded-3xl space-y-5">
              <Form label={"Name"} />
              <div className="md:flex md:space-x-5 space-y-5 md:space-y-0">
                <Form label={"Phone Number"} />
                <Form label={"Email"} />
              </div>
              <Form label={"Message"} />
              <div className="flex justify-end">
                <div className="bg-white text-black md:w-min w-full text-center mt-6 font-normal text-lg py-4 px-10 cursor-pointer rounded-full transition duration-300 hover:bg-blue-500">
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form({ label }: any) {
  return (
    <div>
      <div className="text-white/50 font-light">{label}</div>
      <input className="bg-transparent border-b border-white/50 text-xl px-4 w-full p-2"></input>
    </div>
  );
}

export default Contact;
