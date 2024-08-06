<script>
  export let header;
</script>

<div class="section_header">
  <h2>{header}</h2>
  {#if header.toLowerCase() === "timeline"}
    <span class="section_header_detail">click icons for more</span>
  {/if}
</div>
