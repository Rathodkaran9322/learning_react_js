import Laptop from "../assets/laptop.jpg";
import Mobile from "../assets/mobile.jpg";
import KrishnaTemple from "../assets/krishna temple.jpg";

const About = () => {
    return(
   <section className="mt-5 mb-5 bg-gradiet">
    <div className="container" id="about">
      <div className="row">
        <h1>About Us</h1>
        {/* First Card */}
        <div className="md:col-4">
          <div className="card">
  <div className="card-body">
    <img src={Laptop} className="img-fluid same-image" alt="Laptop"/>
    <h5 className="mt-2 mb-0">Laptop</h5>
    <p className="card-text fg-2">High performance laptops designed for speed,reliability,and everyday productivity.</p>
    <small className="fg-3">Last updated 3 mins ago</small>
  </div>
</div>
        </div>
         {/* Second Card */}
        <div className="md:col-4">
          <div className="card">
  <div className="card-body">
    <img src={Mobile} className="img-fluid same-image" alt="Mobile"/>
    <h5 className="mt-2 mb-0">Mobile</h5>
    <p className="card-text fg-2">Discover modern mobile devices built for fast connectivity.</p>
    <small className="fg-3">Last updated 3 mins ago</small>
  </div>
</div>
        </div>
        {/* Third Card */}
        <div className="md:col-4">
          <div className="card">
  <div className="card-body">
    <img src={KrishnaTemple} className="img-fluid same-image" alt="Krishna Temple"/>
    <h5 className="mt-2 mb-0">Krishna Temple</h5>
    <p className="card-text fg-2">A serene place of devotion peace and cultural heritage dedicated to lord kridhna.</p>
    <small className="fg-3">Last updated 3 mins ago</small>
  </div>
</div>
        </div>
      </div>
    </div>
   </section>
    );
};
export default About;