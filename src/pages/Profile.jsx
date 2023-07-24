import { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GithubContext } from '../context/github/githubContext'
import { Repos } from '../components/Repos';

export const Profile = (props) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
    const {name: url_name} = useParams()
    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        public_repos,
        public_gists,
        following,
    } = user

    useEffect(() => {
        getUser(url_name)
        getRepos(url_name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <p className="text-center">Загрузка...</p>
    }

    return (
        <>
            <Link to="/" className="btn btn-link">На главную</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img
                                src={avatar_url}
                                alt={name}
                                style={{width: 150}}
                            />
                            <h1>{name}</h1>
                            {location && <p>Местоположение: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio &&
                                <>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </>
                            }
                            <a
                                href={html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-dark"
                            >
                                Открыть профиль
                            </a>
                            <ul>
                                {
                                    login &&
                                    <li>
                                        <strong>Username: </strong> {login}
                                    </li>
                                }
                                {
                                    company &&
                                    <li>
                                        <strong>Компания: </strong> {company}
                                    </li>
                                }
                                {
                                    blog &&
                                    <li>
                                        <strong>Website: </strong> {blog}
                                    </li>
                                }
                            </ul>
                            <div className="badge bg-primary">Подписчики: {followers}</div>
                            <div className="badge bg-success">Подписан: {following}</div>
                            <div className="badge bg-info">Репозитории: {public_repos}</div>
                            <div className="badge bg-dark">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos} />
        </>
    )
}