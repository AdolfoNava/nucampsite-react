import { Col, Row } from "reactstrap";
import { CAMPSITES } from "../../app/shared/CAMPSITES.js";
import  CampsiteCard  from "./CampsiteCard.js";

const CampsitesList = () =>{
    return (
        <Row>
            {CAMPSITES.map((campSite) =>{
            return (<Col md='5' className='m-4' key={campSite.id}>
                    <CampsiteCard campsite={campSite}/>
                </Col>);
            })}
        </Row>
    );
}
export default CampsitesList;