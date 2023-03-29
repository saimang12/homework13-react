import { Link } from "react-router-dom";

const Sub03 = () => {
    return (
        <section className="sub03">
            <div className="inner">
                <div className="tit">
                    <h2>브로슈어</h2>
                    <strong>HD현대중공업이 이룩한 세계 제일의 역사와 다양한 정보를 소개합니다.</strong>
                    <span>고객을 위한 토탈 솔루션으로 더 좋은 내일을 열어갑니다.</span>
                    <p>HD현대중공업은 세계 정상의 조선사업을 비롯한 각 사업들은 각각의 사업영역에서 고유한 위치를 차지하고 지속적 성장으로 글로벌 역량을 발휘하고 있으며,
                        최적의 솔루션을 갖춤으로써 모두가 행복한 더 좋은 미래를 열어 가기 위해 오늘도 노력하고 있습니다.</p>
                </div>
                <div className="brochure">

                    <figure>
                        <img src={process.env.PUBLIC_URL + `/img/brochure_01.png`} alt="브로슈어" />
                    </figure>

                    <div className="down">
                        <a href="#!">다운로드</a>
                    </div>


                </div>
                <span>
                    <img src={process.env.PUBLIC_URL + `/img/icn_pdf.gif`} alt="adobe" />브로슈어는 Adobe Reader의 설치가 필요합니다.
                </span>
            </div>
        </section >
    )
}

export default Sub03; 