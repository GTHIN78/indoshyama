export interface Author {
  id: string;
  name: string;
  slug: string;

  avatar: string;
  coverImage?: string;

  role: string;
  bio: string;

  verified: boolean;

  location?: string;

  website?: string;

  social: {
    x?: string;
    linkedin?: string;
    github?: string;
    youtube?: string;
  };

  stats: {
    articles: number;
    views: number;
    followers: number;
  };
}
