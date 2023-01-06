import fetchAlbumPhotos from "./fetch-album-photos";
import mockAlbumData from "./mockData.json" assert { type: "json" };

const mockFetcher = async (url) => {
  return new Promise((resolve) => {
    const albumID = parseInt(url.split("=")[1]);
    const albums = mockAlbumData.filter((photo) => photo.albumId === albumID);
    resolve(albums);
  });
};

it("should return a list of photos given an album ID", async () => {
  return fetchAlbumPhotos(1, mockFetcher).then((photos) => {
    expect(photos).toHaveLength(50);
  });
});
