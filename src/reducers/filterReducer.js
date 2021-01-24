const filter = (state = [], actions) => {
    switch(actions.type){
        case 'SETASFILTER':
          return state = actions.payload;
        case 'DELETEFILTER':
          return state.filter((item) => item !== actions.payload);
        default: 
          return state;
    }
}

export default filter;