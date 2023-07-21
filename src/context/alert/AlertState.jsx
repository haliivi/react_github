import { HIDE_ALERT, SHOW_ALERT } from '../types';
import { AlertReducer } from './alertReducer';
import { AlertContext } from './alertContext';
import { useReducer } from 'react';

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(AlertReducer, null)
    const hide = () => dispatch({type: HIDE_ALERT})
    const show = (text, type='secondary') => {
        dispatch({
            type: SHOW_ALERT,
            payload: {type, text}
        })
    }

    return (
        <AlertContext.Provider value={{hide, show, alert: state}}>
            {children}
        </AlertContext.Provider>
    )
}