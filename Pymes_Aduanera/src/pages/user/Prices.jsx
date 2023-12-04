import Footer from '../../components/Footer';
import NavbarUser from '../../components/NavbarUser';
import ProductTaxCalculator from '../../components/ProductTaxCalculator';

function Prices () {

    return (
        <>
        <NavbarUser></NavbarUser>
        <div style={{ marginBottom: '10%' }}>
            <ProductTaxCalculator></ProductTaxCalculator>
        </div>
        <Footer></Footer>
        </>
        
        
    );
}
export default Prices;