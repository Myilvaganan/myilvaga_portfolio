import { Card, Col, Container, Row } from "react-bootstrap";
import {
  FaCloud,
  FaDesktop,
  FaJava,
  FaNodeJs,
  FaPython,
  FaServer,
  FaVideo,
} from "react-icons/fa6";
import { PageTitle, Title } from "../components/Title.tsx";
import { FaCode, FaNetworkWired } from "react-icons/fa";

export const Skills = () => {
  return (
    <div id="skills" className="layout-height">
      <Container className="ms-6 pt-5">
        <PageTitle subString={"Skills Acquired"} title={"What I Know?"} />
        <Row className="g-4 justify-content-center mt-3">
          <Col md={4} lg={3}>
            <Card className="w-100 h-100 d-flex flex-column p-4 bg-dark bg-opacity-25">
              <Title title={"LANGUAGES"} subString={"PROGRAMMING"} />
              <div className="d-flex h-100 align-items-sm-center">
                <div className="highlight display-5 align-items-center h-100">
                  <FaNodeJs />
                </div>
                <div className="pr-text ps-3">
                  <p>JavaScript</p>
                </div>
              </div>
              <div className="d-flex h-100 align-items-sm-center">
                <div className="highlight display-5 align-items-center h-100">
                  <FaJava />
                </div>
                <div className="pr-text ps-3">
                  <p>Java</p>
                </div>
              </div>
              <div className="d-flex h-100 align-items-sm-center">
                <div className="highlight display-5 align-items-center h-100">
                  <FaPython />
                </div>
                <div className="pr-text ps-3">
                  <p>Python</p>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={8} lg={6}>
            <Card className="w-100 h-100 d-flex flex-column p-4 bg-dark bg-opacity-25">
              <Title title={"FRAMEWORK"} subString={"LIBRARIES AND"} />
              <div className="d-flex h-100 align-items-sm-center mt-4">
                <div className="highlight display-5 align-items-center h-100">
                  <FaCode />
                </div>
                <div className="pr-text ps-3">
                  <p className="lg-highlight line-spacing-low">
                    Front-End Development
                  </p>
                  <p>React.js, Next.js, Redux-toolkit, Jest, Enzyme, Cypress</p>
                </div>
              </div>
              <div className="d-flex h-100 align-items-sm-center mt-4">
                <div className="highlight display-5 align-items-center h-100">
                  <FaNetworkWired />
                </div>
                <div className="pr-text ps-3">
                  <p className="lg-highlight line-spacing-low">
                    Back-End Development
                  </p>
                  <p>
                    Node.js, Express.js, MongoDb, MySQL, Junit, Springboot,
                    Mockito, Django
                  </p>
                </div>
              </div>
              <div className="d-flex h-100 align-items-sm-center mt-4">
                <div className="highlight display-5 align-items-center h-100">
                  <FaCloud />
                </div>
                <div className="pr-text ps-3">
                  <p className="lg-highlight line-spacing-low">
                    Cloud Services
                  </p>
                  <p>
                    AWS cloud services like EC2, S3, Amplify, DynamoDB, API
                    Gateway, Cognito, App Config etc.,
                  </p>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} lg={3}>
            <Card className="w-100 h-100 d-flex flex-column p-4 bg-dark bg-opacity-25">
              <Title
                title={"MEDIA"}
                subString={"softwares & Tools and".toUpperCase()}
              />
              <div className="d-flex h-100 align-items-sm-center">
                <div className="highlight display-5 align-items-center h-100">
                  <FaDesktop />
                </div>
                <div className="pr-text ps-3">
                  <p>Canva / Figma / draw.io</p>
                </div>
              </div>
              <div className="d-flex h-100 align-items-sm-center">
                <div className="highlight display-5 align-items-center h-100">
                  <FaServer />
                </div>
                <div className="pr-text ps-3">
                  <p>Git / GitHub / CI CD Pipeline, Docker, EKS, etc.,</p>
                </div>
              </div>
              <div className="d-flex h-100 align-items-sm-center">
                <div className="highlight display-5 align-items-center h-100">
                  <FaVideo />
                </div>
                <div className="pr-text ps-3">
                  <p>
                    Davinci Resolve - Video Editing / Photography / Script
                    Writing / Acting
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
