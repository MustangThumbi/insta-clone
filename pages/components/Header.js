import React from 'react'
import{
  SearchIcon,
PlusCircleIcon,
HeartIcon,
PaperAirplaneIcon,
MenuIcon,
HomeIcon,
UserGroupIcon,  } from "@heroicons/react/outline";

import Image from 'next/image'
// import { Session } from 'next-auth';
import {signIn, signOut, useSession,session} from "next-auth/react";
import { useRouter } from 'next/router';
import {modalState} from "../../atoms/ModalAtom"
import {
  
  useRecoilState
} from 'recoil';

function Header() {


  const {data:session }= useSession();
  const [open,setOpen] = useRecoilState(modalState);
  const router= useRouter();
 
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
        <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        <div onClick={() => router.push('/')} className='relative hidden lg:inline-grid  w-24 cursor-pointer'>
        <Image src="https://links.papareact.com/ocw"
        layout="fill"
        objectFit='contain'/>
      </div>

      <div className='relative lg:inline-grid  w-10 flex-shrink-0 cursor-pointer'>
        <Image src="https://links.papareact.com/jjn"
        layout="fill"
        objectFit='contain'/>
      </div>
      {/* search place*/}
      <div className='relative mt-1 p-3 rounded-md'>
      <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
        <SearchIcon className='h-5 w-5 text-gray-500'/>
      </div>
      <input type="text" 
       className='bg-gray-50 block w-full pl-10 sm:text-sm
       border-gray focus:ring-black focus:border-black rounded-md'
       placeholder="Search"
     />
      </div>
{/**icons on the right */}
    <div className=' flex items-cenpm install tailwind-scrollbar-hidenpm install --save-dev tailwind-scrollbarnter justify-end 
    space-x-4'>
    <HomeIcon onClick={() => router.push('/')} className='navBtn'/>
   
    <MenuIcon className='h-6 md:hidden cursor-pointer'/>

    {session? (
      <>
      <div className='relative navBtn'>
      <div className=' absolute -top-1 -right-2 text-xs w-5 h-5
       bg-red-500 rounded-full flex items-center justify-center
       animate-pulse text-white'>5</div>
    {/* <PaperAirplaneIcon className='navBtn rotate-45 '/> */}
    </div>
    <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn'/>
    <UserGroupIcon className='navBtn'/>
    <HeartIcon className='navBtn'/>

    <img 
    onClick={signOut}
    src={session.user.image}
    alt='profile pic'
    className='h-10 w-10 rounded-full cursor-pointer'/>
    </>

    ): (
      <button onClick={signIn}>Sign In</button>
    )}
    <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn'/>
    
    </div>
      </div>
      <h2>ooh shit</h2>
    </div>
  )
}

export default Header