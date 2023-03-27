import { Link } from "react-router-dom";

const Header = ({ NAV }) => {
    return (
        <header className="header">
            <h1>
                <Link to={`/`}>
                    <img src={process.env.PUBLIC_URL + `/img/pclogo.png`} alt="로고이미지" />
                </Link>
            </h1>
            <nav className="gnb">
                <ul>
                    {
                        NAV.map((it) => {
                            return (
                                <li key={it.id}>
                                    <Link to={it.link}>{it.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;