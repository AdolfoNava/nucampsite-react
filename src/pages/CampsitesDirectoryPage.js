import { Container, Row, Col } from "reactstrap";
import {useState} from 'react'
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import { selectCampsiteById } from '../features/campsites/CampsitesSlice';

const CampsitesDirectoryPage = () => {
    // let selectedCampsite = selectRandomCampsite();
    
    // const toggleCampsite = () => {
    //     selectedCampsite = selectRandomCampsite();
    //     console.log(selectedCampsite);
    // };
    const [campsiteId, setCampsiteId] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteId);
    return (
        <Container>
                <Row>
                    <Col sm='5' md='7'>
                        <CampsitesList setCampsiteId={setCampsiteId}/>
                    </Col>
                    <Col sm='7' md='5'>
                        <CampsiteDetail campsite={selectedCampsite} />
                    </Col>
                </Row>            
        </Container>
    );
};

export default CampsitesDirectoryPage;