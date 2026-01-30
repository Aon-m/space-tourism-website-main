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

    setTimeout(() => {
      renderDestination.destinations(destinationsData[index]);
    }, 400);
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

    setTimeout(() => {
      renderDestination.technology(technologyData[index]);
    }, 400);
  }

  function renderStyles(e) {
    // Button style
    const btn = e.currentTarget;

    changeBtns.forEach((b) => {
      b.classList.remove("button--selected");
      b.classList.remove("button--no-hover-effect");
    });

    btn.classList.add("button--selected");
    btn.classList.add("button--no-hover-effect");

    // Animation
    const subContainer = document.querySelector(".container__sub-container");
    const container = subContainer.querySelector(":scope > .container");
    const textContainer = container.querySelector(
      ":scope > .container__text-content",
    );
    const Children = textContainer.querySelectorAll(
      ":scope > *:not(.container__buttons):not(button)",
    );
    const imageChild = container.querySelector(":scope > .container__image");

    Children.forEach((child) => {
      child.classList.add("fade-out");
      setTimeout(() => {
        child.classList.add("fade-in");
      }, 400);
    });
    imageChild.classList.add("fade-out");
    setTimeout(() => {
      imageChild.classList.add("fade-in");
    }, 400);

    Children.forEach((child) => {
      setTimeout(() => {
        child.classList.remove("fade-out");
      }, 400);
    });
    setTimeout(() => {
      imageChild.classList.remove("fade-out");
    }, 400);
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
      document.getElementById("img-landscape").src = data.images.landscape;
      document.getElementById("img-portrait").srcset = data.images.portrait;

      document.getElementById("name").textContent = data.name;
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
