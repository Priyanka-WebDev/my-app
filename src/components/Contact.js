function Contact() {
    return (
        <>
            <div className="contact-first">
                <div className="Contact-content">
                    <h2 style={{ fontSize: '2rem', marginBottom: "10px" }}>Contact Us</h2>
                    <p>We are unique not only because of our Product Quality but also for of our Service and Economic Pricing as well as Unique Designs.</p>
                </div>
            </div>
            <div className="contact-details">
                <div className="contact-form">
                    <h1 style={{ paddingLeft: "40px" }}>Contact Us</h1>
                    <p style={{ paddingLeft: "40px", marginTop: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, numquam? Excepturi omnis blanditiis aspernatur, nostrum totam iste ipsam temporibus eius!</p>
                    <div style={{ padding: "40px", marginTop: "10px", display: 'flex', gap: "50%" }}>
                        <p>Phone No:<br></br>1098765432</p>
                        <p>Email:<br></br> notebookxyz@gamil.com</p>
                    </div>
                    <form action="">
                        <h2>Ask a question</h2>
                        <input type="text" name="" id="" placeholder="Full Name" />
                        <input type="email" name="" id="" placeholder="Email Address" />
                        <input type="tel" name="" id="" placeholder="Phone Number" />
                        <input type="num" name="" id="" placeholder="Quantity" />
                        <input type="num" name="" id="" placeholder="Size" />
                        <input type="num" name="" id="" placeholder="Quality" />
                        <input type="num" name="" id="" placeholder="Ruling" />
                        <button>SEND</button>
                    </form>
                </div>

            </div>
            <div className="footer-two-one">
                <p>2024@ All Rights Reserved</p>
            </div>

        </>

    )
}
export default Contact;