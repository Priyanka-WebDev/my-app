import Footer from './Footer';
function About(){
    return(
        <>
        <div className="about-content">
        
        <img src="../assets/img/about.webp" alt="" />
        <div className="about-heading">
        <h1>Who We Are</h1>
        <p>
        Welcome to Tul – your premier destination for writing and note-taking products designed to enhance your creativity and productivity. At Tul, we understand the importance of quality tools in expressing ideas and organizing thoughts. Our range of meticulously crafted pens, notebooks, and accessories are meticulously designed to inspire innovation and elevate your writing experience. Whether you’re a seasoned professional or a budding artist, Tul empowers you to capture every idea with precision and style. Join us on a journey of creativity, innovation, and excellence with Tul – where every stroke tells a story.
</p>
        </div>
        </div>
        <div className="about-content-two">
            <h1>Elevate Your Writing Experience with NoteBook!</h1>
            <h2>Title for This Block</h2>
            <div className="about-half">
            <p>Description for this block. Use this space for describing your block. <br></br> Any text will do. Description for this block. You can use this <br></br> space for describing your block.</p>
            <button className="btn-one">Button</button>
            </div>
            
            <p>Discover the art of expressive writing and efficient note-taking with Tul’s exceptional range of writing and note-taking products.</p>
            <button className="btn-two">Expolre</button>
        </div>
        <div className="mission">
            <div>
            <h1>Our Mission</h1>
                <p>At Tul, our mission is to empower individuals to unleash their creativity and unlock their potential through exceptional writing and note-taking products. We strive to inspire and enable our customers to capture their thoughts, ideas, and dreams with precision and style.</p>
            </div>
            <div>
                <img src="./assets/img/mission.webp" alt="" />
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}
export default About;