<script>
  import techStackData from "../data/tech-stack.js";
  export let stackName = "languages";

  const grouppedData = [];
  techStackData[stackName].forEach((item, index) => {
    if (index % 6 === 0) {
      grouppedData.push([item]);
    } else {
      grouppedData[grouppedData.length - 1].push(item);
    }
  });
</script>

<p class="tech_stack_list_title">{stackName.charAt(0).toUpperCase() + stackName.slice(1)}</p>
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
