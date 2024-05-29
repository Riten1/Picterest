import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CreatePost from '../CreatePost/CreatePost'
import features from '../appwrite/features'

const EditPost = () => {
  const [post, setPost] = useState()
  const {postId} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    features.getPost(postId).then((post) => {
      if(post) {
        setPost(post)
      }else{
        navigate('/')
      }
    })
  }, [postId, navigate])
  return (
    <div>
      <CreatePost post={post}/>
    </div>
  )
}

export default EditPost