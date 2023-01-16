import fetchAlbumPhotos from "./fetch-album-photos.js";
import fetcher from "./fetcher.js";

/**
 * The main function of the script, it fetches the photos of an album and prints them to the console
 */
async function main() {
  try {
    const albumId = process.argv[2];
    const album = await fetchAlbumPhotos(albumId, fetcher);
    printPhotos(album);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Prints the photos of an album to the console
 *
 * @param {Array<{albumId: Number, id: Number, title: String, url: String, thumbnailUrl: String}>} album The album of photos to print
 */
function printPhotos(album) {
  album.forEach((photo) => {
    console.log(`[${photo.id}] ${photo.title}`);
  });
}

export { main, printPhotos };
