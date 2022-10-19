import { faker } from '@faker-js/faker';
// import { profile } from 'console';
import React, { useEffect,useState } from 'react'

function Suggestions() {
  const [suggestions, setSuggestions]= useState([]);


  useEffect(()=>{
    const suggestions = [...Array(5)].map((_, i) =>(
      {
        ...faker.helpers.contextualCard(),
        id:i,
      }
    ));
    setSuggestions(suggestions);

  },[])
  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-600'>
          Suggestions for you
        </h3>
        <button>See All</button>
      </div>
      {
        suggestions.map(profile =>(
          <div key={profile.id} className="flex
           items-center justify-between mt-3">
            <img
            className=''
            src={profile.avatar}
            alt=""
            />
            <div>
              <h2 className='font-semibold text-sm'>
                {profile.username}
              </h2>
              <h3 className='text-xs text-gray-400'> works at {profile.company.name}</h3>
            </div>
            <button className='text-blue-400 text-xs'>Follow</button>


          </div>
        ))
      }
    </div>
  )
}
   
export default Suggestions