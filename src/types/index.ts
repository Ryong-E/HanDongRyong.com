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
