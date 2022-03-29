import styled from "styled-components";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const Wrapper = styled.header`
  position: sticky;
  display: flex;
  top: 0;
  background-color: #04111d;
  padding: 1.25rem;
  height: 80px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  @media (min-width: 768px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  margin-left: 0.8rem;
`;
const SiteName = styled.div`
  color: white;
  margin-right: 0.8rem;
  font-weight: 600;
  font-size: 1.5rem;
`;

const SearchBar = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 9999px;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  background-color: #363840;

  &:hover {
    background-color: #4c505c;
  }
`;
const MenuItems = styled.div`
  display: flex;
  margin-left: 0.5rem;
  align-items: center;
  color: white;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  display: flex;
  padding: 0.5rem;
  border-radius: 9999px;
  border-width: 2px;
  align-items: center;
  border: 0.2rem solid white;
`;

const Header = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <a href="*">
            <Image src="/Header-logo2.png" alt="" width={40} height={40} />
          </a>
        </Logo>
        <SiteName>مقصدشو</SiteName>
      </LogoContainer>
      <SearchBar>
        <SearchIcon></SearchIcon>
      </SearchBar>
      <MenuItems>
        <MenuItem>
          <MenuIcon></MenuIcon>
          <Link href="/login">
            <AccountCircleIcon></AccountCircleIcon>
          </Link>
        </MenuItem>
      </MenuItems>
    </Wrapper>
  );
};

export default Header;
