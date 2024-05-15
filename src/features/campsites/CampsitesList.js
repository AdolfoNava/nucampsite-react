import { Col, Row } from "reactstrap";
//import { CAMPSITES } from "../../app/shared/CAMPSITES.js";
import CampsiteCard from "./CampsiteCard.js";
import { selectAllCampsites } from "./CampsitesSlice.js";

const CampsitesList = ({setCampsiteId}) => {
    const campsites = selectAllCampsites();
    return (
        <Row>
            {campsites.map((campSite) => {
                return (
                    <Col md='5' className='m-4' key={campSite.id} onClick={() => setCampsiteId(campSite.id)}>
                        <CampsiteCard campsite={campSite} />
                    </Col>
                );
            })}
        </Row>
    );
}
export default CampsitesList;