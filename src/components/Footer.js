import { Link } from "react-router-dom";
import { FOOTER_NAV, INFO } from "../data/common";

const Footer = () => {
    console.log(FOOTER_NAV)
    return (
        <footer className="Footer">
            <div className="inner">
                <ul className="FooterTop">
                    {

                        FOOTER_NAV.map((it, idx) => {
                            return (
                                <li key={it.id} className={`itm0${idx + 1}`}>
                                    <Link to={'/'}>{it.title}</Link>
                                </li>
                            )
                        })

                    }
                </ul>
                <div className="FooterBottom">
                    <p>{INFO.company}asd</p>
                    <span>tel : {INFO.tel}</span>
                    <address>주소 : {INFO.address}</address>
                    <em>&copy; {INFO.copy}</em>
                </div>
            </div>
        </footer>
    )
}

export default Footer;