import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LogoContainer}>
        <div className={styles.Logo}>
          <a href="*">
            <Image src="/Header-logo2.png" alt="" width={40} height={40} />
          </a>
        </div>
        <div className={styles.SiteName}>مقصدشو</div>
      </div>
      <div className={styles.SearchBar}></div>
      <div className={styles.MenuItems}>
        <div className={styles.MenuItem}>
          <Link href="/login">
            <AccountCircleIcon></AccountCircleIcon>
          </Link>
          <MenuIcon></MenuIcon>
        </div>
      </div>
    </div>
  );
};

export default Header;
