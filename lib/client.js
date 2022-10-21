import  SanityClient from "@sanity/client";
// import { ImageUrlBuilder } from "next-sanity-image";
import ImageUrlBuilder from "@sanity/image-url";

//get from sanity manage board
export const client = SanityClient({
    projectId: 'xsws5dxi',
    //to know if it's production or development env
    dataset: 'production',
    apiVersion: '2022-10-11',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)