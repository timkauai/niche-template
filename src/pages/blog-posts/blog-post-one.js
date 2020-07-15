import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "../styles/styles.css"

const Keyword1 = () => (
  <Layout>
    <SEO title="Home" />
    <hr className="horiz-line" />
    <div className="keywords">
      <Link to="/keyword-pages/keyword1/"> keyword1 </Link>{" "}
      <Link to="/keyword-pages/keyword2/"> keyword2 </Link>{" "}
      <Link to="/keyword-pages/keyword3/"> keyword3 </Link>{" "}
      <Link to="/keyword-pages/keyword4/"> keyword4 </Link>{" "}
      <Link to="/keyword-pages/keyword5/"> keyword5 </Link>{" "}
      <Link to="/keyword-pages/keyword6/"> keyword6 </Link>{" "}
    </div>{" "}
    <hr className="horiz-line" />
    <div className="blog-post-heading">
      <div className="titleing">
        <h1 className="article-title"> Article Title </h1>{" "}
        <h3> keyword• keyword </h3>{" "}
      </div>
    </div>{" "}
    <div className="content">
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
        placeat fugit aliquid cupiditate est optio eos rem quasi dolor
        excepturi. Fugit corporis assumenda non vitae quisquam cum natus
        molestias unde!
      </h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium,
        atque aspernatur. Quasi magni, adipisci veritatis quidem corporis
        cupiditate minima! Nam, suscipit quasi numquam exercitationem quia aut
        voluptate qui sit eveniet! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Ipsum, accusantium? Aspernatur provident inventore
        dolores sit a at. Autem officiis aliquid reiciendis id delectus,
        voluptate, voluptatibus debitis ullam possimus fuga unde. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Corrupti amet asperiores,
        ad quam porro voluptatem consequatur iure blanditiis id ea nobis autem
        dolor natus ex possimus reiciendis. Quas, laborum sunt?
      </p>
    </div>
    <div className="socials-banner">
      <div>
        <h3> newsletter </h3>{" "}
        <p> enter your email to subscribe to our monthly newsletter </p>{" "}
        <form action="">
          <input type="text" />
        </form>{" "}
      </div>{" "}
      <div>
        <h3> go check us out </h3>{" "}
        <div>
          <div> </div> <div> </div> <div> </div> <div> </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <div className="content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et
        qui itaque amet ducimus ullam, aliquam placeat tempore eveniet alias
        quibusdam voluptatum cupiditate possimus quas in. Natus, veniam a.
        Beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis et qui itaque amet ducimus ullam, aliquam placeat tempore
        eveniet alias quibusdam voluptatum cupiditate possimus quas in. Natus,
        veniam a. Beatae!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Veritatis et qui itaque amet ducimus ullam, aliquam placeat
        tempore eveniet alias quibusdam voluptatum cupiditate possimus quas in.
        Natus, veniam a. Beatae!
      </p>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et
        qui itaque amet ducimus ullam
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et
        qui itaque amet ducimus ullam, aliquam placeat tempore eveniet alias
        quibusdam voluptatum cupiditate possimus quas in. Natus, veniam a.
        Beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis et qui itaque amet ducimus ullam, aliquam placeat tempore
        eveniet alias quibusdam voluptatum cupiditate possimus quas in. Natus,
        veniam a. Beatae!
      </p>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et
        qui ita
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et
        qui itaque amet ducimus ullam, aliquam placeat tempore eveniet alias
        quibusdam voluptatum cupiditate possimus quas in. Natus, veniam a.
        Beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis et qui itaque amet ducimus ullam, aliquam placeat tempore
        eveniet alias quibusdam voluptatum cupiditate possimus quas in. Natus,
        veniam a. Beatae!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Veritatis et qui itaque amet ducimus ullam, aliquam placeat
        tempore eveniet alias quibusdam voluptatum cupiditate possimus quas in.
        Natus, veniam a. Beatae!
      </p>
    </div>
    <div className="latest-posts blog-margin-bottom">
      <h3 className="latest-title"> latest posts </h3>{" "}
      <div className="latest-posts-setup">
        <div className="latest-article">
          <div> </div> <h1> Article Title </h1> <h3> keyword• keyword </h3>{" "}
          <Link to="/blog-posts/blog-post-one"> Read More </Link>{" "}
        </div>{" "}
        <div className="latest-article">
          <div> </div> <h1> Article Title </h1> <h3> keyword• keyword </h3>{" "}
          <Link to="/blog-posts/blog-post-one"> Read More </Link>{" "}
        </div>{" "}
        <div className="latest-article">
          <div> </div> <h1> Article Title </h1> <h3> keyword• keyword </h3>{" "}
          <Link to="/blog-posts/blog-post-one"> Read More </Link>{" "}
        </div>{" "}
        <div className="latest-article">
          <div> </div> <h1> Article Title </h1> <h3> keyword• keyword </h3>{" "}
          <Link to="/blog-posts/blog-post-one"> Read More </Link>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <footer>
      <div className="footer-links left">
        <Link to="https://reddit.com"> reddit </Link> <Link> youtube </Link>{" "}
        <Link> pintrest </Link> <Link> insta </Link>{" "}
      </div>{" "}
      <div className="footer-links right">
        <Link> contact </Link> <Link> feedback </Link>{" "}
      </div>{" "}
    </footer>{" "}
  </Layout>
)

export default Keyword1
