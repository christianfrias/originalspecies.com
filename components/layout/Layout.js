import Header from "../header";
import Footer from "../footer";

function Layout(props) {
  return (
    <div>
      <Header />
      <main className={props.className}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
