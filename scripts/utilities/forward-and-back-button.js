const move = (function () {
  let currentIndex = 0;
  const crewData = [
    {
      name: "Douglas Hurley",
      images: {
        png: "../assets/crew/image-douglas-hurley.png",
        webp: "../assets/crew/image-douglas-hurley.webp",
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      images: {
        png: "../assets/crew/image-mark-shuttleworth.png",
        webp: "../assets/crew/image-mark-shuttleworth.webp",
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      images: {
        png: "../assets/crew/image-victor-glover.png",
        webp: "../assets/crew/image-victor-glover.webp",
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      images: {
        png: "../assets/crew/image-anousheh-ansari.png",
        webp: "../assets/crew/image-anousheh-ansari.webp",
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];
  const arrlength = crewData.length;

  // Internal function to update content
  function update() {
    renderStyles();

    renderDestination.crew(crewData[currentIndex]);
  }

  const nonLooping = (function () {
    // Move forward
    function goForward() {
      if (currentIndex >= arrlength - 1) return;
      currentIndex++;
      update();
    }

    // Move back
    function goBack() {
      if (currentIndex <= 0) return;
      currentIndex--;
      update();
    }

    return {
      next: goForward,
      prev: goBack,
    };
  })();

  const looping = (function () {
    function goForward() {
      currentIndex = (currentIndex + 1) % arrlength;
      update();
    }

    // Move back
    function goBack() {
      currentIndex = (currentIndex - 1 + arrlength) % arrlength;
      update();
    }

    return {
      next: goForward,
      prev: goBack,
    };
  })();

  function renderStyles() {
    const indicators = document.querySelectorAll(".indicator");

    indicators.forEach((b) => {
      b.classList.remove("indicator--selected");
    });

    const indicator = indicators[currentIndex];

    indicator.classList.add("indicator--selected");
  }

  const renderDestination = (function () {
    function crew(data) {
      document.getElementById("img-webp").srcset = data.images.webp;
      document.getElementById("img-png").src = data.images.png;

      document.getElementById("name").textContent = data.name;
      document.getElementById("role").textContent = data.role;
      document.getElementById("bio").textContent = data.bio;
    }

    return {
      crew,
    };
  })();

  function initialize() {
    update();
  }

  return {
    looping,
    nonLooping,
    initialize,
  };
})();

export default move;
