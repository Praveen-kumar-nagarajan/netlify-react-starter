import Image from "next/image";
import typingPic from "../public/images/Typing-bro.svg";
import timelineAmicoPic from "../public/images/Timeline-amico.svg";

import Layout from "@components/layout/Layout";
import ProjectCard from "@components/project-card/ProjectsCard";
import { Col, Container, Row } from "react-bootstrap";

export default function Projects() {
  const projects = [
    {
      title: "Crop Inventory Management",
      description:
        "The client is a prominent food and agri-business that supplies food components to thousands of clients worldwide, ranging from multi-national corporations with globally recognized brands to tiny family-owned companies.",
      timeline: "APR 2020 – PRESENT",
      skills: [
        { label: "Angular 10", icon: "devicon-angularjs-plain" },
        { label: "TypeScript", icon: "devicon-typescript-plain" },
        { label: "HTML5", icon: "devicon-html5-plain" },
        { label: "SCSS", icon: "devicon-sass-original" },
        { label: "PrimeNG", icon: "" },
        { label: "Highcharts", icon: "" },
        { label: "GIT", icon: "devicon-git-plain" },
        { label: "KeyCloak", icon: "" },
        { label: "Jira", icon: "devicon-jira-plain" },
      ],
      rolesAndResponsibilities: [],
      status: "In-Progress",
    },
    {
      title: "Zeus - ClockIt",
      description:
        "Zeus ClockIt combines elements of time entry, project, and resource management capabilities and features. The project has real-time health monitoring dashboards for employees and projects.",
      timeline: "JUL 2019 – APR 2020",
      skills: [
        { label: "Angular 7", icon: "devicon-angularjs-plain" },
        { label: "TypeScript", icon: "devicon-typescript-plain" },
        { label: "HTML5", icon: "devicon-html5-plain" },
        { label: "SCSS", icon: "devicon-sass-original" },
        { label: "PrimeNG", icon: "" },
        { label: "Highcharts", icon: "" },
        { label: "GIT", icon: "devicon-git-plain" },
        { label: "OAuth", icon: "" },
      ],
      rolesAndResponsibilities: [],
      status: "Completed",
    },
    {
      title: "FSX Web Applications",
      description:
        "FSX web applications utilize the common UI design ensuring a consistent user experience across applications by creating custom/configurable UI components.",
      timeline: "FEB 2019 – JUL 2019",
      skills: [
        { label: "Angular 7", icon: "devicon-angularjs-plain" },
        { label: "TypeScript", icon: "devicon-typescript-plain" },
        { label: "HTML5", icon: "devicon-html5-plain" },
        { label: "SCSS", icon: "devicon-sass-original" },
        { label: "NPM", icon: "devicon-npm-original-wordmark" },
        { label: "GIT", icon: "devicon-git-plain" },
      ],
      rolesAndResponsibilities: [],
      status: "Completed",
    },
    {
      title: "Re-Insurance Fund Allocations System",
      description:
        "The project involved developing a web-based application to automate the reinsurance fund allocations system and create reports based on the customer requirements for facultative, proportional, and excess-of-loss (XOL).",
      timeline: "DEC 2018 – FEB 2019",
      skills: [
        { label: "Angular 6", icon: "devicon-angularjs-plain" },
        { label: "TypeScript", icon: "devicon-typescript-plain" },
        { label: "HTML5", icon: "devicon-html5-plain" },
        { label: "CSS3", icon: "devicon-css3-plain" },
        { label: "PrimeNG", icon: "" },
        { label: "Highcharts", icon: "" },
        { label: "SVN", icon: "devicon-tortoisegit-plain" },
      ],
      rolesAndResponsibilities: [],
      status: "Completed",
    },
    {
      title: "Vendor Oversight Management",
      description:
        "The client is a prominent real estate, mortgage, and consumer debt marketplace and transaction solution provider. The project entailed creating a Vendor Management Platform that would allow customers to track all of their vendors in one location and receive timely notifications and insights regarding vendor compliance.",
      timeline: "JUL 2016 – NOV 2018",
      skills: [
        { label: "Angular JS", icon: "devicon-angularjs-plain" },
        { label: "JavaScript", icon: "devicon-javascript-plain" },
        { label: "HTML5", icon: "devicon-html5-plain" },
        { label: "CSS3", icon: "devicon-css3-plain" },
        { label: "KendoUI", icon: "" },
        { label: "Jira", icon: "devicon-jira-plain" },
        { label: "NPM", icon: "devicon-npm-original-wordmark" },
      ],
      rolesAndResponsibilities: [],
      status: "Completed",
    },
  ];

  return (
    <div className="prjct-container">
      <Container className="prjct-wrapper">
        <Row className="prjct-row">
          <Col lg="4" md="4" s="12" xs="12">
            <div className="img-container">
              <Image src={typingPic} alt="typingPic" />
              <Image src={timelineAmicoPic} alt="timelineAmico" />
            </div>
          </Col>
          <Col lg="8" md="8" s="12" xs="12">
            <div className="project-content">
              <div className="projects">
                <div className="timeline">
                  {projects.map(function (project) {
                    return <ProjectCard project={project} />;
                  })}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
