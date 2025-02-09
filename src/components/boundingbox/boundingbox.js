  import "./Boundingbox.css"
  import vertor9 from "../../assets/img/Vector9.png"
  import vertor10 from "../../assets/img/Vector10.png"
  import vertor11 from "../../assets/img/Vector11.png"
  import vertor12 from "../../assets/img/Vector12.png"

  const BoundingBox = () => (
    <section className="bounding-box">
      <div className="text-box">
        <h1>Welcome to webtoon canvas</h1>
        <p>
          Canvas is Webtoon's open platform where creators can publish their comics
          and connect with millions of readers around the world.
        </p>
        <button className="upload-btn">Upload Episode</button>
      </div>
      <div className="banner">
        <div className="banner-images">
          <img src={vertor12}/>
          <img src={vertor11}/>
        </div>
        <div className="banner-images">
          <img src={vertor9}/>
          <img src={vertor10}/>
        </div>
      </div>
    </section>
  );
export default BoundingBox;