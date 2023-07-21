import { Card } from "../components/Card"
import { Search } from "../components/Search"

export const Home = () => {
    const cards = new Array(15).fill('').map((_, i) => i)

    return (
        <>
            <Search />
            <div className="row">
                {cards.map((_, i) => (
                    <div className="col-sm-4 mb-4" key={i}>
                        <Card />
                    </div>
                ))}
            </div>
        </>
    )
}