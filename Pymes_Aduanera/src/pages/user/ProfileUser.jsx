import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import ProfileForm from "../../components/ProfileForm";

const ProfileUser = () => {
  return (
    <>
        <NavbarUser></NavbarUser>
        <div style={{ marginBottom: '10%' }}>
          <ProfileForm></ProfileForm>
        </div>
        <Footer></Footer>
    </>
  );
};

export default ProfileUser;
