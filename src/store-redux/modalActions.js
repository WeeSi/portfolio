import { HIDE_MODAL, SHOW_MODAL } from "./modalReducer"

export const openModal = (modalContent) => dispatch => {
    dispatch({
        type: SHOW_MODAL,
        payload: modalContent
    })
}

export const hideModal = () => dispatch => {
    dispatch({
        type: HIDE_MODAL
    })
}