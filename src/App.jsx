import Banner from "./components/Banner/Banner";
import BlogOne from "./components/BlogOne/BlogOne";
import BlogThree from "./components/BlogThree/BlogThree";
import BlogTwo from "./components/BlogTwo/BlogTwo";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homes from "./components/Homes/Homes";
import LiveChat from "./components/LiveChat/LiveChat";
import Quoates from "./components/Quoates/Quoates";
import Skins from "./components/Skins/Skins";
import Soaps from "./components/Soaps/Soaps";

const App = () => {
  return (
    <div className="bg-[#fffef2]">
      <Header></Header>
      <Banner />
      <Soaps />
      <BlogOne />
      <Skins />
      <BlogTwo />
      <Homes />
      <BlogThree />
      <Quoates />
      <LiveChat />
      <Footer />
    </div>
  );
};

export default App;
