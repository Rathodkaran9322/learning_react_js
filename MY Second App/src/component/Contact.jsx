

const Contact = () => {
  return (
   <div>
    <section className="bg-subtle-warning" id="home">
      <div className="continer">
        <div className="row">
          <div className="md:col-6 p-6">
            <h1>Get In Touch</h1>
            <form>
                <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                            />
                        </div>
 <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </form>








            

            
            
          </div>
          <div className="md:col-6 p-6">
            <h2>Our Location</h2>

                    <iframe
                        src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map">
                    </iframe>

          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default Contact;