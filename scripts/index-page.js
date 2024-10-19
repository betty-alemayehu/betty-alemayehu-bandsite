import BandSiteApi from "./band-site-api.js";

const apiKey = "44993b1e-d67d-40a6-b841-df26de004af8";
const bandApi = new BandSiteApi(apiKey);

// Event listener for form submission
document
  .getElementById("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    // Capture form inputs using event.target
    const name = event.target.name.value.trim();
    const comment = event.target.comment.value.trim();

    // Create a new comment object
    const newComment = {
      name: name,
      comment: comment,
    };

    // Post the new comment to the API
    await bandApi.postComment(newComment);

    // Clear form inputs after submission
    event.target.name.value = "";
    event.target.comment.value = "";

    // Re-display comments after new comment is added
    displaySubmissions();
  });

// Function to display the comments on the page
async function displaySubmissions() {
  const formArray = document.getElementById("formArray");
  formArray.innerHTML = ""; // Clear existing content

  // Fetch comments from the API
  const submissions = await bandApi.getComments();

  // Loop through each comment and render it on the page
  submissions.forEach((submission) => {
    createComment(submission);
  });
}

// Function to create and display a comment
function createComment(comment) {
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment-item");

  // Placeholder avatar container (wrapper)
  const avatarWrapper = document.createElement("div");
  avatarWrapper.classList.add("comments__avatar--placeholder");

  // Avatar image inside the wrapper
  const imageEl = document.createElement("img");
  imageEl.classList.add("comments__avatar");
  imageEl.src = "./assets/Images/Mohan-muruge.jpg";
  imageEl.alt = comment.name + " user image";

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("comment-item__content");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("comment-item__header");

  const nameEl = document.createElement("h4");
  nameEl.textContent = comment.name;

  const dateEl = document.createElement("span");
  dateEl.classList.add("comment-item__date");
  const formattedDate = new Date(comment.timestamp).toLocaleDateString(); // Format the timestamp
  dateEl.textContent = formattedDate;

  headerDiv.appendChild(nameEl);
  headerDiv.appendChild(dateEl);

  const commentTextEl = document.createElement("p");
  commentTextEl.textContent = comment.comment;

  contentDiv.appendChild(headerDiv);
  contentDiv.appendChild(commentTextEl);
  // Append the image to the wrapper
  avatarWrapper.appendChild(imageEl);
  // Append the wrapper to the comment item
  commentDiv.appendChild(avatarWrapper);

  // commentDiv.appendChild(imageEl);
  commentDiv.appendChild(contentDiv);

  // Append the comment to the formArray container
  document.getElementById("formArray").appendChild(commentDiv);
}

// Fetch and display comments when the page loads
displaySubmissions();
