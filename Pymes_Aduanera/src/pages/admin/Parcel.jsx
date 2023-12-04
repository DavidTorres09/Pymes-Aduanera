import Footer from "../../components/Footer";
import NavbarAdmin from "../../components/NavbarAdmin";
import ParcelManager from "../../components/ParcelManager";

const Parcel = () => {
    return (
        <>
        <NavbarAdmin></NavbarAdmin>
        <div style={{ marginBottom: '10%' }}>
        <ParcelManager></ParcelManager>
        </div>
        <Footer></Footer>
        </>
    )
};

export default Parcel;
