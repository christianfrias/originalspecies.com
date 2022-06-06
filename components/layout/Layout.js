import Header from "../header";
import Footer from "../footer";

function Layout(props) {
  return (
    <div>
      <Header />
      <main className={props.className}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
