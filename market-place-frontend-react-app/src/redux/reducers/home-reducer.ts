
import { LOADING } from '../constants';

const INITIAL_STATE = {
    likedList: [],
    cartList: [],
    loading: false,
    cartSum: 0,
    likedSum: 0,
    isLightTheme: true
}

export const ACTION_HANDLERS: any = {
    [LOADING]: (state: any, action: any) => {
        return { 
            ...state,
            loading: true
        }
      },
}

export default function AppReducer(state: any= INITIAL_STATE, action: any) : any {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}
