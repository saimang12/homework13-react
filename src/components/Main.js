import MainContent from "./MainContent";
import MainVisual from "./MainVisual";

const Main = ({ slide, MAIN_CONTENT }) => {
    return (
        <main>
            <MainVisual slide={slide} />
            <MainContent MAIN_CONTENT={MAIN_CONTENT} />
        </main>
    )
}

export default Main;