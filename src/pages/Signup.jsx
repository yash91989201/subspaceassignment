import styles from "../styles/signup.module.css";
import Header from "../components/Signup/Header";
import SignupModal from "../components/Signup/SignupModal";

const Signup = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <SignupModal />
      </div>
    </section>
  );
};

export default Signup;
