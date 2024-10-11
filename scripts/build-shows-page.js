// Array of show objects
const shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

// Function to render the shows on the page
function displayShows() {
  const container = document.getElementById("showContainer");
  let selectedShow = null; // Keep track of the currently selected show

  shows.forEach((show) => {
    // Create a container div for each show
    const showDiv = document.createElement("div");
    showDiv.classList.add("show-item");

    // Create and append the date element
    const dateEl = document.createElement("p");
    dateEl.textContent = `Date: ${show.date}`;
    showDiv.appendChild(dateEl);

    // Create and append the venue element
    const venueEl = document.createElement("p");
    venueEl.textContent = `Venue: ${show.venue}`;
    showDiv.appendChild(venueEl);

    // Create and append the location element
    const locationEl = document.createElement("p");
    locationEl.textContent = `Location: ${show.location}`;
    showDiv.appendChild(locationEl);

    // Create and append the button element
    const buttonEl = document.createElement("button");
    buttonEl.textContent = "Buy Tickets";
    showDiv.appendChild(buttonEl);

    // Append the showDiv to the container
    container.appendChild(showDiv);

    // Event listener for click to apply selected state
    showDiv.addEventListener("click", () => {
      // Remove selected class from the previously selected show
      if (selectedShow) {
        selectedShow.classList.remove("selected");
      }
      // Add selected class to the clicked show
      showDiv.classList.add("selected");
      selectedShow = showDiv; // Update the selected show reference
    });
  });
}

// Call the displayShows function when the page loads
window.addEventListener("load", displayShows);
