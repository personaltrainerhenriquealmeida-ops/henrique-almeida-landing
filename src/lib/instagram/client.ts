import type {
  InstagramMedia,
  InstagramMediaResponse,
  InstagramPost,
  InstagramProfile,
} from "./types";

const API_URL = "https://graph.instagram.com";
const FIELDS =
  "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";

export const INSTAGRAM_CACHE_TAG = "instagram";
export const INSTAGRAM_REVALIDATE_SECONDS = 3600;

function toPost(media: InstagramMedia): InstagramPost | null {
  const isVideo = media.media_type === "VIDEO";
  // Vídeos/Reels não têm imagem em media_url; a capa vem em thumbnail_url.
  const imageUrl = isVideo ? media.thumbnail_url : media.media_url;
  if (!imageUrl) return null;

  return {
    id: media.id,
    imageUrl,
    permalink: media.permalink,
    caption: media.caption ?? "",
    isVideo,
    timestamp: media.timestamp,
  };
}

/**
 * Últimos posts da conta conectada. Só roda no servidor: o token nunca chega
 * ao navegador. Sem token ou com erro da API devolve lista vazia, para o feed
 * não derrubar a página.
 */
export async function getLatestPosts(limit = 8): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  const url = new URL(`${API_URL}/me/media`);
  url.searchParams.set("fields", FIELDS);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("access_token", token);

  try {
    const res = await fetch(url, {
      next: {
        revalidate: INSTAGRAM_REVALIDATE_SECONDS,
        tags: [INSTAGRAM_CACHE_TAG],
      },
    });
    if (!res.ok) {
      // Não logar a URL: ela carrega o token.
      console.error(`Instagram API respondeu ${res.status}`);
      return [];
    }
    const { data }: InstagramMediaResponse = await res.json();
    return data.map(toPost).filter((post): post is InstagramPost => !!post);
  } catch (error) {
    console.error("Falha ao consultar a Instagram API", error);
    return [];
  }
}

/**
 * Seguidores, número de posts e foto do perfil. Mesmas regras de
 * getLatestPosts: só no servidor e nunca derruba a página (devolve null).
 */
export async function getProfile(): Promise<InstagramProfile | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return null;

  const url = new URL(`${API_URL}/me`);
  url.searchParams.set(
    "fields",
    "username,followers_count,media_count,profile_picture_url",
  );
  url.searchParams.set("access_token", token);

  try {
    const res = await fetch(url, {
      next: {
        revalidate: INSTAGRAM_REVALIDATE_SECONDS,
        tags: [INSTAGRAM_CACHE_TAG],
      },
    });
    if (!res.ok) {
      console.error(`Instagram API (perfil) respondeu ${res.status}`);
      return null;
    }
    const data = await res.json();
    return {
      username: data.username,
      followersCount: data.followers_count ?? 0,
      mediaCount: data.media_count ?? 0,
      profilePictureUrl: data.profile_picture_url,
    };
  } catch (error) {
    console.error("Falha ao consultar o perfil do Instagram", error);
    return null;
  }
}
