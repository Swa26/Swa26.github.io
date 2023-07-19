var now = document.addEventListener("click", () => {
  var form = document.getElementById("searchbar").value;
  var form_value = form;
  var search = document.getElementById("search").value;
  localStorage.setItem("myValue", form_value);
  localStorage.setItem("myValue1", search);
});

const images = [];
images[0] = "images/img1.jpg";
images[1] = "images/img2.jpg";
images[2] = "images/img3.jpg";
images[3] = "images/img4.jpg";

window.onload = function () {
  const random = Math.floor(Math.random() * images.length);
  document.getElementById(
    "container1"
  ).style.backgroundImage = `url(${images[random]})`;
  var button1 = (document.getElementById("button1").style.backgroundColor =
    "#032541");
  var button1 = (document.getElementById("button1").style.color = "white");
  latestTrailer1();
  popularBTN1();
  freeBTN1();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTYwZjI2MjQ5M2ZiOTZlNjE1NWE5NjQzYWI3ZmRjNiIsInN1YiI6IjY0OWU5YjJlNWFiYTMyMDBmZmRiNmYxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qR1YQw21ApKCJkiYOU18a-LeDYPUuvfn1yBKqN1Xwzg",
    },
  };
  getMovies(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  function getMovies(url, options) {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        renderCharacters(data.results);
      });
  }
};

function ButtonColour1() {
  var btn = (document.getElementById("card1").innerHTML = " ");

  var button1 = (document.getElementById("button1").style.backgroundColor =
    "#032541");
  var button2 = (document.getElementById("button2").style.backgroundColor =
    "white");
  var button1 = (document.getElementById("button1").style.color = "white");
  var button2 = (document.getElementById("button2").style.color = "#032541");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTYwZjI2MjQ5M2ZiOTZlNjE1NWE5NjQzYWI3ZmRjNiIsInN1YiI6IjY0OWU5YjJlNWFiYTMyMDBmZmRiNmYxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qR1YQw21ApKCJkiYOU18a-LeDYPUuvfn1yBKqN1Xwzg",
    },
  };
  getMovies(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  function getMovies(url, options) {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        renderCharacters(data.results);
      });
  }
}
function ButtonColour2() {
  var btn = (document.getElementById("card1").innerHTML = " ");
  var button1 = (document.getElementById("button1").style.backgroundColor =
    "white");
  var button2 = (document.getElementById("button2").style.backgroundColor =
    "#032541");
  var button1 = (document.getElementById("button1").style.color = "#032541");
  var button2 = (document.getElementById("button2").style.color = "white");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTYwZjI2MjQ5M2ZiOTZlNjE1NWE5NjQzYWI3ZmRjNiIsInN1YiI6IjY0OWU5YjJlNWFiYTMyMDBmZmRiNmYxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qR1YQw21ApKCJkiYOU18a-LeDYPUuvfn1yBKqN1Xwzg",
    },
  };
  getMovies(
    "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
    options
  );
  function getMovies(url, options) {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        renderCharacters(data.results);
      });
  }
}
function latestTrailer1() {
  //var btn1=document.getElementById('card1').innerHTML=" ";
  var button1 = (document.getElementById(
    "latestTrailersBTN1"
  ).style.backgroundColor = "#a9f8c9");
  var button1 = (document.getElementById("latestTrailersBTN1").style.color =
    "black");
  var button2 = (document.getElementById(
    "latestTrailersBTN2"
  ).style.backgroundColor = "transparent");
  var button2 = (document.getElementById("latestTrailersBTN2").style.color =
    "white");
  var button3 = (document.getElementById(
    "latestTrailersBTN3"
  ).style.backgroundColor = "transparent");
  var button3 = (document.getElementById("latestTrailersBTN3").style.color =
    "white");
  var button4 = (document.getElementById(
    "latestTrailersBTN4"
  ).style.backgroundColor = "transparent");
  var button4 = (document.getElementById("latestTrailersBTN4").style.color =
    "white");
}
function latestTrailer2() {
  //var btn1=document.getElementById('card1').innerHTML=" ";
  var button2 = (document.getElementById(
    "latestTrailersBTN2"
  ).style.backgroundColor = "#a9f8c9");
  var button2 = (document.getElementById("latestTrailersBTN2").style.color =
    "black");
  var button1 = (document.getElementById(
    "latestTrailersBTN1"
  ).style.backgroundColor = "transparent");
  var button1 = (document.getElementById("latestTrailersBTN1").style.color =
    "white");
  var button3 = (document.getElementById(
    "latestTrailersBTN3"
  ).style.backgroundColor = "transparent");
  var button3 = (document.getElementById("latestTrailersBTN3").style.color =
    "white");
  var button4 = (document.getElementById(
    "latestTrailersBTN4"
  ).style.backgroundColor = "transparent");
  var button4 = (document.getElementById("latestTrailersBTN4").style.color =
    "white");
}

function latestTrailer3() {
  //var btn1=document.getElementById('card1').innerHTML=" ";
  var button3 = (document.getElementById(
    "latestTrailersBTN3"
  ).style.backgroundColor = "#a9f8c9");
  var button3 = (document.getElementById("latestTrailersBTN3").style.color =
    "black");
  var button1 = (document.getElementById(
    "latestTrailersBTN1"
  ).style.backgroundColor = "transparent");
  var button1 = (document.getElementById("latestTrailersBTN1").style.color =
    "white");
  var button2 = (document.getElementById(
    "latestTrailersBTN2"
  ).style.backgroundColor = "transparent");
  var button2 = (document.getElementById("latestTrailersBTN2").style.color =
    "white");
  var button4 = (document.getElementById(
    "latestTrailersBTN4"
  ).style.backgroundColor = "transparent");
  var button4 = (document.getElementById("latestTrailersBTN4").style.color =
    "white");
}
function latestTrailer4() {
  //var btn1=document.getElementById('card1').innerHTML=" ";
  var button4 = (document.getElementById(
    "latestTrailersBTN4"
  ).style.backgroundColor = "#a9f8c9");
  var button4 = (document.getElementById("latestTrailersBTN4").style.color =
    "black");
  var button1 = (document.getElementById(
    "latestTrailersBTN1"
  ).style.backgroundColor = "transparent");
  var button1 = (document.getElementById("latestTrailersBTN1").style.color =
    "white");
  var button2 = (document.getElementById(
    "latestTrailersBTN2"
  ).style.backgroundColor = "transparent");
  var button2 = (document.getElementById("latestTrailersBTN2").style.color =
    "white");
  var button3 = (document.getElementById(
    "latestTrailersBTN3"
  ).style.backgroundColor = "transparent");
  var button3 = (document.getElementById("latestTrailersBTN3").style.color =
    "white");
}

function popularBTN1() {
  //var btn1=document.getElementById('card1').innerHTML=" ";
  var button1 = (document.getElementById("popularBTN1").style.backgroundColor =
    "#032541");
  var button1 = (document.getElementById("popularBTN1").style.color = "white");
  var button2 = (document.getElementById("popularBTN2").style.backgroundColor =
    "transparent");
  var button2 = (document.getElementById("popularBTN2").style.color = "black");
  var button3 = (document.getElementById("popularBTN3").style.backgroundColor =
    "transparent");
  var button3 = (document.getElementById("popularBTN3").style.color = "black");
  var button4 = (document.getElementById("popularBTN4").style.backgroundColor =
    "transparent");
  var button4 = (document.getElementById("popularBTN4").style.color = "black");
}
function popularBTN2() {
  //var btn1=document.getElementById('card1').innerHTML=" ";
  var button2 = (document.getElementById("popularBTN2").style.backgroundColor =
    "#032541");
  var button2 = (document.getElementById("popularBTN2").style.color = "white");
  var button1 = (document.getElementById("popularBTN1").style.backgroundColor =
    "transparent");
  var button1 = (document.getElementById("popularBTN1").style.color = "black");
  var button3 = (document.getElementById("popularBTN3").style.backgroundColor =
    "transparent");
  var button3 = (document.getElementById("popularBTN3").style.color = "black");
  var button4 = (document.getElementById("popularBTN4").style.backgroundColor =
    "transparent");
  var button4 = (document.getElementById("popularBTN4").style.color = "black");
}

function popularBTN3() {
  //var btn1=document.getElementById('card1').innerHTML=" ";
  var button3 = (document.getElementById("popularBTN3").style.backgroundColor =
    "#032541");
  var button3 = (document.getElementById("popularBTN3").style.color = "white");
  var button1 = (document.getElementById("popularBTN1").style.backgroundColor =
    "transparent");
  var button1 = (document.getElementById("popularBTN1").style.color = "black");
  var button2 = (document.getElementById("popularBTN2").style.backgroundColor =
    "transparent");
  var button2 = (document.getElementById("popularBTN2").style.color = "black");
  var button4 = (document.getElementById("popularBTN4").style.backgroundColor =
    "transparent");
  var button4 = (document.getElementById("popularBTN4").style.color = "black");
}
function popularBTN4() {
  //var btn1=document.getElementById('card1').innerHTML=" ";
  var button4 = (document.getElementById("popularBTN4").style.backgroundColor =
    "#032541");
  var button4 = (document.getElementById("popularBTN4").style.color = "white");
  var button1 = (document.getElementById("popularBTN1").style.backgroundColor =
    "transparent");
  var button1 = (document.getElementById("popularBTN1").style.color = "black");
  var button2 = (document.getElementById("popularBTN2").style.backgroundColor =
    "transparent");
  var button2 = (document.getElementById("popularBTN2").style.color = "black");
  var button3 = (document.getElementById("popularBTN3").style.backgroundColor =
    "transparent");
  var button3 = (document.getElementById("popularBTN3").style.color = "black");
}

function freeBTN1() {
  var button1 = (document.getElementById("freeBTN1").style.backgroundColor =
    "#032541");
  var button1 = (document.getElementById("freeBTN1").style.color = "white");
  var button2 = (document.getElementById("freeBTN2").style.backgroundColor =
    "white");
  var button2 = (document.getElementById("freeBTN2").style.color = "#032541");
}
function freeBTN2() {
  var button1 = (document.getElementById("freeBTN1").style.backgroundColor =
    "white");
  var button1 = (document.getElementById("freeBTN1").style.color = "#032541");
  var button2 = (document.getElementById("freeBTN2").style.backgroundColor =
    "#032541");
  var button2 = (document.getElementById("freeBTN2").style.color = "white");
}

var form = document.getElementById("searchbar");
var search = document.getElementById("search");

const cardsContainer = document.querySelector("#cards-container");
function renderCharacters(characters) {
  characters.forEach((character) => {
    const {
      title,
      name,
      poster_path,
      release_date,
      first_air_date,
      vote_average,
    } = character;
    var image1 = "https://image.tmdb.org/t/p/w500" + poster_path;
    const div = document.createElement("div");
    const image = document.createElement("img");
    const nameMovie = document.createElement("h6");
    const species = document.createElement("p");
    const voting = document.createElement("div");
    const voting_p = document.createElement("p");

    div.id = "card1";
    image.classList = "card-img1";
    voting_p.id = "vote";
    image.src = image1;
    const totalvotes = (vote_average * 10).toFixed(0);
    if (title) {
      nameMovie.innerText = title;
    } else {
      nameMovie.innerText = name;
    }
    if (first_air_date) {
      const date = new Date(release_date);
      let newDate = date.toDateString();
      let arr = newDate.split(" ");
      let newDate2 = arr[1] + " " + arr[2] + " " + arr[3];
      species.innerText = `${newDate2}`;
    } else {
      const date = new Date(release_date);
      let newDate = date.toDateString();
      let arr = newDate.split(" ");
      let newDate2 = arr[1] + " " + arr[2] + " " + arr[3];
      species.innerText = `${newDate2}`;
    }

    voting_p.innerText = `${totalvotes}%`;

    div.appendChild(image);
    div.appendChild(nameMovie);
    div.appendChild(species);
    div.appendChild(voting);
    voting.appendChild(voting_p);

    cardsContainer.appendChild(div);
  });
}

/*/*****************************NEW TRAILER CARD SECTION*********************************************/

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTYwZjI2MjQ5M2ZiOTZlNjE1NWE5NjQzYWI3ZmRjNiIsInN1YiI6IjY0OWU5YjJlNWFiYTMyMDBmZmRiNmYxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qR1YQw21ApKCJkiYOU18a-LeDYPUuvfn1yBKqN1Xwzg",
  },
};
getMovies(
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  options
);
function getMovies(url, options) {
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data.results);
      renderCharacters1(data.results);
    });
}
const cardsContainer1 = document.querySelector("#cards-container1");
function renderCharacters1(characters) {
  characters.forEach((character) => {
    const {
      title,
      name,
      poster_path,
      release_date,
      first_air_date,
      vote_average,
      id,
    } = character;
    var image2 = "https://image.tmdb.org/t/p/w500" + poster_path;
    const div1 = document.createElement("div");
    const image1 = document.createElement("img");
    const nameMovie1 = document.createElement("h6");
    const like1 = document.createElement("button");

    div1.id = "card2";
    image1.classList = "card-img2";
    image1.src = image2;
    like1.classList = "play";
    like1.id = id;

    if (title) {
      nameMovie1.innerText = title;
    } else {
      nameMovie1.innerText = name;
    }

    like1.innerHTML = "<i class='bi bi-play-fill'></i>";
    div1.appendChild(image1);
    div1.appendChild(nameMovie1);
    div1.appendChild(like1);
    cardsContainer1.appendChild(div1);

    document.getElementById(id).addEventListener("click", () => {
      console.log(id);
      openNav(character);
    });
  });
}
const options1 = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTYwZjI2MjQ5M2ZiOTZlNjE1NWE5NjQzYWI3ZmRjNiIsInN1YiI6IjY0OWU5YjJlNWFiYTMyMDBmZmRiNmYxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qR1YQw21ApKCJkiYOU18a-LeDYPUuvfn1yBKqN1Xwzg",
  },
};
const overLayContent = document.getElementById("overlay-content");
function openNav(movie) {
  var id = movie.id;
  fetch(
    "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
    options1
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response.results);
      if (response) {
        document.getElementById("myNav").style.width = "100%";
        if (response.results.length > 0) {
          var embed = [];
          response.results.forEach((video) => {
            let { name, key, site } = video;
            if (site == "YouTube") {
              embed.push(`
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                `);
            }
          });
          overLayContent.innerHTML = embed.join("");
        } else {
        }
      }
    });
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/*/*****************************NEW POPULAR CARD SECTION*********************************************/

const options2 = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTYwZjI2MjQ5M2ZiOTZlNjE1NWE5NjQzYWI3ZmRjNiIsInN1YiI6IjY0OWU5YjJlNWFiYTMyMDBmZmRiNmYxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qR1YQw21ApKCJkiYOU18a-LeDYPUuvfn1yBKqN1Xwzg",
  },
};
getMovies2(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options2
);
function getMovies2(url, options) {
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      renderCharacters2(data.results);
    });
}
const cardsContainer2 = document.querySelector("#cards-container2");
function renderCharacters2(characters) {
  characters.forEach((character) => {
    const {
      title,
      name,
      poster_path,
      release_date,
      first_air_date,
      vote_average,
    } = character;
    var popular_image1 = "https://image.tmdb.org/t/p/w500" + poster_path;
    const popular_div = document.createElement("div");
    const popular_image = document.createElement("img");
    const popular_nameMovie = document.createElement("h6");
    const popular_species = document.createElement("p");
    const popular_voting = document.createElement("div");
    const popular_voting_p = document.createElement("p");

    popular_div.id = "card3";
    popular_image.classList = "card-img3";
    popular_voting_p.id = "vote3";
    popular_image.src = popular_image1;
    const totalvotes = (vote_average * 10).toFixed(0);
    if (title) {
      popular_nameMovie.innerText = title;
    } else {
      popular_nameMovie.innerText = name;
    }
    if (first_air_date) {
      const date = new Date(release_date);
      let newDate = date.toDateString();
      let arr = newDate.split(" ");
      let newDate2 = arr[1] + " " + arr[2] + " " + arr[3];
      popular_species.innerText = `${newDate2}`;
    } else {
      const date = new Date(release_date);
      let newDate = date.toDateString();
      let arr = newDate.split(" ");
      let newDate2 = arr[1] + " " + arr[2] + " " + arr[3];
      popular_species.innerText = `${newDate2}`;
    }

    popular_voting_p.innerText = `${totalvotes}%`;

    popular_div.appendChild(popular_image);
    popular_div.appendChild(popular_nameMovie);
    popular_div.appendChild(popular_species);
    popular_div.appendChild(popular_voting);
    popular_voting.appendChild(popular_voting_p);

    cardsContainer2.appendChild(popular_div);
  });
}

/*/*****************************NEW Free To Watch CARD SECTION*********************************************/

const options3 = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTYwZjI2MjQ5M2ZiOTZlNjE1NWE5NjQzYWI3ZmRjNiIsInN1YiI6IjY0OWU5YjJlNWFiYTMyMDBmZmRiNmYxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qR1YQw21ApKCJkiYOU18a-LeDYPUuvfn1yBKqN1Xwzg",
  },
};
getMovies3(
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  options3
);
function getMovies3(url, options) {
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      renderCharacters3(data.results);
    });
}
const cardsContainer3 = document.querySelector("#cards-container3");
function renderCharacters3(characters) {
  characters.forEach((character) => {
    const {
      title,
      name,
      poster_path,
      release_date,
      first_air_date,
      vote_average,
    } = character;
    var free_image1 = "https://image.tmdb.org/t/p/w500" + poster_path;
    const free_div = document.createElement("div");
    const free_image = document.createElement("img");
    const free_nameMovie = document.createElement("h6");
    const free_species = document.createElement("p");
    const free_voting = document.createElement("div");
    const free_voting_p = document.createElement("p");

    free_div.id = "card4";
    free_image.classList = "card-img4";
    free_voting_p.id = "vote4";
    free_image.src = free_image1;
    const totalvotes = (vote_average * 10).toFixed(0);
    if (title) {
      free_nameMovie.innerText = title;
    } else {
      free_nameMovie.innerText = name;
    }
    if (first_air_date) {
      const date = new Date(release_date);
      let newDate = date.toDateString();
      let arr = newDate.split(" ");
      let newDate2 = arr[1] + " " + arr[2] + " " + arr[3];
      free_species.innerText = `${newDate2}`;
    } else {
      const date = new Date(release_date);
      let newDate = date.toDateString();
      let arr = newDate.split(" ");
      let newDate2 = arr[1] + " " + arr[2] + " " + arr[3];
      free_species.innerText = `${newDate2}`;
    }

    free_voting_p.innerText = `${totalvotes}%`;

    free_div.appendChild(free_image);
    free_div.appendChild(free_nameMovie);
    free_div.appendChild(free_species);
    free_div.appendChild(free_voting);
    free_voting.appendChild(free_voting_p);

    cardsContainer3.appendChild(free_div);
  });
}
