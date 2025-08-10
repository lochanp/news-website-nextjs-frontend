// src/lib/types.ts

export interface MediaAsset {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface BlogPostProps {
  id: number;
  documentId: string;
  title: string;
  summary: string;
  content: Array<{
    type: string;
    children: Array<{ text: string }>;
  }>;
  category: string;
  isFeatured: boolean;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: string;
  thumbnail: MediaAsset;
  featuredImage: MediaAsset;
}
