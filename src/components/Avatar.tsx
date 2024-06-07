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
    <div className={`relative rounded-full w-[240px] h-[240px]`}>
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
