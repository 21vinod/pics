import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID m_Wyb6DQ1DYPAGyn58GeNc-r4C4vkhefrH3bGx9h2_4',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
