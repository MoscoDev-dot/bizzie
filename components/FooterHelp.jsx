import Link from 'next/link'
import React from 'react'

const FooterHelp = () => {
  return (
    <div>
       <p className="font-semibold text-[12px] leading-[28px] text-[#252525] py-2 md:text-[16px]">
                Help
              </p>
              <ul className="flex text-[#353535] flex-col gap-5">
                <Link href="/">
                  <li className="hover:border-b w-fit">Contact support</li>
                </Link>
                <Link href="/">
                  <li className="hover:border-b w-fit">Deliveries details</li>
                </Link>
                <Link href="/">
                  <li className="hover:border-b w-fit">Terms and condition</li>
                </Link>
                <Link href="/">
                  <li className="hover:border-b w-fit">Privacy policy</li>
                </Link>
              </ul>
    </div>
  )
}

export default FooterHelp
