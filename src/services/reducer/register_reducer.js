import store from "../store/register_store"

export const Register_reducer = (state = store, action) => {
    let temp = { ...state }
    switch (action.type) {
        case '':
            break;
        default:
            return temp;
    }
    return temp;
}