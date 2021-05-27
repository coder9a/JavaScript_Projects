const reviews = [
    {
        id:1,
        name:"Jason Stathon",
        job:"Actor",
        img:"https://variety.com/wp-content/uploads/2020/12/Jason-Statham.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint, sequi perferendis magnam delectus, quod cupiditate molestias quae aliquid dicta reprehenderit ad enim dolores totam quibusdam id dolorem fugiat consequuntur."
    },
    {
        id:2,
        name:"Harry Potter",
        job:"Actor",
        img:"https://www.irishtimes.com/polopoly_fs/1.3101809.1497028489!/image/image.jpg_gen/derivatives/box_460_245/image.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint, sequi perferendis magnam delectus, quod cupiditate molestias quae aliquid dicta reprehenderit ad enim dolores totam quibusdam id dolorem fugiat consequuntur."
    },
    {
        id:3,
        name:"Andrew Carnegi",
        job:"Industrialist",
        img:"https://upload.wikimedia.org/wikipedia/commons/b/b5/Andrew_Carnegie%2C_three-quarter_length_portrait%2C_seated%2C_facing_slightly_left%2C_1913.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint, sequi perferendis magnam delectus, quod cupiditate molestias quae aliquid dicta reprehenderit ad enim dolores totam quibusdam id dolorem fugiat consequuntur."
    },
    {
        id:4,
        name:"Lara Croft",
        job:"Archeologist",
        img:"https://cdn.vox-cdn.com/thumbor/hV2lEUbgD2AvVjCD02q1f92SSLE=/0x0:2700x1131/920x613/filters:focal(1370x148:1802x580):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59043705/tombraider1.0.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint, sequi perferendis magnam delectus, quod cupiditate molestias quae aliquid dicta reprehenderit ad enim dolores totam quibusdam id dolorem fugiat consequuntur."
    },
    {
        id:5,
        name:"Peter Parker",
        job:"Photographer",
        img:"https://www.gannett-cdn.com/-mm-/cc053686530ce446f0a27dc352961fac33dd12ac/c=1144-81-2630-920/local/-/media/2017/06/26/USATODAY/USATODAY/636340759929048028-XXX-SPIDER-MAN-HOMECOMING-87249008.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint, sequi perferendis magnam delectus, quod cupiditate molestias quae aliquid dicta reprehenderit ad enim dolores totam quibusdam id dolorem fugiat consequuntur."
    },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});