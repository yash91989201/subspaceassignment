import styles from "../styles/dashboard.module.css";
import SideNavigation from "../components/Dashboard/SideNavigation";
import Customer from "../components/Dashboard/Customer";

const Dashboard = () => {
  return (
    <section className={styles.container}>
      <SideNavigation />
      <Customer />
    </section>
  );
};

export default Dashboard;
