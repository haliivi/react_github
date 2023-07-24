import { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContext';


export const Search = () => {
    const [val, setVal] = useState('')
    const {show, hide} = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = e => {
        if (e.key !== 'Enter') {
            return
        }
        github.clearUsers()
        if (val.trim()) {
            hide()
            github.search(val.trim())
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