import appwriteConf from "../appwriteConf/appwriteConf";
import {Client, Databases, Storage, ID, Query} from 'appwrite'

export class Features{
  client = new Client()
  databases
  storage

  constructor(){
    this.client.setEndpoint(appwriteConf.appwriteUrl)
    .setProject(appwriteConf.appwriteProjectId);

    this.databases = new Databases(this.client)
    this.storage = new Storage(this.client)
  }

  async createPost({caption, featuredImage, status, category, userId}){
    try {
        return await this.databases.createDocument(
            appwriteConf.appwriteDatabaseId,
            appwriteConf.appwriteCollectionId,
            ID.unique(),
            {
             caption, featuredImage, status, category, userId
            }
        )
    } catch (error) {
        console.log("Appwrite service :: createPost() :: ", error);
        return false
    }
}

    async updatePost(postId, {caption, featuredImage, status, category}){
      try {
       return await this.databases.updateDocument(
          appwriteConf.appwriteDatabaseId,
          appwriteConf.appwriteCollectionId, 
          postId,
          { 
            caption,
            featuredImage, 
            status,
            category
          }
        )
      } catch (error) {
        throw error
      }
    }

    async deletePost(postId){
      try {
        return await this.databases.deleteDocument(
          appwriteConf.appwriteDatabaseId,
          appwriteConf.appwriteCollectionId,
          postId
        )
      } catch (error) {
        throw error
      }
    }

    async getPosts(queries = [Query.equal('status', 'active')]){
      try {
       return await this.databases.listDocuments(
          appwriteConf.appwriteDatabaseId,
          appwriteConf.appwriteCollectionId,
          queries
        )
      } catch (error) {
        throw error
      }
    }

    async getPost(postId){
      try {
        return await this.databases.getDocument(
          appwriteConf.appwriteDatabaseId,
          appwriteConf.appwriteCollectionId,
          postId
          )
      } catch (error) {
        throw error
      }
    }

    async uploadImageFile(file){
      try {
        return await this.storage.createFile(
          appwriteConf.appwriteBucketId,
          ID.unique(),
          file,
          )
      } catch (error) {
        throw error
      
      }
    }
   

    async deleteImageFile(fileId){
      try {
        return await this.storage.deleteFile(appwriteConf.appwriteBucketId,
          fileId
          )
      } catch (error) {
        throw error
      }
    }

    getImagePreview(fileId){
      return this.storage.getFilePreview(
        appwriteConf.appwriteBucketId,
        fileId
    ).href
    }
  }

const features = new Features()

export default features;