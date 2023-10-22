import Link from 'next/link'
import React from 'react'
import profileImg from 'public/profile.jpg'
import Image from 'next/image'



const Logo = () => {
    return (
        <Link href='/' className='flex items-center text-dark dark:text-light'>
            <div className=" w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4">                <Image src={profileImg} alt='JC' className='flex justify-center w-full h-full rounded-full' />
            </div>
            <span className='font-bold dark:font-semibold text-xl md:text-2xl lg:text-5xl'>Jeremy "JC" Ashley</span>

        </Link>
    )
}

{/* <Link href="/" className="flex items-center text-dark dark:text-light">
<div className=" w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4">
    <Image src={profileImg} alt="CodeBucks logo" className="w-full h-auto rounded-full" sizes="20vw" priority />
</div>
<span className="font-bold dark:font-semibold text-lg md:text-xl">CodeBucks</span>
</Link> */}

export default Logo