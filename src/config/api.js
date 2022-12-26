const api = `https://api.themoviedb.org/3/movie/`;
const apikey = "c45a857c193f6302f2b5061c3b85e743";
const imgpath = "https://image.tmdb.org/t/p/w500";
const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&`;
const perPage = 20;
module.exports = {
    apikey,
    api,
    imgpath,
    searchApi,
    perPage
}