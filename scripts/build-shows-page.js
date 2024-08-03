let shows=[
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

const showCard = document.querySelector(".shows-container");

function renderShowList(){

 for(i=0; i<shows.length; i++){
    const showList = document.createElement("li");
    showList.classList.add("show-list");

    /*---------Date-Container-----------*/
    
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("day-div");

    const dateHeading = document.createElement("h2");
    dateHeading.classList.add("date-heading");
    dateHeading.innerText = "DATE";

    const date = document.createElement("h2");
    date.classList.add("date-tag");
    date.innerText = shows[i].date;

    /*---------Venue-Container-----------*/

    const venueContainer = document.createElement("div");
    venueContainer.classList.add("venue-div");

    const venueHeading = document.createElement("h2");
    venueHeading.classList.add("venue-heading");
    venueHeading.innerText = "VENUE";

    const venue = document.createElement("h2");
    venue.classList.add("venue-tag");
    venue.innerText = shows[i].venue;

    /*---------Location-Container-----------*/

    const locationContainer = document.createElement("div");
    locationContainer.classList.add("location-div");

    const locationHeading = document.createElement("h2");
    locationHeading.classList.add("location-heading");
    locationHeading.innerText = "LOCATION";

    const location = document.createElement("h2");
    location.classList.add("location-tag");
    location.innerText = shows[i].location;

    /*---------Button-Container-----------*/

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-div");

    const buttonText = document.createElement("button");
    buttonText.classList.add("button-text");
    buttonText.innerText = "BUY TICKETS";



    

    showCard.appendChild(showList);

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
    locationContainer.appendChild(buttonText);

 
 }
    


}

renderShowList();
