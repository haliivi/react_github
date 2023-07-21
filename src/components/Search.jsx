import { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';


export const Search = () => {
    const {show} = useContext(AlertContext)
    const onSubmit = e => {
        if (e.key === 'Enter') {
            show('This is alert!')
        }
    }

    return (
        <div className="form-group mb-4">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя..."
                onKeyPress={onSubmit}
            />
        </div>
    )
}