import UserCards from "../../components/UserCards";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import "../../css/admin/Clients.css"

const Clients = () => {
    return(
        <>
            <NavbarAdmin></NavbarAdmin>
            <div className="ClientsContent">
            <UserCards></UserCards>
            </div>
            <Footer></Footer>
        
        </>
            
    )
    
}

export default Clients;