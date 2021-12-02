import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.logo}>Subspace.</span>
        <div className={styles.loginWrapper}>
          <p className={styles.text}>Already a user?</p>
          <button className={styles.loginBtn}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
