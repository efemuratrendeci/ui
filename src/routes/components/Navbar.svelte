<script>
  let buttonSign = "+";
  const handleActionButtonClick = () => {
    const navbarItems = document.querySelector(".navbar_items");
    navbarItems.classList.toggle("visible");
    buttonSign = buttonSign === "+" ? "-" : "+";
  };
</script>

<div class="navbar">
  <div class="navbar_items">
    <a href="https://www.linkedin.com/in/efe-murat-rendeci/"
      ><img src="linkedin.png" alt="" class="nav_icon" /></a
    >
    <a href="https://github.com/efemuratrendeci"
      ><img src="github.png" alt="" class="nav_icon" /></a
    >
    <a href="mailto:eferendeci@gmail.com"
      ><img src="mail.png" alt="" class="nav_icon" /></a
    >
    <a href="https://www.instagram.com/efemuratrendeci/"
      ><img src="instagram.png" alt="" class="nav_icon" /></a
    >
    <div>
      <img src="location.png" alt="" class="nav_icon" />
      <div class="tooltip">
        <p class="tooltip_context">Istanbul/Turkiye</p>
      </div>
    </div>
  </div>
  <button on:click={handleActionButtonClick} class="navbar_button">{buttonSign}</button>
</div>
