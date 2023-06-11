import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface PostFrontMatter {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  tags: readonly (string | null)[];
  thumbnail: IGatsbyImageData;
}
