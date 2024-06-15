import Banner from "./components/Banner/Banner";
// import BannerBot from "./components/Banner/BannerBot";
import Blogs from "./components/Blogs/Blogs";
import Careers from "./components/Careers/Careers";
import FormQuestion from "./components/FormQuestion/FormQuestion";
import Intro from "./components/Intro/Intro";
import Questions from "./components/Questions/Questions";
import Teams from "./components/Teams/Teams";
import Television from "./components/Television/Television";
import Timeline from "./components/Timeline/Timeline";
import "./styles/globals.css";
import "./styles/app.css";
import "./styles/portal.css";
export default function Home() {
  return (
    <main className="">
      <Banner />
      <Intro />
      <Timeline />
      <Careers />
      <Television />
      <Teams />
      <FormQuestion />
      <Blogs />
      <Questions />
      {/* <BannerBot /> */}
    </main>
  );
}
