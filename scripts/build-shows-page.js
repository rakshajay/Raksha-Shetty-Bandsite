import BandSiteApi from "./band-site-api.js";

/*let shows = [
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
        venue: "View Lounge ",
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
    }
];
*/


// function to convert timesatmp from millisec format to mockup format
function formatTimestampToReadableDate(timestamp) {
  const time = new Date(timestamp);
  time.setDate(time.getDate() + 1);
  const day = time.toLocaleDateString("en-US", { weekday: "short" });
  const month = time.toLocaleDateString("en-US", { month: "short" });
  const date = time.toLocaleDateString("en-US", { day: "numeric" });
  const year = time.toLocaleDateString("en-US", { year: "numeric" });

  return `${day} ${month} ${date} ${year}`;
}
function selectedListInMercury(event) {
  const selectedLists = document.querySelectorAll(".shows-list__li");

  for (let i = 0; i < selectedLists.length; i++) {
    selectedLists[i].classList.remove("selected");
  }
  event.currentTarget.classList.add("selected");
}

const bandSiteApi = new BandSiteApi("f1f929f6-6089-4f6c-92cb-5e89ace37ffb");
const showCard = document.querySelector(".shows");

async function renderShowList() {
  const shows = await bandSiteApi.getShowsData();

  const tittleContainer = document.createElement("div");
  tittleContainer.classList.add("shows-title");
  const tittle = document.createElement("h1");
  tittle.innerText = "Shows";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("shows-sub");

  const subTittleContainer = document.createElement("div");
  subTittleContainer.classList.add("shows-subtitle");

  const subTittleDateContainer = document.createElement("div");
  const subTittleDate = document.createElement("h2");
  subTittleDateContainer.setAttribute("id", "date");
  subTittleDate.innerText = "DATE";

  const subTittleVenueContainer = document.createElement("div");
  const subTittleVenue = document.createElement("h2");
  subTittleVenueContainer.setAttribute("id", "venue");
  subTittleVenue.innerText = "VENUE";

  const subTittleLocationContainer = document.createElement("div");
  const subTittleLocation = document.createElement("h2");
  subTittleLocationContainer.setAttribute("id", "location");
  subTittleLocation.innerText = "LOCATION";

  const dummyButtonContainer = document.createElement("div");
  dummyButtonContainer.setAttribute("id", "hide");
  const dummyButtonText = document.createElement("div");
  dummyButtonText.innerText = "DUMMY";

  const showListContainer = document.createElement("div");
  showListContainer.classList.add("shows-list");

  const unorderedListContainer = document.createElement("ul");

  for (let i = 0; i < shows.length; i++) {
    const showList = document.createElement("li");
    showList.classList.add("shows-list__li");
    showList.addEventListener("click", selectedListInMercury);

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("shows-list__li-item");

    const dateHeading = document.createElement("h2");
    dateHeading.innerText = "DATE";

    const date = document.createElement("h3");
    date.setAttribute("id", "date-id");
    date.innerText = formatTimestampToReadableDate(shows[i].date);

    const venueContainer = document.createElement("div");
    venueContainer.classList.add("shows-list__li-item");

    const venueHeading = document.createElement("h2");
    venueHeading.innerText = "VENUE";

    const venue = document.createElement("h3");
    venue.innerText = shows[i].place;

    const locationContainer = document.createElement("div");
    locationContainer.classList.add("shows-list__li-item");

    const locationHeading = document.createElement("h2");
    locationHeading.innerText = "LOCATION";

    const location = document.createElement("h3");
    location.innerText = shows[i].location;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("shows-list__li-button");

    const buttonText = document.createElement("button");
    buttonText.innerText = "BUY TICKETS";

    showList.appendChild(dateContainer);
    dateContainer.appendChild(dateHeading);
    dateContainer.appendChild(date);

    showList.appendChild(venueContainer);
    venueContainer.appendChild(venueHeading);
    venueContainer.appendChild(venue);

    showList.appendChild(locationContainer);
    locationContainer.appendChild(locationHeading);
    locationContainer.appendChild(location);

    showList.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonText);

    unorderedListContainer.appendChild(showList);

    shows.forEach((show) => {
      const showList = document.createElement("li");
      showList.classList.add("shows-list__li");
    });
  }

  showCard.appendChild(tittleContainer);
  tittleContainer.appendChild(tittle);

  showCard.appendChild(mainContainer);

  mainContainer.appendChild(subTittleContainer);
  subTittleContainer.appendChild(subTittleDateContainer);
  subTittleDateContainer.appendChild(subTittleDate);

  subTittleContainer.appendChild(subTittleVenueContainer);
  subTittleVenueContainer.appendChild(subTittleVenue);

  subTittleContainer.appendChild(subTittleLocationContainer);
  subTittleLocationContainer.appendChild(subTittleLocation);

  subTittleContainer.appendChild(dummyButtonContainer);
  dummyButtonContainer.appendChild(dummyButtonText);

  mainContainer.appendChild(showListContainer);
  showListContainer.appendChild(unorderedListContainer);
}

renderShowList();
