import { Container, Row } from "reactstrap";
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from "../components/SubHeader";


const CampsitesDirectoryPage = () => {
    // let selectedCampsite = selectRandomCampsite();

    // const toggleCampsite = () => {
    //     selectedCampsite = selectRandomCampsite();
    //     console.log(selectedCampsite);
    // };
    return (
        <Container>
            <Row>
                <SubHeader current={'Directory'} />
                <CampsitesList />
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;