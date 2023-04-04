export interface PostCardProps {
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  createdAt: string;
}

export interface ColorType {
  [index: string]: string;
}

export interface SeriesData {
  totalCount: number;
  tag: string;
}

export interface Article {
  description: string | null;
  title: string | null;
  thumbnail: string | null;
  createdAt: string | null;
  slug: string | null;
  tags: readonly (string | null)[] | null;
}
