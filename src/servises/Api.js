import axios from 'axios';

const urlApi = 'https://pixabay.com/api/';
const keyApi = '19506242-1f89b350085f2df58b37812a8';

const fetchApi = async (query, page = 1) => {
    return await axios.get(`${urlApi}?q=${query}&page=${page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`)
        .then((response) => response.data.hits);
    
}

export default fetchApi;


  
