import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark ">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
