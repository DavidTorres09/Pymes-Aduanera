import Footer from '../../components/Footer';
import ImportsManager from '../../components/ImportsManager';
import NavbarAdmin from '../../components/NavbarAdmin';

function Imports () {

    return (
        <div className='containerIndexAdmin'>
            <NavbarAdmin></NavbarAdmin>
            <ImportsManager></ImportsManager>
            <Footer></Footer>
        </div>
    );
}
export default Imports;