import Link from 'next/link'
import React from 'react'


const FooterResources = () => {
  return (
    <div>
      <p className="font-semibold text-[12px] leading-[28px] text-[#252525] py-2 md:text-[16px]">
                Resources
              </p>
              <ul className="flex text-[#353535] flex-col gap-5">
                <Link href="/">
                  <li className="hover:border-b w-fit">home</li>
                </Link>
                <Link href="/">
                  <li className="hover:border-b w-fit">Blog</li>
                </Link>
                <Link href="/">
                  <li className="hover:border-b w-fit">Contact</li>
                </Link>
              </ul>
    </div>
  )
}

export default FooterResources
