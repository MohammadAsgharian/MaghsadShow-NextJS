import Head from "next/head";

const _SharedLayout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.children}
    </>
  );
};

export default _SharedLayout;
