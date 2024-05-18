import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({ item }) => {
    const { id, image, name, description } = item;
    return (
            <Card>
                <CardTitle>{name}</CardTitle>
                <CardImg src={image} alt={name} />
                <CardBody>

                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
    );
};

export default DisplayCard;