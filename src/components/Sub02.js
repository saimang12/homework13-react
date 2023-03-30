import { useRef, useState } from "react";
import SubSlide from "react-slick";
import "slick-carousel/slick/slick.css";

const Sub02 = ({ Sub02Slide }) => {
    const [on, setOn] = useState(0);

    const changeHandle = (next) => {
        setOn(next);
    };

    const s = useRef(null)
    const SubSlideOption = {
        arrows: false,
        fade: true,
        afterChange: changeHandle,
    }
    return (
        <section className="sub02">
            <div className="inner">
                <div className="top_bg">
                    <span>사업분야</span>
                </div>
                <div className="tit">
                    <h2>조선해양</h2>
                    <strong>세계적인 기술을 자랑하는 글로벌 리더, HD현대중공업의 사업분야를 한 눈에 보실 수 있습니다.</strong>
                </div>
                <div className="sub_tit">
                    <h3>세계 1위의 역량으로 고객과 성공적인 내일을 함께합니다.</h3>
                    <p>세계 최고의 조선소에서 일반 상선부터 특수 선종까지 다양한 선박을 최고의 품질로 건조합니다. 2012년 ‘세계 최초 선박 건조량 1억 GT 달성’, 2015년 '세계 최초 선박 2000척 건조'는 세계 1위 HD현대중공업 조선 부문만이 할 수 있는 대역사였습니다. 앞으로도 혁신적인 기술력과 최첨단 시스템을 바탕으로 고객과 함께 성공적인 내일을 열어 가겠습니다.</p>
                </div>
                <div className="SubSlideWrap">
                    <div className="slideWrap">
                        <SubSlide className="subSlide" {...SubSlideOption} ref={s}>
                            {
                                Sub02Slide.map((it, idx) => {
                                    return (
                                        <div key={it.id} className={`itm itm${it.id}`}>
                                            <figure>
                                                <img src={process.env.PUBLIC_URL + `${it.src}`} alt={it.alt} />
                                            </figure>
                                            <span>{it.alt}</span>
                                        </div>
                                    )
                                })
                            }
                        </SubSlide>
                        <div className="arrows">
                            <i className="xi-angle-left left" onClick={() => { s.current.slickPrev() }}></i>
                            <i className="xi-angle-right right" onClick={() => { s.current.slickNext() }}></i>
                        </div>
                    </div>
                    <ul className="dots">
                        {
                            Sub02Slide.map((it, idx) => {
                                return (
                                    <li key={it.id} className={idx === on ? 'on' : ''}>
                                        <button onClick={() => { s.current.slickGoTo(idx) }}>{it.id}</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>


                <div className="desc">
                    <p>명실공히 조선한국을 대표하는 HD현대중공업 조선해양사업부는 지난 83년 선박수주 및 건조량 부문에서 세계 1위로 선정된 이후 현재까지 세계 정상의 자리를 지켜온 HD현대중공업의 얼굴이자 핵심 사업부입니다.</p>
                    <p>지난 72년 3월, 황무지나 다름없었던 울산 미포만에 조선소 건설을 위한 첫 발을 내딛은 HD현대중공업은, 2년 3개월이라는 최단기간 내에 세계 최대 규모의 조선소를 완공하는 초유의 기록을 세우는 동시에 그리스 LIVANOS社의 26만톤급 초대형 유조선(VLCC)을 성공적으로 건조하여, 세계 조선 역사상 최초로 조선소 준공과 함께 선박건조를 완료하는 현대신화를 창조한 세계 조선산업의 산증인이기도 합니다.</p>
                    <p>조선해양사업부는 10개의 대형건조도크와 9개의 초대형 골리아스 크레인을 비롯한 최신 생산설비, 우수한 인적 자원 및 뛰어난 기술력을 바탕으로, 드릴쉽, LNG선, LPG선등 해양개발 관련 선박 및 가스선은 물론 유조선, 컨테이너선, 살물선, 자동차운반선, 여객·화물겸용선(ROPAX) 등 일반상선과 이지스 구축함, 잠수함 등 최신예 함정에 이르기까지 연간 70여척 내외의 다양한 선박을 품질로 건조, 적기에 고객에게 공급하며, 세계속의 조선 한국을 선도하고 있습니다.</p>
                    <p>2022년 현재까지 52개국 324개 선주사에 2,300여척의 선박을 성공적으로 인도한 조선해양사업부는, 2012년 세계 최초로 “선박 건조량 1억 GT”를 달성하였고, “2015년 세계 최초 선박 2000척 건조”라는 신기록을 달성하여 세계 역사상 최단기간내 최대 건조실적이라는 대기록을 수립했습니다</p>
                    <p>그동안 세계 해운ㆍ조선시장에서 쌓아온 명성을 바탕으로 향후에도 지속적인 원가절감 및 기술 혁신을 통해 경쟁력을 더욱 강화시켜 나가겠습니다. 아울러 친환경ㆍ에너지고효율 선박 및 해양 특수선종 등에 대한 시장의 수요와 고객의 다양한 요구에 보다 능동적이고 효율적으로 대처함으로써 세계 1등 조선소로서의 위상을 더욱 공고히 해 나갈 것입니다.</p>
                </div>
            </div>
        </section>
    )
}

export default Sub02; 