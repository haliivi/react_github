import { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';


export const Search = () => {
    const [val, setVal] = useState('')
    const {show} = useContext(AlertContext)
    const onSubmit = e => {
        if (e.key !== 'Enter') {
            return
        }
        if (val.trim()) {
            console.log('Make request with: ', val)
        } else {
            show('Введите данные пользователя!')
        }
    }

    return (
        <div className="form-group mb-4">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя..."
                onKeyPress={onSubmit}
                onChange={e => setVal(e.target.value)}
                value={val}
            />
        </div>
    )
}