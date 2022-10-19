import React, { useEffect, useState } from 'react'
import Post from './Post'
import { query, onSnapshot } from 'firebase/firestore';
import { collection, orderBy } from 'firebase/firestore';
import {db} from '../../firebase'

function Posts({id,username,userImg,caption,img}) {


    const [posts,setPosts]=useState([]);



    useEffect(()=>{
     
        return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot=>{
            setPosts(snapshot.docs);
        });


    }, [db]);



  return (
    <div>
        {/* post */}
        {posts.map((post)=>(
            <Post
             key={post.id} 
            id={post.id}
            username={post.data().username}
            iserImg={post.data().profileImg}
            img={post.data().img}
            caption={post.data().caption} />

        ))}
         
    </div>
  )
}

export default Posts