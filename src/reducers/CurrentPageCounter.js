const currentPageCounter = (state = 1, actions) => {
    switch(actions.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'DEPLACEMENT':
            state = actions.payload
            return state;
        default: 
            return state;
    }
}

export default currentPageCounter;