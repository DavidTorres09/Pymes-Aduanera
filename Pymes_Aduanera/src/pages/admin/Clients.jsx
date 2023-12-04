import UserCards from "../../components/UserCards";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";

const Clients = () => {
    return(
        <>
            <NavbarAdmin></NavbarAdmin>
            <div className="ClientsContent" style={{ marginBottom: '10%' }}>
            <UserCards></UserCards>
            </div>
            <Footer></Footer>
        
        </>
            
    )
    
}

export default Clients;