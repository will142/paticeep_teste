import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { goToPage, increment, decrement, setItem, setCategory, setMovies, setFilter, deleteFilter } from '../../actions/';
import "./MoviesList.css";
import MovieCard from "../movieCard/MovieCard"


function MoviesList() {

    let initialMoviesList = useSelector(state => state.movies);
    let todos = useSelector(state => state.filteredMoviesList);
    let categoryList = useSelector(state => state.categoryList);
    let filter = useSelector(state => state.filter);
    let currentPage = useSelector(state => state.currentPage);
    let todosPerPage = useSelector(state => state.itemDisplayed);
    const dispatch = useDispatch();

    useEffect(() => {
      let categories = [];
      for(let i = 0; i< todos.length; i++) {
          categories.push(todos[i].category)
      }
      let categories2 = Array.from(new Set(categories));
      dispatch(setFilter(categories2));
    },[]);

    useEffect(() => {
      let categories = [];
      for(let i = 0; i< initialMoviesList.length; i++) {
          categories.push(initialMoviesList[i].category)
      }
      let categories2 = Array.from(new Set(categories));
      dispatch(setCategory(categories2));
    },[todos]);

    const handleClickCategory = (category) => {
      let categories = filter;
      if (filter.includes(category)) {
        categories = categories.filter((item) => item !== category);
        dispatch(deleteFilter(category));
      } else {
        categories.push(category);
        dispatch(setFilter(categories));
      }
      let filteredMovies = [];
      for(let i = 0; i< initialMoviesList.length; i++) {
        if(categories.includes(initialMoviesList[i].category)) {
          filteredMovies.push(initialMoviesList[i]);
        }
      }
      dispatch(setMovies(filteredMovies));
    };

    const handleClick = (id) => {
        dispatch(goToPage(id));
    }

      // Logic for displaying current todos
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

      const renderTodos = currentTodos.map((todo) => {
        return <MovieCard {...todo}  key={todo.id}/>;
      });

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={() => {handleClick(number)}}
          >
            {number}
          </li>
        );
      });

      const catList = categoryList.map((category) => {
        return (
          <button key={categoryList.indexOf(category)} onClick={() => {handleClickCategory(category)}}>{category}</button>
        )
      })

      return (
        <div className="movieList-container">
          <div className="selector-container">
            <h2>Movie categories:</h2>
            <ul>
              {catList}
            </ul>
            <h2>Movies number by Page:</h2>
            <ul id="page-numbers">
                <li onClick={() => {dispatch(setItem(4))}}>4</li>
                <li onClick={() => {dispatch(setItem(8))}}>8</li>
                <li onClick={() => {dispatch(setItem(12))}}>12</li>
            </ul>
          </div>
          <ul className="movies-container">
            {renderTodos}
          </ul>
          <div className="pageNumber-container">
            <h2>Page</h2>
            <button onClick={() => {dispatch(decrement())}}>PREV</button>
            <ul id="page-numbers">
                {renderPageNumbers}
            </ul>
            <button onClick={() => {dispatch(increment())}}>NEXT</button>
          </div>
        </div>
      );
}

export default MoviesList;