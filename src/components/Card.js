function Card(props) {
    console.log(props);
    
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="" className=" card-img" />
                    <div className="card-info">
                        <div className="card-title">{props.title}</div>
                        <p className="para">{props.para}</p>
                    </div>
                    <span className="learn-more"><a href="/">learn more</a></span>
                </div>
            </div>
        </>
    )
}
export default Card;