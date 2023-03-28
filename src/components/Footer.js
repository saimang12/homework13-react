import { Link } from "react-router-dom";

const Footer = ({ FOOTER_NAV, INFO }) => {
    return (
        <footer className="footer">
            <div className="inner">
                <ul>
                    {
                        FOOTER_NAV.map((it) => {
                            return (
                                <li key={it.id}>
                                    <Link to={`/`}>{it.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="desc">
                    <p>{INFO.company}</p>
                    <em>tel : {INFO.tel}</em>
                    <address>{INFO.address}</address>
                    <span>&copy; {INFO.copy}</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;