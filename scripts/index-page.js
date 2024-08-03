let comments = [
    {
        name: "Victor Pinto",
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        time: "11/02/2023"
    },
    {
        name: "Christina Cabrera",
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        time: "11/02/2023"
    },
    {
        name: "Isaac Tadesse",
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        time: "10/20/2023"
    }
];

const commentForm = document.querySelector(".comments__forms-content");
const commentCard = document.querySelector(".comments-list");

function loopAndComment() {
    commentCard.innerHTML = "";

    for (let i = 0; i < comments.length; i++) {
        const commentCards = document.createElement('li');
        commentCards.classList.add('comment-item');

        const person = document.createElement('h3');
        person.classList.add('name');
        person.innerText = comments[i].name;

        const comment = document.createElement('p');
        comment.classList.add('comment');
        comment.innerText = comments[i].text;

        const currentTime = document.createElement('span');
        currentTime.classList.add('time');
        currentTime.innerText = comments[i].time;

        commentCards.appendChild(person);
        commentCards.appendChild(comment);
        commentCards.appendChild(currentTime);

        commentCard.appendChild(commentCards);
    }
} 

commentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("comment submitted");

    const personName = event.target.fullName.value;
    const personComment = event.target.comments.value;

    const newComment = {
        name: personName,
        text: personComment,
        time: new Date().toLocaleDateString()
    };

    console.log(newComment);

    comments.unshift(newComment);

    loopAndComment();
    event.target.reset();
});

loopAndComment();
