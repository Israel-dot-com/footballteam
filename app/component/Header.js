import React from 'react'

import headerimage from './headerimage.jpg'
import Image from 'next/image'
export default function Header() {
  return (
    <div>
        <div className='relative w-full'>
        <Image 
        className=''
        src={headerimage}
       />
        <div className="absolute bottom-0 lg:left-0 p-5 md:p-10 lg:p-16  text-white  flex flex-col">
          <p className="text-2xl md:text-4xl lg:text-6xl lg:text-left ">Overlay Text, gives pochino what to do any longer, maye thats what he wanted</p>
          <div>
            Men's Team
          </div>
          <div className='flex'>
            <div>
              ----
            </div>
            <div className='flex'>
              <div>IG</div>
              <div>Facebook</div>
              <div>Whatsapp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
