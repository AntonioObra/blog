import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
