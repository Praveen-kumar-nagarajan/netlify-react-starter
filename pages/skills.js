import Image from "next/image";
import codingProg from "../public/images/coding_prog.svg";

import { Col, Container, Row } from "react-bootstrap";

import Layout from "@components/layout/Layout";
import SkillImage from "@components/skill-image/SkillImage";

export default function Skills(props) {
  return (
    <div className="skills-container">
      <Container className="skills-wrapper">
        <Row className="skills-row">
          <Col lg="8" md="8" s="12" xs="12">
            <div className="skills-list">
              <SkillImage label="Angular 10" icon="devicon-angularjs-plain" />
              <SkillImage label="TypeScript" icon="devicon-typescript-plain" />
              <SkillImage label="JavaScript" icon="devicon-javascript-plain" />
              <SkillImage label="HTML5" icon="devicon-html5-plain" />
              <SkillImage label="CSS3" icon="devicon-css3-plain" />
              <SkillImage label="SASS" icon="devicon-sass-plain" />
              <SkillImage label="GIT" icon="devicon-git-plain" />
              <SkillImage label="NPM" icon="devicon-npm-original-wordmark" />
              <SkillImage label="Bootstrap" icon="devicon-bootstrap-plain" />
              <SkillImage label="Java" icon="devicon-java-plain" />
              <SkillImage label="ReactJS" icon="devicon-react-original" />
              <SkillImage label="Jira" icon="devicon-jira-plain" />
              <SkillImage
                label="Sourcetree"
                icon="devicon-sourcetree-original"
              />
              <SkillImage label="VsCode" icon="devicon-vscode-plain" />
            </div>
          </Col>
          <Col lg="4" md="4" s="12" xs="12">
            <div className="img-container">
              <Image src={codingProg} alt="codingProg" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Skills.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
