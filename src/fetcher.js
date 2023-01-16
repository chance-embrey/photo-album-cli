/**
 *
 * @param {String} url The url to fetch data from
 * @returns {Object} The data from the url
 */
const fetcher = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetcher;
