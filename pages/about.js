import Image from "next/image";
import programmerPic from "../public/images/programmer.svg";
// import myResume from "../public/assets/Praveen_Kumar_Nagarajan_SSE.pdf";

import Layout from "@components/layout/Layout";

export default function About() {

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about">
          <p className="greeting"> Hi, I'm Praveen Kumar Nagarajan. </p>
          <a href="/assets/Praveen_Kumar_Nagarajan_SSE.pdf" download className="resume-btn">
            <button className="button-30" role="button"> Download Resume </button>
          </a>
          <p>
            A Senior Software Engineer with 5+ years of experience in
            Developing, Testing, Integrating, and Implementing web-based
            applications. Strong knowledge in HTML5, CSS3, CSS preprocessors
            (SCSS), JavaScript, TypeScript, AngularJS / Angular 10, and ReactJs
            for web application development.
          </p>
          <p>
            You can find me elsewhere on
            <a
              target="_blank"
              href="https://twitter.com/_Praveen_KumarN"
              className="aLink"> Twitter </a>
            and
            <a
              target="_blank"
              href="https://www.linkedin.com/in/praveen-kumar-nagarajan"
              className="aLink"> LinkedIn </a>.
          </p>
        </div>
      </div>
      <div className="img-container">
        <Image src={programmerPic} alt="programmerPic" />
      </div>
    </div>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
