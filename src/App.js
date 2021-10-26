// import Header from "./components/header/header.component";
import Cover from "./components/cover/cover.component";
import Banner from "./components/banner/banner.component";
import Projects from "./components/projects/projects.component";

import "./App.css";

const App = () => {
  return (
    <div className="bg-gray-500 h-screen">
      {/* <Header /> */}
      <Cover />
      <Banner />
      <Projects />
    </div>
  );
};

export default App;
