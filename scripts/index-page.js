import BandSiteApi from "./band-site-api.js";
// let comments = [
//     {
//         name: "Victor Pinto",
//         comments: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//         time: "11/02/2023"
//     },
//     {
//         name: "Christina Cabrera",
//         comments: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//         time: "11/02/2023"
//     },
//     {
//         name: "Isaac Tadesse",
//         comments: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//         time: "10/20/2023"
//     }
// ];
const bandSiteApi = new BandSiteApi("f1f929f6-6089-4f6c-92cb-5e89ace37ffb");
const commentForm = document.querySelector(".comments-forms__content");
const commentCard = document.querySelector(".comments-list");

async function getPostsAndAppendToList() {
  const comments = await bandSiteApi.getCommentsData();

  commentCard.innerHTML = "";

  for (let i = 0; i < comments.length; i++) {
    const commentItem = document.createElement("div");
    commentItem.classList.add("comments-list__item");

    const commentImgContainer = document.createElement("div");
    commentImgContainer.classList.add("comments-list__img");

    const commentImg = document.createElement("div");
    commentImg.classList.add("comments-list__img-color");

    const commentText = document.createElement("div");
    commentText.classList.add("comments-list__text");

    const textFirst = document.createElement("div");
    textFirst.classList.add("comments-list__text-first");

    const person = document.createElement("h3");
    person.classList.add("name");
    person.innerText = comments[i].name;

    const currentTime = document.createElement("h2");
    currentTime.classList.add("time");
    currentTime.innerText = new Date(
      comments[i].timestamp
    ).toLocaleDateString();

    const textSecond = document.createElement("div");
    textSecond.classList.add("comments-list__text-second");

    const comment = document.createElement("p");
    comment.classList.add("comment");
    comment.innerText = comments[i].comment;

    textFirst.appendChild(person);
    textFirst.appendChild(currentTime);
    textSecond.appendChild(comment);

    commentText.appendChild(textFirst);
    commentText.appendChild(textSecond);

    commentItem.appendChild(commentImgContainer);
    commentItem.appendChild(commentText);

    commentImgContainer.appendChild(commentImg);

    commentCard.appendChild(commentItem);
  }
}

commentForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const personName = event.target.fullName.value;
  const personComment = event.target.comments.value;

  const nameBox = document.getElementById("fullName");

  if (personName.value == "") {
    nameBox.classList.add("error");
    return;
  } else {
    nameBox.classList.remove("error");
  }

  const newComment = {
    name: personName,
    comment: personComment,
  };

  const response = await bandSiteApi.postCommentsData(newComment);

  getPostsAndAppendToList();
  event.target.reset();
});

getPostsAndAppendToList();
