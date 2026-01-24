import Introduction from "./components/Introduction.jsx";
import SectionHeader from "./components/SectionHeader.jsx";
import Timeline from "./components/Timeline.jsx";
import TechStack from "./components/TechStack.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <SectionHeader header="Timeline" />
      <Timeline />
      <div className="tech_stack_projects">
        <div className="tech_stack_projects_column">
          <SectionHeader header="Tech Stack" />
          <div className="tech_stack_column">
            <details className="tech_stack_group" open>
              <summary>Languages</summary>
              <TechStack showTitle={false} />
            </details>
            <details className="tech_stack_group">
              <summary>Frameworks</summary>
              <TechStack stackName="frameworks" showTitle={false} />
            </details>
            <details className="tech_stack_group">
              <summary>Databases</summary>
              <TechStack stackName="databases" showTitle={false} />
            </details>
            <details className="tech_stack_group">
              <summary>Environments</summary>
              <TechStack stackName="environments" showTitle={false} />
            </details>
            <details className="tech_stack_group">
              <summary>Others</summary>
              <TechStack stackName="others" showTitle={false} />
            </details>
          </div>
        </div>
        <div className="tech_stack_projects_column">
          <SectionHeader header="External Projects" />
          <div className="projects_column">
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}
