var colors= new Array(
    "#FF5733",
    "#3399FF",
    "#66FF66",
    "#FFCC00",
    "#9933FF",
    "#FF3366",
    "#66FFFF",
    "#FF9966",
    "#99FF99",
    "#FF66B2",
    "#6699FF",
    "#FFCC66",
    "#CC66FF",
    "#66CCFF",
    "#FF6600",
    "#33CCFF",
    "#FF3300",
    "#99CCFF",
    "#FF3399",
    "#CCFF66"
  )
  document.body.style.background=colors[Math.floor(Math.random()*colors.length)]
  
  function refreshPage() {
    location.reload(true); // Reload the page
  }