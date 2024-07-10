import React from "react";
import features from "../appwrite/features";
import { useState } from "react";
import { useEffect } from "react";
import EachPost from "../components/EachPost";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);

  const userData = useSelector((state) => state.authen.userData);
  const authStatus = useSelector((state) => state.authen.status)

  useEffect(() => {
    features.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        console.log(posts)
      }
      // posts.map((post) => )
    });
    // console.log(isAuthor)
    console.log(posts)
    // console.log(userData)
  }, []);
  if (posts.length === 0 && authStatus === true) {
    return (
      <div className="w-full py-8">
        <div className="flex flex-wrap">
          <h1>Loading</h1>
        </div>
      </div>
    );
  }

  if (authStatus === false){
    return (
      <div className="w-full py-8">
        <div className="flex flex-wrap">
          <h1>Please login to view contents.</h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      
        <div className="w-full py-8">
          Your posts
          <div className="flex flex-wrap">
            {posts.map((post) => post && userData ? post.userId === userData.$id ?
            
                <div className="p-2 w-1/4" key={post.$id}>
                <EachPost {...post} />
              </div> 
              
          
             
            :null :null)}
          </div>
        </div>
      
    </div>
  );
}

export default Home;
