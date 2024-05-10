<script>
  export let timelineDetail = {};
  export let showModal = false;

  let dialog;

  $: if (dialog && showModal) dialog.showModal();
</script>

<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <div on:click|stopPropagation>
    <div class="dialog_info">
      <img
        src={timelineDetail.img}
        alt=""
        class="rounded_img company_icon_bg img_contain"
      />
      <div class="dialog_info_desc">
        <h1>{timelineDetail.title}</h1>
        <p>{timelineDetail.description}</p>
        {#if timelineDetail.techStacks}
          <div class="dialog_info_tech_stacks">
            {#each timelineDetail.techStacks as stack}
              <div class="dialog_chipper">{stack}</div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
    <div class="dialog_context">
      {#if timelineDetail.projects && timelineDetail.projects.length > 0}
        <div class="flex">
          <img
            src="project.png"
            alt=""
            class="company_icon_sm img_contain"
          />
          <h1>Projects@{timelineDetail.title.split(':')[0]}</h1>
        </div>
        {#each timelineDetail.projects as project}
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div class="dialog_chippers">
            {#each project.tags as tag}
              <div class="dialog_chipper">{tag}</div>
            {/each}
          </div>
        {/each}
      {/if}
      {#if timelineDetail.certs && timelineDetail.certs.length > 0}
        <div class="flex">
          <img
            src="quality.png"
            alt=""
            class="company_icon_sm img_contain"
          />
          <h1>Certificates@{timelineDetail.title.split(':')[0]}</h1>
        </div>
        {#each timelineDetail.certs as cert}
          {#if cert.link}
            <p><a href={`certs/${cert.link}`}>{cert.title}</a></p>
          {:else}
            <p>{cert.title}</p>
          {/if}
          <p>{cert.description}</p>
        {/each}
      {/if}
    </div>
  </div>
</dialog>
