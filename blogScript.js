document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("closeAnnouncement");
  const announcementBar = document.getElementById("announcementBar");

  closeBtn.addEventListener("click", function () {
    announcementBar.style.display = "none";
  });
});
