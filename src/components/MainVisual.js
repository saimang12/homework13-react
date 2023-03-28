import React, { useRef } from "react";
import MainSlide from "react-slick";
import "slick-carousel/slick/slick.css";

const MainVisual = ({ slide }) => {
    const s = useRef(null)
    console.log(s)
    const mainSlideOption = {
        arrows: false,
    }
    return (
        <section className="mainVisual">
            <MainSlide {...mainSlideOption} ref={s}>
                {
                    slide.map((it, idx) => {
                        return (
                            <div key={it.id} className={`itm itm0${idx + 1}`}>
                                <div className="inner">
                                    <div className={`tit tit0${idx + 1}`}>
                                        <p>{it.title}</p>
                                        <h2>{it.desc}</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </MainSlide>
            <div className="arrows">
                <i className="xi-angle-left left" onClick={() => { s.current.slickPrev() }}></i>
                <i className="xi-angle-right right" onClick={() => { s.current.slickNext() }}></i>
            </div>
        </section>
    )
}

export default MainVisual;