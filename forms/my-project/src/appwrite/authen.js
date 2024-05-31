import appwriteConf from "../appwriteConf/appwriteConf";
import { Client, Account, ID } from "appwrite";

export class AuthenServices {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(appwriteConf.appwriteUrl)
      .setProject(appwriteConf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name}) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentAccount() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authentications = new AuthenServices();

export default authentications;
