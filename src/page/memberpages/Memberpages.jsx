import styles from './Memberpage.module.css';
import MemberList from '../../components/member/memberlists/Memberlist';
import Memberhero from '../../components/member/memberheros/Memberhero';

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
