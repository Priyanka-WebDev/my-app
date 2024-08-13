import Card from "./Card";
function Service(){
return (
    <>
    <div  className="service-container-one">
    <h3 style={{margin:"2rem", color: "slategray",textalign: "center"}}>OurServices</h3>
        <h1 style={{margin:"2rem", color: "slategray",textalign: "center"}}>We Provide A Lot of Cool Services</h1>
        <p style={{margin:"2rem", color: "slategray",textalign: "center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad eum, eveniet quibusdam odio eligendi fuga asperiores animi voluptatum, voluptatibus impedit, cupiditate minus rem cum vero eos sapiente. Quidem dolorum animi facere dignissimos qui delectus sit sint earum eum ducimus?</p>
    </div>
    {/* <h2>Service</h2> */}
    <div className="service-container">
    <Card imgsrc="./assets/img/seo.jpeg" title="SEO" para="we provide seo services Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iusto?"></Card>
    <Card imgsrc="./assets/img/creative.jpeg" title="Creative" para="we provide creativr services Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iusto?"></Card>
    <Card imgsrc="./assets/img/marketing.jpeg" title="Marketing" para="we provide marketing services Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iusto?"></Card>
    <Card imgsrc="./assets/img/optimization.jpeg" title="Optimization" para="we provide optimization services Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iusto?"></Card>
    <Card imgsrc="./assets/img/stratagy.jpeg" title="BUsiness Strategy" para="we provide statagy services Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iusto?"></Card>
    <Card imgsrc="./assets/img/uiux.jpeg" title="UIUX" para="we provide UIUX services Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iusto?"></Card>
    </div>
    

            <div className="footer-two-one">
            <p>2024@ All Rights Reserved</p>
            </div>
    </>
)
}
export default Service;