
import { NAV, Mainslide, MAIN_CONTENT, FOOTER_NAV, INFO, Sub02Slide, Sub04Solution, Sub05Reports } from "./data/common";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./components/Main";
import Sub01 from "./components/Sub01";
import Sub02 from "./components/Sub02";
import Sub03 from "./components/Sub03";
import Sub04 from "./components/Sub04";
import Sub05 from "./components/Sub05";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout NAV={NAV} FOOTER_NAV={FOOTER_NAV} INFO={INFO} />}>
        <Route path="/" element={<Main Mainslide={Mainslide} MAIN_CONTENT={MAIN_CONTENT} />} />
        <Route path="/sub01" element={<Sub01 />} />
        <Route path="/sub02" element={<Sub02 Sub02Slide={Sub02Slide} />} />
        <Route path="/sub03" element={<Sub03 />} />
        <Route path="/sub04" element={<Sub04 Sub04Solution={Sub04Solution} />} />
        <Route path="/sub05" element={<Sub05 Sub05Reports={Sub05Reports} />} />
      </Route>
    </Routes >
  );
}

export default App;
