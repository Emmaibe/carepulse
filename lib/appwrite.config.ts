import * as sdk from 'node-appwrite';

export const {
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    PATIENT_COLLECTION_ID,
    DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6692dfd1002e335f2d2f")
    .setKey("36101dfe9bbe831d48510ccd5ba0aaa4dd324f65f4cd9a04786fb727e696d951cb063d891eec1bbfa3cc526be49dcf08aa3acdbd7bbfe5a5018db3873855b56a0de1feca087e79ebdd1841fea2d7c3524d5805824b88fee44cb5f8d026a6b3f041111735a23374196db4d26d196ef30dcb54471c6bd1863dadfd1eaef8964b37");

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);