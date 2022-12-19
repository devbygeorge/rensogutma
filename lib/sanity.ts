// Import sanity packages
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

// Configure sanity client
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2022-11-16",
  useCdn: process.env.NODE_ENV === "production",
};

// Connect to sanity
export const sanityClient = createClient(config);

// Sanity image url builder
export const urlFor = (source: any) =>
  imageUrlBuilder(sanityClient).image(source);

// Sanity Typings
interface SanityBody {
  _createAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
}

export interface Project extends SanityBody {
  _type: "project";
}

export interface Social extends SanityBody {
  _type: "social";
}
