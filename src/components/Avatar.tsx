import Image from "next/image";

type Props = {
  image?: string;
  size?: "small" | "medium" | "large" | "xlarge";
};
export default function Avatar({
  image = "/images/test.jpg",
  size = "xlarge",
}: Props) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* <img
        className={`bg-white object-cover rounded-full w-[242px] h-[242px]`}
        alt="user profile"
        src={"/images/test.jpg"}
        referrerPolicy="no-referrer" // x박스 이슈 해결
      /> */}
      <Image
        src={"/images/test.jpg"}
        alt="img"
        priority
        width={100}
        height={100}
      />
    </div>
  );
}
