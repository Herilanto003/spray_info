import Banner from "../components/Banner";
import About from "../components/About";
import Formation from "../components/Formation";
import Formateurs from "../components/Formateurs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

function HomeApp() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Formation />
      <Formateurs />
      <Contact />
      <Footer />
    </>
  );
}

export default HomeApp;
