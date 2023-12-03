import Footer from "../../components/Footer";
import NavbarAdmin from "../../components/NavbarAdmin";
import TicketTable from "../../components/TicketTable";
import "../../css/admin/Tickets.css"

const Tickets = () => {
    return (
        <>
         <NavbarAdmin></NavbarAdmin>
        <h1 className="TicketsTitle">Tickets</h1>
        <TicketTable></TicketTable>
        <Footer></Footer>
        </>
    );

}
export default Tickets