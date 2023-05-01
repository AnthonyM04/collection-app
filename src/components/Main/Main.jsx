import { Button, Col, Container, Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export default function Main() {
    return(
        <main>
            <Container>
                <Row>
                    <Col>
                        <h1>Gallery</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo provident, numquam vero omnis aliquam tenetur architecto ullam? Cum expedita molestias reprehenderit odit voluptatem libero, quas praesentium laudantium et facilis numquam.</p>
                        <HashLink to="/#gallery"><Button>See Gallery</Button></HashLink> 
                    </Col>
                </Row>
            </Container>
        </main>
    )
}