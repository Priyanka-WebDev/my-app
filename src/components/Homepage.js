import Footer from "./Footer";
import SecondPart from "./SecondPart";
function Homepage() {
    return (
        <>
            <div className="container">
                <div className="content">
                    <h1>Best Ideas Start On Paper</h1>
                    <p>Revolutionary notebook with eco-friendly paper, advanced surface technology and digital sharing integration</p>
                    <button className="btn"> Order Now</button>
                </div>
            </div>
            <SecondPart></SecondPart>
            <Footer></Footer>
        </>
    )
}
export default Homepage;