import MainContent from "./MainContent";
import MainVisual from "./MainVisual";

const Main = ({ Mainslide, MAIN_CONTENT }) => {
    return (
        <main>
            <MainVisual Mainslide={Mainslide} />
            <MainContent MAIN_CONTENT={MAIN_CONTENT} />
        </main>
    )
}

export default Main;