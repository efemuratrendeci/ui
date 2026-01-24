import Introduction from "./components/Introduction.jsx";
import SectionHeader from "./components/SectionHeader.jsx";
import Timeline from "./components/Timeline.jsx";
import TechStack from "./components/TechStack.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <SectionHeader header="Timeline" />
      <Timeline />
      <SectionHeader header="Tech Stack" />
      <TechStack />
      <br />
      <TechStack stackName="environments" />
      <br />
      <TechStack stackName="frameworks" />
      <br />
      <TechStack stackName="databases" />
      <br />
      <TechStack stackName="others" />
    </>
  );
}
