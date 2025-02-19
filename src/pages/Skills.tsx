import {Card, Col, Container, Row} from "react-bootstrap";
import {FaJava} from "react-icons/fa6";
import {PageTitle, Title} from "../components/Title.tsx";

const SkillCard = (): JSX.Element => {
    return (
        <Card className="w-100 h-100 d-flex flex-column p-4 bg-dark bg-opacity-25 border-light-subtle">
            <Title title={"LANGUAGES"} subString={"PROGRAMMING"}/>
            <div className="d-flex h-100 align-items-sm-baseline">
                <div className="highlight display-5">
                    <FaJava/>
                </div>
                <div className="pr-text ps-3"><p>Java</p></div>
            </div>
        </Card>
    );
};


export const Skills = () => {
    return (
        <div id="skills" className="layout-height">
            <div className="ms-6 pt-5">
                <PageTitle subString={"Skills Acquired"} title={"What I Know?"}/>
            </div>
            <Container className="py-5">
                <Row className="g-4 justify-content-center">
                    <Col md={4} lg={3}>
                        <SkillCard

                        />
                    </Col>
                    <Col md={8} lg={6}>
                        <SkillCard
                        />
                    </Col>
                    <Col md={4} lg={3}>
                        <SkillCard
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
