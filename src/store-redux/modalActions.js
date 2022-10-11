import { HIDE_MODAL, SHOW_MODAL, TOGGLE_DRAWER } from "./modalReducer"

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

export const toggleDrawer = (state) => dispatch => {
    dispatch({
        type: TOGGLE_DRAWER,
        payload:state
    })
}