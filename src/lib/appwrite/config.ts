import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: "6683312a0031b8c4da98",
  storageId: "66832f5400243cd3a54f",
  userCollectionId: "6683313e0018d8640d8d",
  postCollectionId: "66833171000fdd62d3f0",
  savesCollectionId: "668331500036ed6822f4",
};

export const client = new Client();

// client.setEndpoint(appwriteConfig.url);
client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject("66832bb6002f40baa314");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
