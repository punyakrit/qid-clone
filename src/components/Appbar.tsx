function Appbar() {
  return (
    <div className="fixed px-32 border-b-[1px] border-gray-600/20 items-center text-white z-20 w-full h-24 bg-black flex justify-between">
      <div className="text-[38px] text-[#dfdfdf] font-medium italic">qid</div>
      <div className="flex space-x-12 text-[#7A7A7A] text-[16px]">
        <div>App</div>
        <div>C-Form pro</div>
        <div>Contact</div>
      </div>
    </div>
  );
}

export default Appbar;
