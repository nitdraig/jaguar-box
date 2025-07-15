import About from "./components/About";
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Pricings from "./components/Pricings";
import Sidebar from "./components/Sidebar";
import Why from "./components/Why";
import QA from "./components/QA";
export default function Home() {
  return (
    <main className="">
      <Header />
      <About />
      <Why />
      <QA />
      <Pricings />
    </main>
  );
}
