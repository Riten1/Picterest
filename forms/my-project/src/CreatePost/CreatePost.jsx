import React from "react";
import {useForm} from "react-hook-form"
import Button from "../components/Button"
import Input from "../components/Input"
import Select from "../components/CategorySelect"
import features from  '../appwrite/features'
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";


export default function PostForm({post}){
    const {register, handleSubmit} = useForm({
        defaultValues: {
            caption: post?.caption || "",
            // slug: post?.slug || "",
            // content: post?.content || "",
            status: post?.status || "active"

        }
    })

    const navigate = useNavigate()
    const userData = useSelector((state) => state.authen.userData)


    const submit = async(data) => {
      console.log(post)
      // console.log(userData)
        if (post) {
            const file = data.image[0] ? await features.uploadImageFile(data.image[0]) : null

            if (file) {
                features.deleteImageFile(post.featuredImage)
            }
            const dbPost = await features.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined 
            })
            if (dbPost) {
                
                navigate(`/confirm-post/${dbPost.$id}`)
                console.log(dbPost)
            }
        } else {
            const file = await features.uploadImageFile(data.image[0])
            if (file) {
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await features.createPost({...data, userId: userData.$id})
              console.log(dbPost)
                if (dbPost) {
                    navigate(`/confirm-post/${dbPost.$id}`)
                }
            }
        }

    }

   
    return (
        <form onSubmit={handleSubmit(submit)}
        className="flex flex-wrap"
        >
            <div className="w-2/3 px-2">
                <Input
                label="Caption"
                placeholder="Enter caption"
                className="mb-4"
                {...register("caption", {required: true})}
                />
               
            </div>
            <div className="1/3 px-2">
                <Input
                label="Featured Image"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg"
                {...register("image", {required: !post})}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img src={features.getImagePreview(post.featuredImage)}
                        className="rounded-lg"
                        />
                        
                    </div>
                )}
                <Select
                options={["active", "inactive"]}
                label="Status"
                className="mb-4"
                {...register("status", {required: true})}
                />
                <Select
                options={["DIY", "Education", 'Animals']}
                label="Select Category"
                className="mb-4"
                {...register("category", {required: true})}
                />
                <Button
                type="submit"
                className="w-full"
                name={post ? "Update": "Submit"}
                ></Button>
            </div>
        </form>
    )
}