import fetchAlbumPhotos from "./fetch-album-photos.js";
import fetcher from "./fetcher.js";

async function main() {
  // `process.argv` is an array of arguments passed to the script, the first two are the node and the script path, so we grab the third one which is the album id
  const albumId = process.argv[2];
  const album = await fetchAlbumPhotos(albumId, fetcher);
  printPhotos(album);
}

function printPhotos(album) {
  album.forEach((photo) => {
    console.log(`[${photo.id}] ${photo.title}`);
  });
}

export { main, printPhotos };
