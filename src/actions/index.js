export const increment = () => {
    return{
        type: 'INCREMENT',
    };
};

export const decrement = () => {
    return{
        type: 'DECREMENT',
    };
};

export const deleteMovie = (id) => {
    return{
        type: 'DELETEMOVIE',
        payload: id,
    };
};

export const deleteMovieIni = (id) => {
    return{
        type: 'DELETEMOVIEINI',
        payload: id,
    };
};

export const goToPage = (PageNumber) => {
    return{
        type: 'DEPLACEMENT',
        payload: PageNumber,
    };
};

export const setItem = (itemNumber) => {
    return{
        type: 'SETITEM',
        payload: itemNumber,
    };
};

export const setCategory = (categoryList) => {
    return{
        type: 'SETAS',
        payload: categoryList,
    };
};

export const setMovies = (filmList) => {
    return{
        type: 'SETFILTEREDMOVIES',
        payload: filmList,
    };
};

export const deleteCategory = (cat) => {
    return{
        type: 'DELETECATEGORY',
        payload: cat,
    };
};

export const setFilter = (categoryList) => {
    return{
        type: 'SETASFILTER',
        payload: categoryList,
    };
};

export const deleteFilter = (cat) => {
    return{
        type: 'DELETEFILTER',
        payload: cat,
    };
};