const initState = [
    {
        id: 107574880320060,
        userId: '100032026445701',
        url: "https://www.facebook.com/nyan.nguyenn/posts/107574880320060",
        value: 5,
        type: "post",
        totalLike: 100,
        buget: 1000
    },
    {
        id: 2834507740117318,
        userId: '1570376873197084',
        url: "https://www.facebook.com/UEVParis/posts/2834507740117318",
        value: 5,
        type: "post",
        totalLike: 20,
        buget: 1500
    },
    {
        id: 1215231695346899,
        userId: '100005802404422',
        url: "  https://www.facebook.com/nyan.ntn/posts/1215231695346899",
        value: 5,
        type: "post",
        totalLike: 600,
        buget: 800
    },
    {
        id: "aevb.fr",
        url: "https://www.facebook.com/aevb.fr",
        value: 8,
        type: "page",
        totalLike: 500,
        buget: 400
    },
]

const request = (state = initState, action) => {
    switch(action.type) {
        case "UDPATE_REQUEST_LIST":
            return [
              ...action.payload
            ];
        case "REMOVE_REQUEST" :
            return [
                ...state.slice(0,action.payload),
                ...state.slice(action.payload+1)
            ];
        case "ADD_REQUEST": 
            return [
                ...state,
                action.payload
            ];
        default: 
            return state;
    }
}

export default request