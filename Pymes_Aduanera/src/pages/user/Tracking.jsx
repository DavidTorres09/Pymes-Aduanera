import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import TrackingUser from "../../components/TrackingUser";

const Tracking = () => {
    return (
        <>
         <NavbarUser></NavbarUser>
        <div style={{ marginBottom: '10%' }}>
            <TrackingUser></TrackingUser>
        </div>
        <Footer></Footer>
        </>
    );

}
export default Tracking;