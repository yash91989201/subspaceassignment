import styles from "./SideNavigation.module.css";
const SideNavigation = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.logo}>Subspace.</h2>
      <div className={styles.dashboardLinksContainer}>
        <div className={styles.dashboardLinksWrapper}>
          <div className={styles.dashboardLink}>
            <i className="fas fa-th-large" style={{ color: "#53B9EA" }}></i>
            <a href="/" style={{ color: "#53B9EA" }}>
              Home
            </a>
          </div>
          <div className={styles.dashboardLink}>
            <i className="fas fa-exchange-alt" style={{ color: "#F05050" }}></i>
            <a href="/" style={{ color: "#F05050" }}>
              Transactions
            </a>
          </div>
          <div className={styles.dashboardLink}>
            <i
              className="fab fa-telegram-plane"
              style={{ color: "#F19A5E" }}
            ></i>
            <a href="/">Subscription Plans</a>
          </div>
          <div className={styles.dashboardLink}>
            <i className="fas fa-check-double" style={{ color: "#27C24C" }}></i>
            <a href="/">Settlement</a>
          </div>
          <div className={styles.dashboardLink}>
            <i
              className="fas fa-exclamation-circle"
              style={{ color: "#F05050" }}
            ></i>
            <a href="/">Disputes</a>
          </div>
          <div className={styles.dashboardLink}>
            <i
              className="fas fa-exclamation-circle"
              style={{ color: "#27C24C" }}
            ></i>
            <a href="/">Refunds</a>
          </div>
          <div className={styles.dashboardLink}>
            <p className={styles.linkActive}></p>
            <i
              className="fas fa-exclamation-circle"
              style={{ color: "#FBE165" }}
            ></i>
            <a href="/">Customers</a>
          </div>
          <div className={styles.dashboardLink}>
            <i className="fas fa-tags" style={{ color: "#27C24C" }}></i>
            <a href="/">Offers</a>
          </div>
          <div className={styles.dashboardLink}>
            <i className="fas fa-gift" style={{ color: "#F05050" }}></i>
            <a href="/">Reward Points</a>
          </div>
          <div className={styles.dashboardLink}>
            <i className="far fa-user-circle" style={{ color: "#53B9EA" }}></i>
            <a href="/">My Account</a>
          </div>
          <div className={styles.dashboardLink}>
            <i className="fas fa-cog" style={{ color: "#FBE165" }}></i>
            <a href="/">Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
