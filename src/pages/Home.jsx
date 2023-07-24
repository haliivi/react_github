import { useContext } from 'react';
import { Card } from '../components/Card';
import { Search } from '../components/Search';
import { GithubContext } from '../context/github/githubContext';

export const Home = () => {
    const {loading, users} = useContext(GithubContext)
    const cards = new Array(15).fill('').map((_, i) => i)

    return (
        <>
            <Search />
            <div className="row">
                {
                    loading ?
                    <p className="text-center">Загрузка...</p> :
                    users.map(user => (
                        <div className="col-sm-4 mb-4" key={user.id}>
                            <Card user={user} />
                        </div>
                    ))
                }

            </div>
        </>
    )
}