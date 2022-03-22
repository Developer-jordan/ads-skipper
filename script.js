setInterval(() => {
  const btn = document.querySelector(".ytp-ad-skip-button");
  if (btn) {
    console.log("ads as been skipped");
    btn.click();
  }
}, 3000);
