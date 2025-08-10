// src/lib/fetchBlog.ts

import 'server-only'; // ensures these functions are only used on server
import { BlogPostProps } from './types';

const API_BASE_URL = process.env.API_BASE_URL; // example: 'https://yourapi.com'
const API_TOKEN = process.env.API_TOKEN; // store in .env.local

const reqOptions = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  },
  next: { revalidate: 60 } // adjust as needed
};

export async function fetchAllBlogs(): Promise<BlogPostProps[]> {
  const res = await fetch(`${API_BASE_URL}/api/blogs?populate=*`, reqOptions);
  if (!res.ok) throw new Error('Failed to fetch blogs');
  const json = await res.json();
  return json.data as BlogPostProps[];
}

export async function fetchBlog(slug: string): Promise<BlogPostProps | null> {
  const res = await fetch(`${API_BASE_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`, reqOptions);
  if (!res.ok) return null;
  const json = await res.json();
  return json.data?.[0] || null;
}
