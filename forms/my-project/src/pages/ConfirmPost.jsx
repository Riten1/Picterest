import React, {useEffect, useState} from 'react'
import {useNavigate, useParams, Link} from "react-router-dom"
import features from '../appwrite/features'
import Button from "../components/Button"
import parse from "html-react-parser"
import {useSelector } from "react-redux"

function ConfirmPost() {
  const [post, setPost] = useState(null)
  const {postId} = useParams()
  const navigate = useNavigate()
  const userData = useSelector((state) => state.authen.userData)
  const isAuthor = post && userData ? post.userId === userData.$id : false

  function handleOk() {
    navigate('/')
  }

  useEffect(() => {
    if (postId) {
      features.getPost(postId).then((post) => {
        if (post) {
          setPost(post)
        }else {
          navigate("/")
        }
      })
      console.log(postId)
    }console.log(post)
    console.log(isAuthor)
  }, [postId, navigate])

  const deletePost = () => {
    features.deletePost(post.$id).then((status) => {
      if (status) {
        features.deleteImageFile(post.featuredImage);
        navigate("/")
      }
    })
  }
  return post ? (
    <div className="py-8">
      
        <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
          <img src={features.getImagePreview(post.featuredImage)} alt={post.caption} className='rounded-xl' />
          {isAuthor && (
             <div className="absolute-right-6 top-6">
             <Link to={`/edit-post/${post.$id}`}>
               <Button name='Edit'  className="mr-3 bg-green-500"></Button>
             </Link>
             <Button name='Delete' className='bg-red-500'
             onClick={deletePost}
             ></Button>
           </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold"> {parse(post.caption)}</h1>
        </div>
        <Button name={'Confirm'} onClick={handleOk} />
    </div>
  ) : null
}

export default ConfirmPost