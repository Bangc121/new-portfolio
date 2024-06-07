"use client";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import ReactPlayer from "react-player";
import { useState } from "react";

type Props = {
  src: string;
};

export default function VideoCollapse({ src }: Props) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="d-flex flex-column">
      <div className="flex flex-row items-center text-sm mb-2">
        <p className="font-semibold">Video</p>
        <button className="ml-2" onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? <FaChevronDown /> : <FaChevronUp />}
        </button>
      </div>
      {isOpened && (
        <ReactPlayer
          url={src}
          width="100%"
          playing={false}
          muted={true}
          controls={true}
          loop={false}
        />
      )}
    </div>
  );
}
