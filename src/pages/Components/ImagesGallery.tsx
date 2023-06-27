import React from "react";
import Image from "next/image";

export default function ImagesGallery() {
  return (
    <div className="flex justify-center my-4">
      <div className="flex space-x-4">
        <Image src="/test1.jpg" alt="My Photo" width={200} height={200} />
        <Image src="/test2.jpg" alt="My Photo" width={200} height={200} />
        <Image src="/test3.jpg" alt="My Photo" width={200} height={200} />
        <Image src="/test4.jpg" alt="My Photo" width={200} height={200} />
      </div>
    </div>
  );
}
