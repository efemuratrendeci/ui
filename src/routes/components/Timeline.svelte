<script>
  import TimelineDetail from "./TimelineDetail.svelte";
  import timelineDetailData from "../data/time-line";
  let timelineDetail;
  let showModal;

  const getCompany = (id) => {
    timelineDetail = timelineDetailData.filter((x) => x.id === id)[0];
    showModal = true;
  };
</script>

<TimelineDetail bind:timelineDetail bind:showModal />
<br />
<div class="timeline_container">
  <h3>BC</h3>
  <div class="gap"></div>
  <div on:click={() => getCompany(5)}>
    <img src="yeo.jpg" alt="" class="rounded_img company_icon img_contain" />
    <p>2016</p>
  </div>
  <div class="gap"></div>
  <div on:click={() => getCompany(4)}>
    <img
      src="aselsan.jpeg"
      alt=""
      class="rounded_img company_icon img_contain"
    />
    <p>2017</p>
  </div>
  <div class="gap"></div>
  <div on:click={() => getCompany(3)}>
    <img src="iu.png" alt="" class="rounded_img company_icon img_contain" />
    <p>2017</p>
  </div>
  <div class="gap"></div>
  <div on:click={() => getCompany(2)}>
    <img src="nebim.webp" alt="" class="rounded_img company_icon img_contain" />
    <p>2018</p>
  </div>
  <div class="gap"></div>
  <div on:click={() => getCompany(1)}>
    <img src="mercedes-benz.jpeg" alt="" class="rounded_img company_icon last_border" />
    <p>2022</p>
  </div>
  <div class="gap last"></div>
  <h3>&#8734;</h3>
</div>
