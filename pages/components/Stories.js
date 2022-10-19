import React,{useEffect, useState} from 'react'
// import scrollbar from '@tailwindcss/scroll                    bar'
import { faker } from '@faker-js/faker';

import Story from './Story'
// or, if using CommonJS 

function Stories({img,username}) {

const { faker } = require('@faker-js/faker');
const [suggestions, setSuggestions]= useState([]);

// const randomName = faker.name.fullName(); // Rowan Nikolaus
// const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// npm install --save-dev tailwind-scrollbar

// useEffect (()=>{
//     const suggestions = [...Array(20)].map((_, i) =>({
//         ...faker.helpers.contextualCard(),
//         id:i,
//     }));
//     console.log(suggestions);
//     setSuggestions(suggestions)

// },[])


  return (
    <div className='flex space-x-2 p-6 bg-white mt-8
    border-gray-200 border rounded-sm overflow-x-scoll h-32 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>

        { suggestions.map((profile)=> (
            <Story 
            key={profile.id}
            img={profile.avatar}
            username={profile.username}/>
        ))}
        {/* /*Stories*/ }
        
        

    </div>
  )
}

export default Stories