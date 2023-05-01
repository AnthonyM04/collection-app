import { Col, Card, Image } from "react-bootstrap";

export default function Panel ({ data: { id, name, cover, about, website, }}) {
    return(
        <Col>
            <Card key={id}>
                <figure>
                    <Image src={cover} />
                </figure>

                <div className="content">
                    <h3>{name}</h3>
                </div>
                {name}
            </Card>
        </Col>
    )
}