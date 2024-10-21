import BandSiteApi from "../scripts/band-site-api.js";

const apiKey = "44993b1e-d67d-40a6-b841-df26de004af8";
const bandApi = new BandSiteApi(apiKey);

// Function to render the shows on the page
async function displayShows() {
  const container = document.getElementById("showContainer");
  let selectedShow = null; // Keep track of the currently selected show (for "selected" state)

  // Create and append the shows label row
  createShowsLabel();

  // Fetch shows data from the API
  const shows = await bandApi.getShows();

  // Iterate over each show and create corresponding HTML elements
  shows.forEach((show) => {
    // Create a container div for each show
    const showDiv = document.createElement("div");
    showDiv.classList.add("show-item");

    // Create and append date label
    const dateElLabel = document.createElement("h4");
    dateElLabel.textContent = "Date";
    dateElLabel.classList.add("show-item__label", "show-item--hidden");
    showDiv.appendChild(dateElLabel);

    // Create and append the formatted date element
    const dateEl = document.createElement("p");
    const formattedDate = new Date(show.date).toDateString();
    dateEl.textContent = formattedDate;
    dateEl.classList.add("show-item__date", "show-item--bold");
    showDiv.appendChild(dateEl);

    // Create and append venue label
    const venueElLabel = document.createElement("h4");
    venueElLabel.textContent = "Venue";
    venueElLabel.classList.add("show-item__label", "show-item--hidden");
    showDiv.appendChild(venueElLabel);

    // Venue (from API)
    const venueEl = document.createElement("p");
    venueEl.textContent = show.place;
    venueEl.classList.add("show-item__venue");
    showDiv.appendChild(venueEl);

    // Create and append location label
    const locationElLabel = document.createElement("h4");
    locationElLabel.textContent = "Location";
    locationElLabel.classList.add("show-item__label", "show-item--hidden");
    showDiv.appendChild(locationElLabel);

    // Location (from API)
    const locationEl = document.createElement("p");
    locationEl.textContent = show.location;
    locationEl.classList.add("show-item__location");
    showDiv.appendChild(locationEl);

    // Create and append the "Buy Tickets" button
    const buttonEl = document.createElement("button");
    buttonEl.textContent = "Buy Tickets";
    buttonEl.classList.add("show-item__button");
    showDiv.appendChild(buttonEl);

    // Append the showDiv to the container
    container.appendChild(showDiv);

    // Event listener for click to apply selected state
    showDiv.addEventListener("click", () => {
      // Remove selected class from the previously selected show
      if (selectedShow) {
        selectedShow.classList.remove("show-item--selected");
      }
      // Add selected class to the clicked show
      showDiv.classList.add("show-item--selected");
      selectedShow = showDiv;
    });
  });
}

// Function to create the label row after the h2 heading
function createShowsLabel() {
  // Find the shows section
  const showsHeader = document.querySelector(".shows__header");

  // Create the label container (div for labels)
  const labelDiv = document.createElement("div");
  labelDiv.classList.add("shows__label", "shows__label--tablet");

  // Create and append each label (Date, Venue, Location, Blank)
  const labels = ["Date", "Venue", "Location", ""];
  labels.forEach((labelText) => {
    const labelEl = document.createElement("p");
    labelEl.textContent = labelText;
    labelEl.classList.add("show-item__label");
    labelDiv.appendChild(labelEl);
  });

  // Insert the label row after the h2 heading
  showsHeader.parentNode.insertBefore(labelDiv, showsHeader.nextSibling);
}

// Execute displayShows function when the page loads
window.addEventListener("load", displayShows);
