import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'
import Modal from './components/Modal'
import Feed from  './components/Feed'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen
    overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<RecoilRoot>
      <Header/>
      
      <Feed/>
      <Modal/>
      </RecoilRoot>
      

      {/* modal */}

    </div>
  )
}

export default Home
require('tailwind-scrollbar')
   