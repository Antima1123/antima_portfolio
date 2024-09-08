import Image from "next/image";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThirdPage from "./components/ThirdPage";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="text-white font-sans">
      <Header/>
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <Contact/>
      <Footer/>
    </div>
  );
}

