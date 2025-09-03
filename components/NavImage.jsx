import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavImage = () => {
  return (
    <div>
      <Link href="#nav">
        <Image
          src="/IMG_1245.png"
          alt=""
          width={150}
          height={100}
          className="auto "
        />
      </Link>
    </div>
  );
};

export default NavImage;
