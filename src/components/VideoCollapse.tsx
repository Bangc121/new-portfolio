"use client";

import Video from "next-video";
import { useState } from "react";

type Props = {
  src: string;
};
export default function VideoCollapse({ src }: Props) {
  const [isOpened, setIsOpened] = useState(false);

  console.log("src", src);
  return (
    <div className="d-flex flex-column">
      <button onClick={() => setIsOpened(!isOpened)}>{`${
        isOpened ? "접기" : "펼치기"
      }`}</button>
      {isOpened && <Video src={src} />}
    </div>
  );
}
