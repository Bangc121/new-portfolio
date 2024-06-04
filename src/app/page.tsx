import Avatar from "@/components/Avatar";
import Image from "next/image";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full">
      <Image
        className="opacity-15 z-0"
        src={"/images/background.jpg"}
        alt="img"
        fill
      />
      <div className="flex absolute z-10 inset-0 justify-center items-center">
        <div className="flex justify-center items-center pr-32">
          <Introduction />
        </div>
        <div className="flex items-center">
          <Avatar />
        </div>
      </div>
      {/* <div className="absolute z-20 inset-0">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
        </div>
        <div className="w-full flex justify-center items-center ">
          <div className="w-full basis-1/2 flex justify-center items-center">
            <Introduction />
          </div>
          <div className="w-full basis-1/2 flex items-center">
            <Avatar />
          </div>
        </div>
      </div> */}
    </div>
  );
}
