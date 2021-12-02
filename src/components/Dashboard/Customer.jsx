import styles from "./Customer.module.css";
import userIcon from "../../assets/icons/userIcon.svg";
const Customer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.customerDetailsWrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.headerWrapper}>
            <p className={styles.logo}>Dashboard</p>
            <div className={styles.userControls}>
              <i className="fas fa-search"></i>
              <i className="fas fa-th"></i>
              <p className={styles.notification}>
                <i className="far fa-bell"></i>
                <span>10</span>
              </p>
              <span className={styles.userAccount}>
                <img src={userIcon} alt="" width={50} />
                Groww90
              </span>
            </div>
          </div>
        </div>
        <div className={styles.customerDetailsTable}>
          <div className={styles.detailsHeader}>
            <span>Customer</span>
            <button>
              <i class="fas fa-plus"></i> New Customer
            </button>
          </div>
          <div className={styles.tDataSpacer}></div>
          <div className={styles.table}>
            <div className={styles.thead}>
              <div className={styles.trow}>
                <div className={styles.tdata}>Customer Id</div>
                <div className={styles.tdata}>Customer Name</div>
                <div className={styles.tdata}>E-Mail</div>
                <div className={styles.tdata}>Contact</div>
              </div>
            </div>
            <div className={styles.tbody}>
              <div className={styles.trow}>
                <div className={styles.tdata}>pay_G11ZY646x6Afk3</div>
                <div className={styles.tdata}>Anonymus</div>
                <div className={styles.tdata}>abc@gmail.com</div>
                <div className={styles.tdata}>+91 8956457845</div>
              </div>
              <div className={styles.trow}>
                <div className={styles.tdata}>pay_G11ZY646x6Afk3</div>
                <div className={styles.tdata}>Anonymus</div>
                <div className={styles.tdata}>abc@gmail.com</div>
                <div className={styles.tdata}>+91 8956457845</div>
              </div>
              <div className={styles.trow}>
                <div className={styles.tdata}>pay_G11ZY646x6Afk3</div>
                <div className={styles.tdata}>Anonymus</div>
                <div className={styles.tdata}>abc@gmail.com</div>
                <div className={styles.tdata}>+91 8956457845</div>
              </div>
              <div className={styles.trow}>
                <div className={styles.tdata}>pay_G11ZY646x6Afk3</div>
                <div className={styles.tdata}>Anonymus</div>
                <div className={styles.tdata}>abc@gmail.com</div>
                <div className={styles.tdata}>+91 8956457845</div>
              </div>
              <div className={styles.trow}>
                <div className={styles.tdata}>pay_G11ZY646x6Afk3</div>
                <div className={styles.tdata}>Anonymus</div>
                <div className={styles.tdata}>abc@gmail.com</div>
                <div className={styles.tdata}>+91 8956457845</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
