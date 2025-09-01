import Link from 'next/link'
import React from 'react'

const FooterCompany = () => {
  return (
    <div>
      <p className="font-semibold text-[12px] leading-[28px] text-[#252525] py-2 md:text-[16px]">
                Company
              </p>
              <ul className="flex text-[#353535] flex-col gap-5">
                <Link href="/">
                  <li className="hover:border-b w-fit">About</li>
                </Link>
                <Link href="/">
                  <li className="hover:border-b w-fit">Features</li>
                </Link>
                <Link href="/">
                  <li className="hover:border-b w-fit">Work</li>
                </Link>
                <Link href="/">
                  <li className="hover:border-b w-fit">Career</li>
                </Link>
              </ul>
    </div>
  )
}

export default FooterCompany
