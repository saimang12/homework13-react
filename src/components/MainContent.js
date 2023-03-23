const MainContent = ({ slide, MAIN_CONTENT }) => {
    return (
        <section className="MainContent">
            <div className="inner">
                <div className="title">
                    <h2>{slide[0].title}</h2>
                    <p>{slide[1].desc + slide[0].desc}</p>
                </div>
                <div className="content">
                    {
                        MAIN_CONTENT.map((it) => {
                            return (
                                <figure key={it.id}>
                                    <img src={process.env.PUBLIC_URL + `${it.src}`} alt={it.alt} />
                                </figure>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default MainContent;