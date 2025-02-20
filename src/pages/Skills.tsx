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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const animateParams = {
    initial: { opacity: 0, scale: 0.45 },
    animate: inView ? { opacity: 1, scale: 1 } : {},
    transition: { duration: 1.5, ease: "easeOut" },
  };
  return (
    <div id="skills" className="layout-height">
      <Container className="ms-6 pt-5">
        <PageTitle subString={"Skills Acquired"} title={"What I Know?"} />
        <Row className="g-4 justify-content-center mt-3">
          <Col md={4} lg={3} sm={12}>
            <Card className="w-100 h-100 d-flex flex-column p-4 bg-dark bg-opacity-25">
              <Title title={"LANGUAGES"} subString={"PROGRAMMING"} />
              <motion.div
                ref={ref}
                {...animateParams}
                className="d-flex h-100 align-items-sm-center"
              >
                <div className="highlight display-5 align-items-center h-100">
                  <FaNodeJs />
                </div>
                <div className="pr-text ps-3">
                  <p>JavaScript</p>
                </div>
              </motion.div>
              <motion.div
                ref={ref}
                {...animateParams}
                className="d-flex h-100 align-items-sm-center"
              >
                <div className="highlight display-5 align-items-center h-100">
                  <FaJava />
                </div>
                <div className="pr-text ps-3">
                  <p>Java</p>
                </div>
              </motion.div>
              <motion.div
                ref={ref}
                {...animateParams}
                className="d-flex h-100 align-items-sm-center"
              >
                <div className="highlight display-5 align-items-center h-100">
                  <FaPython />
                </div>
                <div className="pr-text ps-3">
                  <p>Python</p>
                </div>
              </motion.div>
            </Card>
          </Col>
          <Col md={8} lg={6} sm={12}>
            <Card className="w-100 h-100 d-flex flex-column p-4 bg-dark bg-opacity-25">
              <Title title={"FRAMEWORK"} subString={"LIBRARIES AND"} />
              <motion.div
                ref={ref}
                {...animateParams}
                className="d-flex h-100 align-items-sm-center mt-4"
              >
                <div className="highlight display-5 align-items-center h-100">
                  <FaCode />
                </div>
                <div className="pr-text ps-3">
                  <p className="lg-highlight line-spacing-low">
                    Front-End Development
                  </p>
                  <p>React.js, Next.js, Redux-toolkit, Jest, Enzyme, Cypress</p>
                </div>
              </motion.div>
              <motion.div
                ref={ref}
                {...animateParams}
                className="d-flex h-100 align-items-sm-center mt-4"
              >
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
              </motion.div>
              <motion.div
                ref={ref}
                {...animateParams}
                className="d-flex h-100 align-items-sm-center mt-4"
              >
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
              </motion.div>
            </Card>
          </Col>
          <Col md={12} lg={3} sm={12}>
            <Card className="w-100 h-100 d-flex flex-column p-4 bg-dark bg-opacity-25">
              <Title
                title={"MEDIA"}
                subString={"softwares & Tools and".toUpperCase()}
              />
              <motion.div
                ref={ref}
                {...animateParams}
                className="d-flex h-100 align-items-sm-center"
              >
                <div className="highlight display-5 align-items-center h-100">
                  <FaDesktop />
                </div>
                <div className="pr-text ps-3">
                  <p>Canva / Figma / draw.io</p>
                </div>
              </motion.div>
              <motion.div
                ref={ref}
                {...animateParams}
                className="d-flex h-100 align-items-sm-center"
              >
                <div className="highlight display-5 align-items-center h-100">
                  <FaServer />
                </div>
                <div className="pr-text ps-3">
                  <p>Git / GitHub / CI CD Pipeline, Docker, EKS, etc.,</p>
                </div>
              </motion.div>
              <motion.div
                ref={ref}
                {...animateParams}
                className="d-flex h-100 align-items-sm-center"
              >
                <div className="highlight display-5 align-items-center h-100">
                  <FaVideo />
                </div>
                <div className="pr-text ps-3">
                  <p>
                    Davinci Resolve - Video Editing / Photography / Script
                    Writing / Acting
                  </p>
                </div>
              </motion.div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
