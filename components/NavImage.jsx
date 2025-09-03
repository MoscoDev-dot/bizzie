import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavImage = () => {
  return (
    <div>
      <Link href="#">
        
        <Image
          src="/List.png"
          alt="bizzie"
          width={150}
          height={100}
          className="auto "
        />
      </Link>
    </div>
  );
};

export default NavImage;
