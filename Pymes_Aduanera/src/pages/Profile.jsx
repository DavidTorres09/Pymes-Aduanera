import Footer from "../components/Footer";
import NavbarAdmin from "../components/NavbarAdmin";
import ProfileForm from "../components/ProfileForm";

const Profile= () => {
  return (
    <>
        <NavbarAdmin></NavbarAdmin>
        <div style={{ marginBottom: '10%' }}>
          <ProfileForm></ProfileForm>
        </div>
        <Footer></Footer>
    </>
  );
};

export default Profile;
