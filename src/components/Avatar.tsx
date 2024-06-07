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
    <div
      className={`relative bg-white rounded-full ${getImageSizeStyle(size)}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        alt="profile"
        src={image}
        fill
        priority
        className="rounded-full"
        sizes="100%"
        style={{ objectFit: "cover" }}
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
      return "w-[240px] h-[240px]";
    default:
      throw new Error(`Invalid size: ${size}`);
  }
}
