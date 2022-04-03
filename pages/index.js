import Header from "../containers/Header/Header";
import _SharedLayout from "../containers/_SharedLayout";

export default function Home() {
  return (
    <_SharedLayout title="صفحه اصلی">
      <Header />
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
