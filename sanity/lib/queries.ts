import {defineQuery} from "groq";

export const STARTUP_QUERY= defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt, desc) {
  _id,
  _createdAt,
  pitch,
  category,
  title,
  slug,
  views,
  image,
  description,
  author -> {
    _id,
    name,
    image,
    bio
  }
}`);