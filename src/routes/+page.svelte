<script>
  import Introduction from "./components/Introduction.svelte";
  import SectionHeader from "./components/SectionHeader.svelte";
  import Timeline from "./components/Timeline.svelte";
  import TechStack from "./components/TechStack.svelte";
  import Navbar from "./components/Navbar.svelte";
</script>

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
