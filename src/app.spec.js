import { jest } from "@jest/globals";

import fetchAlbumPhotos from "./fetch-album-photos";
import { printPhotos } from "./app";
import mockAlbumData from "./mockData.json";

const mockFetcher = async (url) => {
  return new Promise((resolve) => {
    const albumID = parseInt(url.split("=")[1]);
    const albums = mockAlbumData.filter((photo) => photo.albumId === albumID);
    resolve(albums);
  });
};

test("fetchAlbumPhotos returns all 50 photos with the album ID of 1", async () => {
  return fetchAlbumPhotos(1, mockFetcher).then((photos) => {
    expect(photos).toHaveLength(50);
  });
});

test("printPhotos prints the correct output", () => {
  const albumOneSample = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
  ];

  // Mock console.log with a jest spy so that we can capture its output
  const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  printPhotos(albumOneSample);

  expect(consoleLogSpy).toHaveBeenCalledWith(
    "[1] accusamus beatae ad facilis cum similique qui sunt"
  );
  expect(consoleLogSpy).toHaveBeenCalledWith(
    "[2] reprehenderit est deserunt velit ipsam"
  );

  // Restore console.log to its original implementation
  consoleLogSpy.mockRestore();
});
