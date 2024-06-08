import Avatar from "@/components/Avatar";
import Image from "next/image";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full">
      <Image
        className="opacity-25 z-0"
        src={"/images/background.jpg"}
        alt="img"
        priority
        fill
      />
      <div className="flex absolute z-10 inset-0 flex-col md:flex-row justify-center items-center ">
        <div className="flex justify-center items-center pr-32">
          <Introduction />
        </div>
        <div className="flex items-center">
          <Image
            src={"/images/background.jpg"}
            alt="imgee"
            priority
            width={100}
            height={100}
          />
          <Image
            src={"/images/profile.jpeg"}
            alt="imgewefwefe"
            priority
            width={100}
            height={100}
          />
          <Avatar />
        </div>
      </div>
    </div>
  );
}
