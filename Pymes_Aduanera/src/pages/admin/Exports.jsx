import ExportsManager from '../../components/ExportsManager';
import Footer from '../../components/Footer';
import NavbarAdmin from '../../components/NavbarAdmin';

function Exports () {

    return (
        <div className='containerIndexAdmin'>
            <NavbarAdmin></NavbarAdmin>
            <ExportsManager></ExportsManager>
            <Footer></Footer>
        </div>
    );
}
export default Exports;