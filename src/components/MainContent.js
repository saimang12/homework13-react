const MainContent = ({ MAIN_CONTENT }) => {
    return (
        <section className="mainContent">
            <div className="inner">
                <div className="tit">
                    <h2>더 나은 세상을 위한 항해</h2>
                    <p>사람을 먼저 생각하는 마음가짐은 더 나은 내일을 향한 우리의 약속입니다<br />
                        지속가능한 미래를 향한 가치창조, 그 중심에는 사람이 있습니다. </p>
                </div>
                <ul>
                    {
                        MAIN_CONTENT.map((it, idx) => {
                            return (
                                <li key={it.id}>
                                    <img src={process.env.PUBLIC_URL + it.src} alt="" />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default MainContent;