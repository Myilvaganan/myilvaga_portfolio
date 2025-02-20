import { PageTitle } from "../components/Title.tsx";
import { Col, Container, Row } from "react-bootstrap";
import { ImageCard } from "../components/ImageCard.tsx";
import cloudServices from "../assets/awsCloud.jpg";
import software from "../assets/softwareDev.jpg";
import mentoring from "../assets/mentoring.jpg";
import uiux from "../assets/UIUX.webp";
import resume from "../assets/resume.jpg";
import videoEditing from "../assets/VideoEditing.jpg";

const servicesList = [
  {
    title: "Software Development",
    link: software,
  },
  {
    title: "UI/UX & Frontend Services",
    link: uiux,
  },
  {
    title: "Cloud Solutions",
    link: cloudServices,
  },
  {
    title: "Tech Training & Mentorship",
    link: mentoring,
  },
  {
    title: "Career & Professional Services",
    link: resume,
  },
  {
    title: "Video Editing & Media Services",
    link: videoEditing,
  },
];

export const Services = () => {
  return (
    <div id="services" className="layout-height">
      <Container className="ms-6 pt-5">
        <PageTitle subString={"My Services"} title={"What I Do?"} />
        <Container className="py-5">
          <Row className="g-3 w-100">
            {servicesList.map((service, index) => (
              <Col md={6} sm={12} lg={4} key={index}>
                <ImageCard title={service.title} link={service.link} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
};
