const initState = {}  

const user = (state = initState, action) => {
    switch(action.type) {
        case "INIT":
            return {
                avatar: '/assets/img/theme/light/team-1-800x800.jpg',
                name: 'Nhan Nguyen',
                wallet: 100,
                facebook_profile: "https://www.facebook.com/nyan.ntn/"
            };
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