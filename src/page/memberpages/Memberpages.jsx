import styles from './Memberpage.module.css';
import MemberList from '../../Components/member/memberlist/Memberlist';
import Memberhero from '../../Components/member/memberhero/Memberhero';

const MemberPage = () => {
  return (
    <div className={styles.memberPage}>
      <Memberhero/>
      <h1 className={styles.title}>Committee Members</h1>
      <MemberList />
    </div>
  );
};

export default MemberPage;
