import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = ({ NAV }) => {
    return (
        <div className="Wrap">
            <Header NAV={NAV} />
            <Outlet />
            <Footer />
        </div>

    )
}

export default Layout;