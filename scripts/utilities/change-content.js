export const changeContent = (function () {
  const changeBtns = document.querySelectorAll(".button--content-changer");

  function destinations(e, index) {
    const destinationsData = [
      {
        name: "Moon",
        images: {
          png: "../assets/destination/image-moon.png",
          webp: "../assets/destination/image-moon.webp",
        },
        description:
          "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
      },
      {
        name: "Mars",
        images: {
          png: "../assets/destination/image-mars.png",
          webp: "../assets/destination/image-mars.webp",
        },
        description:
          "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months",
      },
      {
        name: "Europa",
        images: {
          png: "../assets/destination/image-europa.png",
          webp: "../assets/destination/image-europa.webp",
        },
        description:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years",
      },
      {
        name: "Titan",
        images: {
          png: "../assets/destination/image-titan.png",
          webp: "../assets/destination/image-titan.webp",
        },
        description:
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years",
      },
    ];

    renderStyles(e);

    renderDestination.destinations(destinationsData[index]);
  }

  function technology(e, index) {
    const technologyData = [
      {
        name: "Launch vehicle",
        images: {
          portrait: "../assets/technology/image-launch-vehicle-portrait.jpg",
          landscape: "../assets/technology/image-launch-vehicle-landscape.jpg",
        },
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      },
      {
        name: "Spaceport",
        images: {
          portrait: "../assets/technology/image-spaceport-portrait.jpg",
          landscape: "../assets/technology/image-spaceport-landscape.jpg",
        },
        description:
          "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      },
      {
        name: "Space capsule",
        images: {
          portrait: "../assets/technology/image-space-capsule-portrait.jpg",
          landscape: "../assets/technology/image-space-capsule-landscape.jpg",
        },
        description:
          "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      },
    ];

    renderStyles(e);

    renderDestination.technology(technologyData[index]);
  }

  function renderStyles(e) {
    changeBtns.forEach((b) => {
      b.classList.remove("button--content-changer--selected");
      b.classList.remove("button--no-hover-effect");
    });

    const btn = e.currentTarget;

    btn.classList.add("button--content-changer--selected");
    btn.classList.add("button--no-hover-effect");
  }
  const renderDestination = (function () {
    function destinations(data) {
      document.getElementById("img-webp").srcset = data.images.webp;
      document.getElementById("img-png").src = data.images.png;

      document.getElementById("name").textContent = data.name;
      document.getElementById("description").textContent = data.description;

      document.getElementById("distance").textContent = data.distance;
      document.getElementById("travel").textContent = data.travel;
    }

    function technology(data) {
      document.getElementById("img-landscape").srcset = data.images.landscape;
      document.getElementById("img-portrait").src = data.images.portrait;

      document.getElementById("name").innerHTML =
        `<h3 class="container__title text--large"><span class="text--small"> The terminology... </span>${data.name}</h3>`;
      document.getElementById("description").textContent = data.description;
    }

    return {
      destinations,
      technology,
    };
  })();

  return {
    destinations,
    technology,
  };
})();
