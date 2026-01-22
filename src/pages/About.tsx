/* eslint-disable react/react-in-jsx-scope */
import { PageTitle } from "../components/Title.tsx";
import { ButtonWrapper } from "../components/ButtonWrapper.tsx";
import { fetchResumeUrl } from "../api";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../assets/profile_image_2.png";

export const About = () => {
  const handleDownload = async () => {
    const resumeURL = await fetchResumeUrl();
    if (resumeURL) {
      const link = document.createElement("a");
      link.href = resumeURL;
      link.target = "_blank";
      link.download = "filename.pdf";
      link.click();
    }
  };

  return (
    <div id="about" className="layout-height p-5">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <div id="about-picture" className="d-flex justify-content-end">
                <img src={profile} alt="profile" width={400} height={600}/>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div id="about-content">
              <PageTitle subString={"About Me"} title={"Summary"} />
              <p className="highlight-hover">
                Senior Software Engineer with nearly <b>7+</b> years of experience delivering scalable, production-grade full-stack applications across retail monitoring, IoT, and enterprise platforms. Strong hands-on expertise in Python, Node.js (NestJS/Express), React.js, and Next.js, with deep exposure to cloud-native development across AWS and Azure. Skilled in designing secure and high-performance REST APIs, building real-time dashboards, and implementing event-driven architectures for streaming data and operational monitoring.
              </p>
              <p className="highlight-hover">
                At CGI, I work on retail proactive monitoring solutions for fuel operations, building dashboard APIs, enabling low-latency real-time updates using Azure Web PubSub and Service Bus, and developing Python-based IoT event handlers for reliable edge-to-cloud telemetry processing. I have also contributed to EV alerting systems by implementing rule-based alert generation and configurable evaluation logic. Additionally, I support deployment automation by integrating deployment APIs with Ansible workflows and publishing live deployment status updates to the UI for real-time visibility.
              </p>
              <p className="highlight-hover">
                Previously at Infosys (Amazon India), I developed enterprise-grade UI modules using React and TypeScript, focusing on stability, usability, and performance improvements for large-scale business workflows. Experienced with AWS Lambda, DynamoDB, API Gateway, S3, and IaC using CDK, along with CI/CD pipelines using GitLab, Jenkins, and AWS CodePipeline. Strong believer in SOLID principles, design patterns, and clean coding standards, with a growing focus on AI-integrated automation and intelligent monitoring solutions.
              </p>
              <ButtonWrapper
                text="Download CV"
                onClickHandler={handleDownload}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
