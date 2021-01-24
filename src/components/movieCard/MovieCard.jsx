import React, { useState } from "react";
import "./MovieCard.css";
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, deleteMovieIni, setCategory } from '../../actions/';
import PropTypes from "prop-types";
import LikeButton from "../LikeButton/LikeButton";
import LikeBar from "../LikeBar/LikeBar"



function MovieCard({ id, title, category, likes, dislikes }) {

  let todos = useSelector(state => state.filteredMoviesList);
  let categories = [];

  const [likePourcentage] = useState((likes * 100) / (likes+dislikes));
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(deleteMovie(id));
    dispatch(deleteMovieIni(id));
    categories = [];
      for(let i = 0; i< todos.length; i++) {
          categories.push(todos[i].category)
      }
      let categories2 = Array.from(new Set(categories));
      dispatch(setCategory(categories2));
  }

  return (
    <div className="card-global-container">
      <div className="card-container">
        <h1 className="card-title">{title}</h1>
        <p>genre : {category}</p>
        <LikeBar key={id} bgcolor="green" completed={likePourcentage}/>
        <div className="buttonSection">
          <LikeButton className="buttonCard"/>
          <button className="buttonCard" onClick={() => {handleClick(id)}}>delete</button>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
};

export default MovieCard;