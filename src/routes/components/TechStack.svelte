<script>
  import { browser } from '$app/environment';
  import { onMount } from "svelte";
  import techStackData from "../data/tech-stack.js";
  export let stackName = "languages";

  let grouppedData = [];

  const debounce = (func, delay) => {
    let timer;

    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const setGroupedData = () => {
    const median = window.innerWidth < 750 ? 4 : 6;
    const tempData = [];

    techStackData[stackName].forEach((item, index) => {
      if (index % median === 0) {
        tempData.push([item]);
      } else {
        tempData[tempData.length - 1].push(item);
      }
    });

    grouppedData = tempData;
  };

  const debouncedSetWindowWidth = debounce(setGroupedData, 300);

  if(browser) {
    setGroupedData();
  }

  onMount(() => {
    window.addEventListener("resize", debouncedSetWindowWidth);

    return () => {
      window.removeEventListener("resize", debouncedSetWindowWidth);
    };
  });
</script>

<p class="tech_stack_list_title">
  {stackName.charAt(0).toUpperCase() + stackName.slice(1)}
</p>
{#each grouppedData as group}
  <div class="tech_stack_list">
    {#each group as item}
      <div class="tech_stack_list_item">
        <div class="tooltip">
          <div class="tooltip_context">
            <p>{item.name}</p>
            <div class="status-bar">
              <div class={`x${item.rate}`}></div>
            </div>
          </div>
          <img
            src={item.src}
            loading="lazy"
            alt=""
            class={`rounded_img tech_icon ${item.additionalClassName}`}
          />
        </div>
      </div>
    {/each}
  </div>
{/each}
