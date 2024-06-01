import { Col, Row } from "reactstrap";
//import { CAMPSITES } from "../../app/shared/CAMPSITES.js";
import CampsiteCard from "./CampsiteCard.js";
import { selectAllCampsites } from "./CampsitesSlice.js";
import { useSelector } from "react-redux";

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    console.log('campsites:', campsites);
    return (
        <Row className='ms-auto'>
            {campsites.map((campSite) => {
                return (
                    <Col md='5' className='m-4' key={campSite.id}>
                        <CampsiteCard campsite={campSite} />
                    </Col>
                );
            })}
        </Row>
    );
}
export default CampsitesList;