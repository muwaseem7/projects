import Image from "next/image";
import React, { useState } from "react";

export default function ImageGIF({ images }) {
  const [imageNumber, setImageNumber] = useState(0);
  const [hovering, setHovering] = useState(false);

  async function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));
  }
  async function updateImage() {
    await sleep(100);
    setImageNumber((imageNumber + 1) % images.length);
  }
  if (hovering) {
    updateImage();
  }
  return (
    <span>
      <Image
        src={images[imageNumber]}
        className="rounded-[40%] mx-4"
        alt={"imageAltText"}
        width="100%"
        height="100%"
        layout="responsive"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      />
    </span>
  );
}
