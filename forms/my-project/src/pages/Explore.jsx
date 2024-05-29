import React, { useEffect, useState } from "react";
import features from "../appwrite/features";
import EachPost from "../components/EachPost";




const Explore = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    features.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  return (
    <div className="w-full py-8">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div className="p-2 w-1/4" key={post.$id}>
            <EachPost {...post} />
          </div>
        ))}
      </div>
  </div>
  );
};

export default Explore;
