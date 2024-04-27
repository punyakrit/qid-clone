import bg from "../assets/bg-main.png";

function Home() {
  return (
    <div className="relative">
      <div className="h-screen border-b border-gray-800/80">
        <img src={bg} className="h-full w-full object-cover" alt="Background"></img>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center 2xl:px-[750px] xl:px-52 px-12   items-center">
          <h1 className="text-white text-5xl md:text-7xl font-bold md:text-center text-left">
          every person deserves to know and be known by their true identity
          </h1>
          <div className="bg-white mt-6 font-medium text-xl py-4 px-10 cursor-pointer rounded-full">
            Download qid
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
