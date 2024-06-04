import Image from "next/image";

type Props = {
  image?: string | null;
  size?: "small" | "medium" | "large" | "xlarge";
};
export default function Avatar({
  image = "/images/profile.jpeg",
  size = "xlarge",
}: Props) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`bg-white object-cover rounded-full ${getImageSizeStyle(
          size
        )}`}
        alt="profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer" // x박스 이슈 해결
      />
    </div>
  );
}

function getImageSizeStyle(size: Props["size"]): string {
  switch (size) {
    case "small":
      return "w-[34px] h-[34px]";
    case "medium":
      return "w-[42px] h-[42px]";
    case "large":
      return "w-16 h-16";
    case "xlarge":
      return "w-[230px] h-[230px]";
    default:
      throw new Error(`Invalid size: ${size}`);
  }
}
