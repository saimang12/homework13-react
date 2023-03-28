import MainContent from "./MainContent";
import MainVisual from "./MainVisual";

const Main = ({ slide }) => {
    return (
        <main>
            <MainVisual slide={slide} />
            <MainContent />
        </main>
    )
}

export default Main;