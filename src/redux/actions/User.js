export const initAction = () => {
    return {
      type: "INIT"
    }
}

export const updateProfile = (payload) => {
    console.log(payload);
    return {
        type: "UDPATE_PROFILE",
        payload: payload
    }
}

export const increaseWallet = (payload) => {
    return {
        type: "INCREASE_WALLET",
        payload: payload
    }
}

export default initAction;