import React, { useState } from "react";

function LikeButton(){
    
    const [liked, setIsliked] = useState(false);
    const handleClick = () => {
        setIsliked(!liked)
    };
    
      const label = liked ? 'Unlike' : 'Like';
      return (
        <div className="customContainer">
          <button className="btn btn-primary" onClick={handleClick}>
            {label}</button>  
        </div>
      );
}

  export default LikeButton;