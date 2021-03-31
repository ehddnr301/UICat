const API_ENDPOINT = "https://api.thecatapi.com/v1";

const request = async (url) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      throw errorData;
    }
  } catch (e) {
    console.error(e);
  }
};

export const api = {
  fetchCats: async (keyword) => {
    try {
      const breeds = await request(
        `${API_ENDPOINT}/breeds/search?q=${keyword}`
      );
      const requests = breeds.map((breed) => {
        return request(
          `${API_ENDPOINT}/images/search?limit=5&breed_ids=${breed.id}`
        );
      });
      const responses = await Promise.all(requests);
      // const results = responses.map((response) => response);
      const result = Array.prototype.concat.apply([], responses);
      return {
        isError: false,
        data: result,
      };
    } catch (e) {
      return {
        isError: true,
        data: e,
      };
    }
  },
};
