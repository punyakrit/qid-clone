import ph from "../assets/phone.png";
import gp from "../assets/gp.png";
import qr from "../assets/qq.png";

import as from "../assets/as.png";

function AppRoute() {
  return (
    <div className="bg-white h-full 2xl:px-[750px] xl:px-48 px-6 pt-40 md:pt-28 pb-8">
      <div className="md:flex">
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className=" text-4xl md:text-6xl font-bold">Get the qid App</div>
          <div className="md:flex mt-4">
            <div className="pt-2 space-y-3 lg:space-y-5">
              <div>
                <a href="https://apps.apple.com/us/app/qid-quick-id/id1629041779">
                  <img src={as}></img>
                </a>
              </div>
              <div>
                <a href="https://play.google.com/store/apps/details?id=com.quickids.digilocker.qid">

                <img src={gp}></img>
                </a>
              </div>
            </div>
            <div>
              <img src={qr}></img>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={ph}></img>
        </div>
      </div>
    </div>
  );
}

export default AppRoute;
