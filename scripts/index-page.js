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

//event listener for form submission
document.getElementById("form").addEventListener("submit", function (event) {
  //prevent default refresh (assignment requirement)
  event.preventDefault();

  //define the name and comment values
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  const currentDate = new Date().toLocaleDateString();

  // Validate input fields - Dive Deeper #1: Prevent the form from submitting
  if (!name || !comment) {
    alert("Please enter both your name and a comment.");
    return;
  }

  //using the above 3 variables for name, date, and comment, prepare to create objects to push into the array
  const newComment = {
    name: name,
    date: currentDate,
    comment: comment,
  };
  //push new object
  submissions.unshift(newComment);

  console.log(submissions);

  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";

  displaySubmissions();
});

function displaySubmissions() {
  // Get the div where the comments will be displayed
  const formArray = document.getElementById("formArray");

  // Clear any existing content
  formArray.innerHTML = "";

  // Loop through the comments array and create HTML elements for each comment
  submissions.forEach((submission) => {
    // Create the comment container div
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment-item");

    // Create the name element
    const nameEl = document.createElement("h4");
    nameEl.textContent = submission.name;

    // Create the date element
    const dateEl = document.createElement("span");
    dateEl.textContent = submission.date;

    // Create the comment text element
    const commentTextEl = document.createElement("p");
    commentTextEl.textContent = submission.comment;

    // Append the elements to the comment container div
    commentDiv.appendChild(nameEl);
    commentDiv.appendChild(dateEl);
    commentDiv.appendChild(commentTextEl);

    // Append the comment div to the formArray div
    formArray.appendChild(commentDiv);
  });
}

// displays comments even if no submissions are made via form
window.addEventListener("load", displaySubmissions);
