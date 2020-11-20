export const updateRequestList = (payload) => {
    return {
        type: "UDPATE_REQUEST_LIST",
        payload: payload
    }
}

export const removeRequest = (payload) => {
    return {
        type: "REMOVE_REQUEST",
        payload: payload
    }
}

export const addRequest = (payload) => {
    return {
        type: "ADD_REQUEST",
        payload: payload
    }
}

export default updateRequestList;