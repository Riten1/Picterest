import React from 'react'
import features from '../appwrite/features'
import {Link} from 'react-router-dom'

const EachPost = ({$id, featuredImage}) => {

  return (
    <Link to={`/post/${$id}`}>
    <div>
      <img src={features.getImagePreview(featuredImage)}></img>
    </div>
    </Link>
    
  )
}

export default EachPost