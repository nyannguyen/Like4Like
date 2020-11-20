const initState = {
    avatar: '/static/images/avatars/avatar_6.png',
    name: 'Nhan Nguyen',
    wallet: 100,
    facebook_profile: "https://www.facebook.com/nyan.ntn/"
}  

const user = (state = initState, action) => {
    switch(action.type) {
        case "INIT":
            return initState;
        case "INCREASE_WALLET":
            return {
              ...state,
              wallet: state.wallet+action.payload
            };
        case "UDPATE_PROFILE":
            return {
              ...action.payload
            };
        default: 
            return state;
    }
}

export default user