import {createClient} from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import dotenv from "dotenv";

dotenv.config();
export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: process.env.SANITY_API_VERSION ,
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}