import Header from "../containers/Header";
import _SharedLayout from "../containers/_SharedLayout";
import BannerAttration from "../containers/Banner-Attration";

import CardSm from "../components/Card/CardSm";

export default function Home() {
  return (
    <_SharedLayout title="صفحه اصلی">
      <Header />
      <BannerAttration />
    </_SharedLayout>
  );
}

// export async function getServerSideProps() {
//   const CONTAINER_URL = `${process.env.API_URL}/place/placetype`;
//   const res = await fetch(CONTAINER_URL);
//   const data = await res.json();
//   // Pass data to the page via props
//   return { props: { data } };
// }
