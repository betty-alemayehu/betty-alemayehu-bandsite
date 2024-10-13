// Preloaded comments array (no localStorage handling)
const submissions = [
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    date: "10/28/2023",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// Event listener for form submission
document.getElementById("form").addEventListener("submit", function (event) {
  // Prevent default refresh (assignment requirement)
  event.preventDefault();

  // Define the name and comment values
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  const currentDate = new Date().toLocaleDateString();

  // Validate input fields
  // if (!name || !comment) {
  //   alert("Please enter both your name and a comment.");
  //   return;
  // }

  // Create a new comment object
  const newComment = {
    name: name,
    date: currentDate,
    comment: comment,
  };

  // Push the new comment to the beginning of the array
  submissions.unshift(newComment);

  // Clear the input fields
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";

  // Re-render the comments
  displaySubmissions();
});

function displaySubmissions() {
  // Get the div where the comments will be displayed
  const formArray = document.getElementById("formArray");

  // Clear any existing content
  formArray.innerHTML = "";

  // Loop through the comments array and create HTML elements for each comment
  submissions.forEach((submission) => {
    createComment(submission);
  });
}

function createComment(comment) {
  // Create the comment container div
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment-item");

  // Create the image element (avatar)
  const imageEl = document.createElement("img");
  imageEl.classList.add("comments__avatar");
  imageEl.setAttribute("src", "");

  // Create the content div (holds the header and the comment text)
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("comment-item__content");

  // Create a div to hold the name and date (header row)
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("comment-item__header");

  // Create the name element
  const nameEl = document.createElement("h4");
  nameEl.textContent = comment.name;

  // Create the date element
  const dateEl = document.createElement("span");
  dateEl.classList.add("item--bold");
  dateEl.textContent = comment.date;

  // Append the name and date to the header div
  headerDiv.appendChild(nameEl);
  headerDiv.appendChild(dateEl);

  // Create the comment text element
  const commentTextEl = document.createElement("p");
  commentTextEl.textContent = comment.comment;

  // Append the header (name & date) and comment text to the content div
  contentDiv.appendChild(headerDiv);
  contentDiv.appendChild(commentTextEl);

  // Append the avatar image and content div to the comment container
  commentDiv.appendChild(imageEl);
  commentDiv.appendChild(contentDiv);

  // Append the comment div to the formArray div
  document.getElementById("formArray").appendChild(commentDiv);
}

// Displays comments even if no submissions are made via form
window.addEventListener("load", displaySubmissions);
