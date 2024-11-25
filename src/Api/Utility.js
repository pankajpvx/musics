export const getBaseUrl = () => {
  return "https://jiosaavan-api-2-harsh-patel.vercel.app/api";
};

export const getSongs = async ({
  query = "latest english",
  page = 1,
  limit = 40,
}) => {
  const params = new URLSearchParams({
    query,
    page,
    limit,
  });
  const url = getBaseUrl() + `/search/songs?${params}`;
  try {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    if (data.success) {
      const results = data.data.results.map((result) => ({
        id: result.id,
        name: result.name,
        type: result.type,
        duration: result.duration,
        year: result.year,
        releaseDate: result.releaseDate,
        language: result.language,
        url: result.url,
        label: result.label,
        trackUrls: result.downloadUrl,
        hasLyrics: result.hasLyrics,
        album: result.album,
        artist: {
          ...result.artists.primary[0],
        },
        image: result.image,
      }));

      return {
        results,
        paginate: results.length < 20 ? false : true,
      };
    }

    throw new Error("error");
  } catch (err) {
    return { results: [], paginate: false };
  }
};
