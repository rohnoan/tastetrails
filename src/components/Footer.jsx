import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#f3a23a] mt-[50px] h-[200px] flex items-center justify-center flex-col '>
        <div className='flex text-center justify-center mb-8'>
        taste trials aims to prioritize the nutritional value of food over just its taste, encouraging healthier eating habits. by highlighting essential nutrients, it empowers individuals to make informed choices for their well-being. the platform promotes balance between flavor and health, helping people lead healthier, more fulfilling lives.        </div>
        <div className='flex flex-row justify-between space-x-8'>
            <a className='flex-1' href="github.com/rohnoan">github</a>
            <a className='flex-1'  href="https://www.linkedin.com/in/rohan-sharma-4ab356202/">linkedin</a>
            <a className='flex-1'  href="instagram.com">instagram</a>
        </div>
        <div>
           with love &lt;3.
        </div>
        <div >
            <a href="github.com/rohnoan">rohnoan</a>
        </div>
    </div>
  )
}
