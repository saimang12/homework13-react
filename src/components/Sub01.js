const Sub01 = () => {
    return (
        <section className="sub01">
            <div className="inner">
                <div className="tit">
                    <h2>인사말</h2>
                    <strong>바다의 무한한 잠재력을 실현해 가겠습니다</strong>
                </div>
                <div className="greetings">
                    <figure>
                        <img src={process.env.PUBLIC_URL + `/img/company_info01.jpg`} alt="회사대표" />
                    </figure>
                    <div className="text">
                        <p>안녕하십니까?</p>
                        <p>HD현대중공업 홈페이지를 방문해 주신 여러분 반갑습니다.</p>
                        <p>HD현대중공업은 정주영 창업자님이 1972년 회사를 창립한 이래 불굴의 개척정신과 도전정신으로 조선산업의 불모지였던 우리나라를 세계적인 조선강국으로 이끌었습니다.</p>
                        <p>이제 HD현대중공업은 세계 최고의 조선사로 성장해온 지난 50여년의 역사를 넘어, 인류의 미래를 주도적으로 개척하는 ‘퓨처 빌더(Future Builder)’로 발전하고자 합니다.</p>
                        <p>HD현대중공업은 더욱 안전하고 친환경적인 선박을 만들고, 해상 인프라에서 수집되는 데이터에 인공지능을 결합한 디지털 솔루션을 제공함으로써, 해양 모빌리티 기술을 선도해 나갈 것입니다. 이를 통해 바다가 지닌 무한한 잠재력을 우리 앞의 현실로 만들어가겠습니다.</p>
                        <p>앞으로도 HD현대중공업은 시대를 이끄는 혁신과 끊임없는 도전으로 인류의 미래를 개척하는데 보탬이 될 수 있도록 전 임직원이 함께 최선을 다할 것을 약속드립니다.</p>
                        <p>감사합니다.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sub01; 