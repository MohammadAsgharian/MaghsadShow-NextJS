import styled from "styled-components";
import Image from "next/image";

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
      <SearchBar></SearchBar>
    </Wrapper>
  );
};

export default Header;
