const API_KEY = '21858854-4e72a628a4c4c72c060e1a9f9';

const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}`;
const PER_PAGE = 12;

export default class PicturesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  
  async fetchArticles() {
    const options = {
    Authorization: API_KEY,
  };
  
    const response = await fetch(`${BASE_URL}&q=${this.searchQuery}&image_type=photo&per_page=${PER_PAGE}&page=${this.page}`, options);
    const newImage = await response.json();
    // const galerryCard = await newImage(data) => {
    //   this.page += 1;
    //   return data.hits;
  //  }
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQery) {
    this.searchQuery = newQery;
  }
}
