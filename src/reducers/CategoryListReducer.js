const categoryList = (state = [], actions) => {
    switch(actions.type){
        case 'SETAS':
          return state = actions.payload;
        case 'DELETECATEGORY':
          return state.filter((item) => item !== actions.payload);
        default: 
          return state;
    }
}

export default categoryList;