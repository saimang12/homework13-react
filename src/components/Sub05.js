import { useState } from "react";

const Sub05 = ({ Sub05Reports }) => {
    const [on, setOn] = useState(true);
    return (
        <section className="sub05">
            <div className="inner">
                <div className="top_bg">
                    <span>통합보고서</span>
                </div>
                <div className="tit">
                    <h2>통합보고서</h2>
                    <strong>HD현대중공업의 경제적, 환경적, 사회적 책임에 대한 원칙, 활동, 성과를 종합적으로 담고 있습니다.</strong>
                </div>
                <div className="report">
                    <div className="report_img">
                        <a href="https://www.hhi.co.kr/filedown/2022_KSOE_IR_KR_1.pdf" target={`_blank`}>
                            <img src={process.env.PUBLIC_URL + `/img/main_report_2022.jpg`} alt="2022년 통합보고서" />
                        </a>

                    </div>
                    <div className="desc">
                        <h3>통합 보고서</h3>
                        <p>HD현대중공업이 발간하는 지속가능경영보고서로 HD현대중공업의 경제적, 환경적, 사회적 책임에 대한 원칙, 활동, 성과를 종합적으로 담고 있습니다. 통합보고(Integrated_Reporting) 프레임워크를 도입하여 HD현대중공업의 경영전략과 사업운영 방향 등 경영전반에 관한 내용을 강화하여 수록하고 있습니다.</p>
                        <p>[2021] 통합보고서 - 2022년 발간</p>
                        <span>
                            <a href="#!" onClick={() => { setOn(!on) }}>모두 보기</a>
                        </span>
                    </div>
                </div>
                <div className={`report_list ${on ? 'on' : ''}`}>
                    <ul className="report_itm">
                        {
                            Sub05Reports.map((it, idx) => {
                                return (
                                    <li key={it.id}>
                                        <a href={it.link} target={`_blank`}>
                                            <figure>
                                                <img src={process.env.PUBLIC_URL + `${it.src}`} alt={it.title} />
                                            </figure>
                                            <p>{it.title}</p>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Sub05; 