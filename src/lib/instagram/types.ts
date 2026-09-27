export type InstagramMediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

/** Item cru retornado por GET /me/media. */
export type InstagramMedia = {
  id: string;
  caption?: string;
  media_type: InstagramMediaType;
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

export type InstagramMediaResponse = {
  data: InstagramMedia[];
};

/** Perfil retornado por GET /me. */
export type InstagramProfile = {
  username: string;
  followersCount: number;
  mediaCount: number;
  profilePictureUrl?: string;
};

/** Post já normalizado para uso na UI. */
export type InstagramPost = {
  id: string;
  imageUrl: string;
  permalink: string;
  caption: string;
  isVideo: boolean;
  timestamp: string;
};
