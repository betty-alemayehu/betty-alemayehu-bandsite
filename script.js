// Preloaded comments array with images added
const commentsArray = [
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    image: "",
  },
  {
    name: "Christina Cabrera",
    date: "10/28/2023",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    image: "",
  },
  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    image: "",
  },
];

// Function to render and organize comments by date
function showComments() {
  const commentsList = document.getElementById("commentsList");
  commentsList.innerHTML = ""; // Clear previous comments

  // Sort comments by date using loop
  commentsArray
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date descending
    .forEach((comment) => {
      const commentItem = `
          <div class="comment-item">
              <div class="comment-content">
                  <h4>${comment.name}</h4>
                  <span>${comment.date}</span>
                  <p>${comment.comment}</p>
              </div>
          </div>`;
      commentsList.innerHTML += commentItem;
    });
}

// Add event listener for 'load' event to show comments
window.addEventListener("load", showComments);

// Function to add a new comment to the top of the list
function addComment() {
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  if (!name || !comment) {
    alert("Please enter both your name and a comment.");
    return;
  }

  const currentDate = new Date().toLocaleDateString(); // Get current date

  // Add new comment to the beginning of the array
  commentsArray.unshift({
    name: name,
    comment: comment,
    date: currentDate,
    image: "", // Placeholder for user images
  });

  // Update the displayed comments
  showComments();

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
}
