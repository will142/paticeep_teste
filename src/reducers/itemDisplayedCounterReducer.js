const itemDisplayed = (state = 4, actions) => {
    switch(actions.type){
        case 'SETITEM':
            return state = actions.payload;
        default: 
            return state;
    }
}

export default itemDisplayed;