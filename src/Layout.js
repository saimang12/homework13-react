import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = ({ NAV, FOOTER_NAV, INFO }) => {
    return (
        <div className="Wrap">
            <Header NAV={NAV} />
            <Outlet />
            <Footer FOOTER_NAV={FOOTER_NAV} INFO={INFO} />
        </div>

    )
}

export default Layout;