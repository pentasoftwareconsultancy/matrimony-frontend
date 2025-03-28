import VendorCard from "../vendorscard/Vendorcard";
import styles from "./Vendorslist.module.css";

const VendorList = ({ vendors }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardGrid}>
        {vendors.map((vendor) => (
          <VendorCard key={vendor._id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
};

export default VendorList;
