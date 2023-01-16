import dotenv from "dotenv";

dotenv.config();

/**
 * Fetches a list of photos from the API given an album ID
 * @param {string} id The album id
 * @param {function} fetcher The function that makes the network request
 * @returns {Object} The list of photos with the given album ID
 */
export default async function fetchAlbumPhotos(id, fetcher) {
  try {
    const albums = await fetcher(`${process.env.API_URL}?albumId=${id}`);
    return albums;
  } catch (error) {
    throw error;
  }
}
