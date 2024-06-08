import { Col, Row } from "reactstrap";
import Error from "../../components/Error.js"; 
import Loading from "../../components/Loading.js";
//import { CAMPSITES } from "../../app/shared/CAMPSITES.js";
import CampsiteCard from "./CampsiteCard.js";
import { selectAllCampsites } from "./CampsitesSlice.js";
import { useSelector } from "react-redux";

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    console.log('campsites:', campsites);    
    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }
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