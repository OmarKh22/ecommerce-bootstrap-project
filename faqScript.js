document.addEventListener("DOMContentLoaded", function () {
  // Disable default Bootstrap behavior
  const allFaqQuestions = document.querySelectorAll(
    "[data-bs-toggle='collapse']"
  );

  allFaqQuestions.forEach((question) => {
    // Remove data-bs-toggle attribute to prevent default Bootstrap behavior
    question.removeAttribute("data-bs-toggle");

    question.addEventListener("click", function () {
      // Get target section ID
      const targetId = this.getAttribute("data-bs-target");
      const targetCollapse = document.querySelector(targetId);

      if (targetCollapse) {
        // Check if section is already open
        const isOpen = targetCollapse.classList.contains("show");

        // Close if open, open if closed
        if (isOpen) {
          targetCollapse.classList.remove("show");
          updateIcon(this, false);
        } else {
          targetCollapse.classList.add("show");
          updateIcon(this, true);
        }
      }
    });
  });

  // Function to update icon based on section state
  function updateIcon(questionElement, isOpen) {
    if (questionElement.classList.contains("minimal-faq-question")) {
      // Second section (minimal)
      const icon = questionElement.querySelector(".minimal-faq-icon i");
      if (icon) {
        if (isOpen) {
          icon.classList.remove("fa-chevron-down");
          icon.classList.add("fa-chevron-up");
        } else {
          icon.classList.remove("fa-chevron-up");
          icon.classList.add("fa-chevron-down");
        }
      }
    } else {
      // First and third sections
      const icon = questionElement.querySelector(".faq-icon i");
      if (icon) {
        if (
          icon.classList.contains("fa-plus") ||
          icon.classList.contains("fa-minus")
        ) {
          // Third section (plus/minus icons)
          if (isOpen) {
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
          } else {
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
          }
        } else {
          // First section (chevron icons)
          if (isOpen) {
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
          } else {
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
          }
        }
      }
    }
  }

  // Handle announcement bar close button
  const closeBtn = document.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      const announcementBar = document.querySelector(".announcement-bar");
      if (announcementBar) {
        announcementBar.style.display = "none";
      }
    });
  }
});
