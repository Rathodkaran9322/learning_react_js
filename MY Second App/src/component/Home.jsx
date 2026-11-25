import HomeImage from "../assets/laptop.jpg";

const Home = () => {
  return (
   <div>
    <section className="bg-subtle-warning" id="home">
      <div className="continer">
        <div className="row">
          <div className="md:col-6 p-6">
            <h1>Welcom To My Site</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque officiis unde dolore cupiditate, ipsam voluptatem pariatur praesentium repudiandae! Consequuntur reiciendis dolore laudantium facere hic, asperiores rerum vel tempora quia officiis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus cumque fugiat iste, hic, repellat dolores libero aliquid consectetur, fuga alias impedit doloremque nostrum quo laudantium itaque accusantium repudiandae incidunt adipisci?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil sunt unde at sed blanditiis officiis perferendis nobis voluptatem fugit, expedita, vel molestiae ratione odio alias ipsam quam dicta itaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, commodi ea! Qui dignissimos aperiam sequi voluptates vel repudiandae voluptas autem fuga doloremque! Sequi nam accusamus similique cumque id repudiandae natus!</p>
            
            
          </div>
          <div className="md:col-6 p-6">
            <img src={HomeImage} className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default Home;