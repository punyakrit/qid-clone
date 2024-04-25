import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Appbar() {
  const [menu, setMenu] = useState(false);

  function toggle() {
    setMenu(!menu);
  }

  return (
    <div>
      <div className="fixed 2xl:px-[750px] xl:px-44 px-12 border-b-[1px] border-gray-600/20 items-center text-white z-20 w-full h-24 bg-black flex justify-between">
        <div className="text-[38px] text-[#dfdfdf] font-medium italic cursor-pointer">
          qid
        </div>
        <div className="md:hidden">
          {!menu ? (
            <IoMenu
              onClick={toggle}
              className="text-[#383838] hover:text-white cursor-pointer transform duration-500 text-3xl"
            />
          ) : (
            <RxCross2
              onClick={toggle}
              className="text-[#383838] hover:text-white cursor-pointer transform duration-500 text-3xl"
            />
          )}
        </div>
        <div className="hidden md:flex space-x-12  text-[16px]">
          <div className="text-[#7A7A7A] hover:text-white cursor-pointer transform duration-500">
            App
          </div>
          <div className="text-[#7A7A7A] hover:text-white cursor-pointer transform duration-500">
            C-Form pro
          </div>
          <div className="text-[#7A7A7A] hover:text-white cursor-pointer transform duration-500">
            Contact
          </div>
        </div>
      </div>
      {menu && (
        <div className="md:hidden">
          <div className="fixed top-24 left-0 w-full bg-[#202020] text-white z-20">
            <div className="px-8 py-3 border-b border-black">App</div>
            <div className="px-8 py-3 border-b border-black">C-Form pro</div>
            <div className="px-8 py-3 border-b border-black">Contact</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appbar;
