let shows = [
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
]

const showCard = document.querySelector(".shows");

function renderShowList() {

    const tittleContainer = document.createElement("div");
    tittleContainer.classList.add("shows-title");
    const tittle = document.createElement("h1");
    tittle.innerText = "Shows";

    const subTittleContainer = document.createElement("div");
    subTittleContainer.classList.add("shows-subtitle");

    const subTittleDateContainer = document.createElement("div");
    const subTittleDate = document.createElement("h2");
    subTittleDate.innerText = "DATE";

    const subTittleVenueContainer = document.createElement("div");
    const subTittleVenue = document.createElement("h2");
    subTittleVenue.innerText = "VENUE";

    const subTittleLocationContainer = document.createElement("div");
    const subTittleLocation = document.createElement("h2");
    subTittleLocation.innerText = "LOCATION";

    const dummyButtonContainer = document.createElement("div");
    dummyButtonContainer.setAttribute("id","hide")
    const dummyButtonText = document.createElement("div");
    dummyButtonText.innerText = "DUMMY";

    const showListContainer = document.createElement("div");
    showListContainer.classList.add("shows-list");

    const unOrderedListContainer = document.createElement("ul");
    

    for (i = 0; i < shows.length; i++) {

        /*---------List-Container-----------*/

        const showList = document.createElement("li");
        showList.classList.add("shows-list__li");

        /*---------Date-Container-----------*/

        const dateContainer = document.createElement("div");
        dateContainer.classList.add("shows-list__li-item");

        const dateHeading = document.createElement("h2");
        dateHeading.innerText = "DATE";

        const date = document.createElement("h3");
        date.setAttribute("id", "date-id")
        date.innerText = shows[i].date;

        /*---------Venue-Container-----------*/

        const venueContainer = document.createElement("div");
        venueContainer.classList.add("shows-list__li-item");

        const venueHeading = document.createElement("h2");

        venueHeading.innerText = "VENUE";

        const venue = document.createElement("h3");

        venue.innerText = shows[i].venue;

        /*---------Location-Container-----------*/

        const locationContainer = document.createElement("div");
        locationContainer.classList.add("shows-list__li-item");

        const locationHeading = document.createElement("h2");

        locationHeading.innerText = "LOCATION";

        const location = document.createElement("h3");

        location.innerText = shows[i].location;

        /*---------Button-Container-----------*/

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("shows-list__li-button");

        const buttonText = document.createElement("button");
       
        buttonText.innerText = "BUY TICKETS";



        showCard.appendChild(tittleContainer);
        tittleContainer.appendChild(tittle);

        showCard.appendChild(subTittleContainer);

        subTittleContainer.appendChild(subTittleDateContainer);
        subTittleDateContainer.appendChild(subTittleDate);

        subTittleContainer.appendChild(subTittleVenueContainer);
        subTittleVenueContainer.appendChild(subTittleVenue);

        subTittleContainer.appendChild(subTittleLocationContainer);
        subTittleLocationContainer.appendChild(subTittleLocation);

        subTittleContainer.appendChild(dummyButtonContainer);
        dummyButtonContainer.appendChild(dummyButtonText);

        showCard.appendChild(showListContainer);

        showListContainer.appendChild(unOrderedListContainer);
        unOrderedListContainer.appendChild(showList);

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


    }



}

renderShowList();
