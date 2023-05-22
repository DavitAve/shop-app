import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "cgusrzt9",
  dataset: "production",
  apiVersion: "2023-05-13",
  useCdn: true,
  token:
    "skHgOeJC3xfzDrZgZE6bZGirRvnsJ36wQOc8fXjogsoxh1dtIFX4qZbHmM4bJOpHSaHpJFSKf1K6oTvVAc2tffBLMmpFbm6wZGlakOwt0lzR0H053HM9k7Hg9yF3VBccULLYC720BgRGtxdqGwtsE8gDyQb7IaQBcLYyXlvjUV9m2JWQi3ms",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source).toString();
