function readmore(event) {
  const button = event.target; // Get the button that was clicked
  const content = button.previousElementSibling.querySelector(".more"); // Find the related hidden content

  if (button.innerHTML === "Read less") {
    button.innerHTML = "Read more";
    content.style.display = "none";
  } else {
    button.innerHTML = "Read less";
    content.style.display = "inline";
  }
}

// Attach event listeners to all "Read more" buttons
document.querySelectorAll(".read-more-btn").forEach((button) => {
  button.addEventListener("click", readmore);
});
