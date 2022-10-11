export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_SNACK = 'SHOW_SNACK';
export const HIDE_SNACK = 'HIDE_SNACK';
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

const initialState = {
    modalOpen: false,
    modalContent: null,
    modalTitle: null,
    modalRequired: false,
    snackOpen: false,
    snackTitle: null,
    snackType: null,
    drawerOpen:false
}


export function modalReducer(state = initialState, action) {
    switch (action.type) {

        case SHOW_MODAL:
            return { ...state, modalOpen: true, ...action.payload }

        case HIDE_MODAL:
            return { ...state, ...initialState }

        case SHOW_SNACK:
            return { ...state, snackOpen: true, snackTitle: action.payload.title, snackType: action.payload.type }

        case TOGGLE_DRAWER:
            return { ...state, drawerOpen: action.payload }
            
        default: return state;
    }
}
