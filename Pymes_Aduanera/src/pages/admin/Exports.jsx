import ExportsManager from '../../components/ExportsManager';
import Footer from '../../components/Footer';
import NavbarAdmin from '../../components/NavbarAdmin';

function Exports () {

    return (
        <div style={{ marginBottom: '10%' }}>
            <NavbarAdmin></NavbarAdmin>
            <ExportsManager></ExportsManager>
            <Footer></Footer>
        </div>
    );
}
export default Exports;