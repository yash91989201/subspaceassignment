import styles from "./SignupModal.module.css";
import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";
import icon4 from "../../assets/icons/icon4.svg";
import icon5 from "../../assets/icons/icon5.svg";
import icon6 from "../../assets/icons/icon6.svg";
import icon7 from "../../assets/icons/icon7.svg";
import icon8 from "../../assets/icons/icon8.svg";
import icon9 from "../../assets/icons/icon9.svg";
import icon10 from "../../assets/icons/icon10.svg";
import icon11 from "../../assets/icons/icon11.svg";
import icon12 from "../../assets/icons/icon12.svg";

const SignupModal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.formContainer}>
          <p className={styles.formHeader}>Create an Account</p>
          <div className={styles.formWrapper}>
            <form action="get" className={styles.registrationForm}>
              <div className={styles.inputField}>
                <label>Enter Mobile</label>
                <input type="tel" className={styles.mobile} />
              </div>
              <div className={styles.inputField}>
                <label className={styles.emailFeildText}>Enter Email</label>
                <input type="email" className={styles.email} />
              </div>
              <div className={styles.inputField}>
                <label className={styles.passwordFeildText}>
                  Enter Password
                  <i class="fa-solid fa-eye"></i>
                </label>
                <input type="password" className={styles.password} />
              </div>
              <div className={styles.inputField}>
                <label className={styles.cPasswordFeildText}>
                  Confirm Password
                  <i class="fa-solid fa-eye"></i>
                </label>
                <input type="password" className={styles.cPassword} />
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" className={styles.userConscent} />
                <label>I hereby confirm that I am 18 years old or above.</label>
              </div>
              <button className={styles.otpBtn}>Verify OTP</button>
            </form>
            <p className={styles.termsAndConditions}>
              By creating this account, you agree to our
              <label className={styles.textBlue}>Privacy Policy</label>
              and
              <label className={styles.textBlue}>Terms of Use</label>
            </p>
          </div>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsHeader}>Why choose Subspace?</div>
          <p className={styles.infoText}>
            2000+ bussiness trust their payments with SubSpace
          </p>
          <div className={styles.detailsWrapper}>
            <div className={styles.ottShowcaseContainer}>
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
              <img src={icon4} alt="" />
              <img src={icon5} alt="" />
              <img src={icon6} alt="" />
              <img src={icon7} alt="" />
              <img src={icon8} alt="" />
              <img src={icon9} alt="" />
              <img src={icon10} alt="" />
              <img src={icon11} alt="" />
              <img src={icon12} alt="" />
            </div>
          </div>
          <div class={styles.smallText}>
            Need help? We are just a click away.
            <span
              style={{
                marginLeft: "8px",
                color: "#000",
                textDecoration: "underline",
                fontWeight: 500,
              }}
            >
              Contact Us
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
