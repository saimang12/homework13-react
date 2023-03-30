const Sub04 = ({ Sub04Solution }) => {
    return (
        <section className="sub04">
            <div className="inner">
                <div className="top_bg">
                    <span>지속가능경영</span>
                </div>
                <div className="tit">
                    <h2>개요</h2>
                    <strong>지속적인 성장을 위해 기업의 사회적 책임을 실천 합니다.</strong>
                </div>
                <div className="operation">
                    <ul>
                        {
                            Sub04Solution.map((it, idx) => {
                                return (
                                    <li key={it.id}>
                                        <strong>{it.title}</strong>
                                        <p>{it.desc}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="esg">
                    <div className="esg_img">
                        <figure>
                            <img src={process.env.PUBLIC_URL + `/img/sub04_01.jpg`} alt="" />
                        </figure>
                    </div>
                    <div className="esg_desc">
                        <h3>HD현대 ESG</h3>
                        <p>HD현대 ESG 웹사이트입니다.</p>
                        <p>HD현대는 ESG경영에 대한 요구에 발맞추어</p>
                        <p>“바다에서 시작하는 깨끗한 미래”를 만들어 나가기위해</p>
                        <p>노력하고 있습니다.</p>
                        <span>
                            <a href="#!">바로가기</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sub04; 