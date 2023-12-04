import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import TicketUser from "../../components/TicketsUser";
import "../../css/user/Tickets.css"

const TickestUser = () => {
    return (
        <>
         <NavbarUser></NavbarUser>
        <h1 className="TicketsTitle">Tickets</h1>
        <div style={{ marginBottom: '10%' }}>
            <TicketUser></TicketUser>
        </div>
        <Footer></Footer>
        </>
    );

}
export default TickestUser;