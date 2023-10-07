import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>MERN Projects</h1>
          <h2>Hey I'm Yogesh Vanzara</h2>
          <p style={{ padding: "2rem" }}>
            My Projects are used with front-end with react and back-end node as
            database i used monogodb.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
