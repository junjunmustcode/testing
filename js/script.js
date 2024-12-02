const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//obj
const portfolioData = {
  logo: "<img src='./assets/logo.png' alt='Logo' />",
  helloText: "Hello I'm",
  firstName: "John",
  lastName: "Jhommel",
  bioText: "I'm an IT student who loves gaming and is passionate about exploring how technology can improve different areas, like education and business. I enjoy learning how tools like AI and ERP systems can help students perform better and make organizations run more smoothly. Through my studies, I aim to discover new ways technology can make things easier and more efficient.",
  skillsHeading: "My Skills",
  skills: [
    { imgSrc: "assets/skills/c-sharp.png", alt: "C#" },
    { imgSrc: "assets/skills/css-3.png", alt: "CSS" },
    { imgSrc: "assets/skills/html-5.png", alt: "HTML" },
    { imgSrc: "assets/skills/java-script.png", alt: "JavaScript" },
    { imgSrc: "assets/skills/mockplus.jpg", alt: "Mockplus" },
    { imgSrc: "assets/skills/python.png", alt: "Python" }
  ],
  projectsHeading: "My Projects",
  projects: [
    { title: "Text Photo Effect", tech: "Adobe Photoshop" },
    { title: "Creepy Portfolio", tech: "HTML & CSS" },
    { title: "The Worst Maze Game of Hero", tech: "Unity, C#" },
    { title: "CalCuRate", tech: "Android Studio, Java" },
    { title: "Log In Form", tech: "Figma" },
    { title: "Message App", tech: "Android Studio, Java" }
  ],
  footerName: "John Jhommel Vitto",
  socialLinks: [
    { href: "#", icon: "facebook-icon.svg", alt: "Facebook" },
    { href: "#", icon: "icon/email.png", alt: "Email" },
    { href: "#", icon: "icon/instagram.png", alt: "Instagram" },
    { href: "#", icon: "github-icon.svg", alt: "GitHub" },
    { href: "#", icon: "icon/telegram.png", alt: "Telegram" }
  ]
};

// Function to populate HTML
// Function to populate HTML
function populateHTML() {
  // Populate header
  document.querySelector("#logo").innerHTML = portfolioData.logo;
  document.querySelector(".hello-text").textContent = portfolioData.helloText;
  document.querySelector(".first-name").textContent = portfolioData.firstName;
  document.querySelector(".last-name").textContent = portfolioData.lastName;
  document.querySelector(".bio-text").textContent = portfolioData.bioText;

  // Populate skills section
  document.querySelector(".skills-heading").textContent = portfolioData.skillsHeading;
  const skillsList = document.querySelector(".skills-list");
  portfolioData.skills.forEach(skill => {
    const imgElement = document.createElement("img");
    imgElement.src = skill.imgSrc;
    imgElement.alt = skill.alt;
    skillsList.appendChild(imgElement);
  });

  // Populate projects section
  document.querySelector(".projects-heading").textContent = portfolioData.projectsHeading;
    const projectList = document.querySelector(".project-list");
    portfolioData.projects.forEach(project => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("card");
      projectDiv.innerHTML = `
        <div class="project-info">
          <div class="project-bio">
            <h3>${project.title}</h3>
            <p>${project.tech}</p>
          </div>
          <div class="project-link">
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fas fa-globe"></i></a>
          </div>
        </div>
      `;
      projectList.appendChild(projectDiv);
    });

  // Populate footer
  document.querySelector(".footer-name").textContent = portfolioData.footerName;
  const socialDiv = document.querySelector(".social");
  portfolioData.socialLinks.forEach(link => {
    const socialLink = document.createElement("a");
    socialLink.href = link.href;
    socialLink.innerHTML = `<img src='./assets/${link.icon}' alt='${link.alt}' />`;
    socialDiv.appendChild(socialLink);
  });
}

// Call function to populate content
populateHTML();

// Hide all sections on window load


// Function to show the home section when the "Build My Portfolio" button is clicked


window.onload = function() {
  // Hide all elements except the build button
  const bodyElements = document.body.children;
  for (let i = 0; i < bodyElements.length; i++) {
    if (bodyElements[i].id !== 'build') {
      bodyElements[i].style.display = 'none';
    }
  }
};



// Flag to check if the portfolio has been built
let isBuilt = false;

function build() {
  const bodyElements = document.body.children;
  const homeSection = document.getElementById('home');
  const profileImage = homeSection.querySelector('.profile-image');
  const nameElements = homeSection.querySelectorAll('h2'); // Select both first-name and last-name
  const bioText = homeSection.querySelector('.bio-text'); // Select the bio text
  const h1Element = document.querySelector('#logo'); // The h1 element in the navbar
  const learnMoreButton = homeSection.querySelector('.btn-secondary'); // Select the "Learn more" button
  const changeBtn = document.getElementById('Change');
  const nav = document.getElementById('nav');

  if (!isBuilt) {
    // Hide all sections except the home section
    for (let i = 0; i < bodyElements.length; i++) {
      if (bodyElements[i].id !== 'hero') {
        bodyElements[i].style.display = 'none'; // Hide all sections except home
      } else {
        bodyElements[i].style.display = 'block'; // Show the home section
      }
    }

    // Dynamically insert content from portfolioData into HTML
    document.querySelector('#logo').innerHTML = portfolioData.logo; // Insert logo
    document.querySelector('.hello-text').textContent = portfolioData.helloText; // Insert hello text
    document.querySelector('.first-name').textContent = portfolioData.firstName; // Insert first name
    document.querySelector('.last-name').textContent = portfolioData.lastName; // Insert last name
    document.querySelector('.bio-text').textContent = portfolioData.bioText; // Insert bio text

    // Apply left alignment for the content
    homeSection.style.textAlign = 'left'; // Align the home section content to the left

    // Profile Image: Float Left and remove any transition animation
    profileImage.style.float = 'left'; // Align the profile image to the left
    profileImage.style.marginRight = '90vh'; // Add margin to the right of the image
    profileImage.style.animation = 'none'; // Disable any transition animations for the profile image

    // Make sure text is aligned left in h1 and h2 elements
    if (h1Element) {
      h1Element.style.float = 'left'; // Align h1 (logo) to the left
    }
    nameElements.forEach((h2) => {
      h2.style.textAlign = 'left'; // Align name (h2) text to the left
    });

    // Ensure bio text is aligned left
    if (bioText) {
      bioText.style.textAlign = 'left'; // Align bio text to the left
    }

    // Set the font family for h1, h2, and bio text to Arial
    h1Element.style.fontFamily = 'Arial, sans-serif'; // Font for h1 (logo)
    nameElements.forEach((h2) => {
      h2.style.fontFamily = 'Arial, sans-serif'; // Font for h2 (name)
    });

    // Set font-size to 10px for h1, h2, and bio-text
    h1Element.style.fontSize = '10px'; // Font size for h1 (logo)
    nameElements.forEach((h2) => {
      h2.style.fontSize = '10px'; // Font size for h2 (name)
    });
    document.querySelector('.bio-text').style.fontSize = '10px'; // Font size for bio text

    // Hide the "Learn more" button
    if (learnMoreButton) {
      learnMoreButton.style.display = 'none'; // Hide the button
    }

    isBuilt = true;
  } else {
    // Reset and show all sections again if the portfolio has already been built
    for (let i = 0; i < bodyElements.length; i++) {
      bodyElements[i].style.display = 'block'; // Show all sections again
    }

    // Reset the dynamic styles applied to home section
    profileImage.style.float = ''; // Reset float for profile image
    profileImage.style.marginRight = ''; // Reset margin for profile image
    profileImage.style.transition = ''; // Reset transition for profile image

    nameElements.forEach((h2) => {
      h2.style.textAlign = ''; // Reset text alignment for h2 elements
      h2.style.fontFamily = ''; // Reset font-family for h2 elements
      h2.style.fontSize = ''; // Reset font size for h2 elements
    });
    if (h1Element) {
      h1Element.style.float = ''; // Reset float for h1
      h1Element.style.fontFamily = ''; // Reset font-family for h1
      h1Element.style.fontSize = ''; // Reset font size for h1
    }

    if (bioText) {
      bioText.style.textAlign = ''; // Reset text alignment for bio text
    }
    document.querySelector('.bio-text').style.fontSize = ''; // Reset font size for bio text
    homeSection.style.textAlign = ''; // Reset text alignment for the home section

    // Show the "Learn more" button again
    if (learnMoreButton) {
      learnMoreButton.style.display = ''; // Reset display to show the button
    }

    isBuilt = false;
  }
  changeBtn.style.display="block";
  nav.style.display="none";
}


function change(){
  const bodyElements = document.body.children;
  const homeSection = document.getElementById('home');
  const profileImage = homeSection.querySelector('.profile-image');
  const nameElements = homeSection.querySelectorAll('h2'); // Select both first-name and last-name
  const bioText = homeSection.querySelector('.bio-text'); // Select the bio text
  const h1Element = document.querySelector('#logo'); // The h1 element in the navbar
  const learnMoreButton = homeSection.querySelector('.btn-secondary'); // Select the "Learn more" button
  const changeBtn = document.getElementById('Change');
  const nav = document.getElementById('nav');
  const build = document.getElementById('build');
  const theme = document.getElementById('theme');
  const hover =  document.getElementById('arrow-down');

  if (!isBuilt) {
    // Hide all sections except the home section
    for (let i = 0; i < bodyElements.length; i++) {
      if (bodyElements[i].id !== 'hero') {
        bodyElements[i].style.display = 'none'; // Hide all sections except home
      } else {
        bodyElements[i].style.display = 'block'; // Show the home section
      }
    }

    // Dynamically insert content from portfolioData into HTML
    document.querySelector('#logo').innerHTML = portfolioData.logo; // Insert logo
    document.querySelector('.hello-text').textContent = portfolioData.helloText; // Insert hello text
    document.querySelector('.first-name').textContent = portfolioData.firstName; // Insert first name
    document.querySelector('.last-name').textContent = portfolioData.lastName; // Insert last name
    document.querySelector('.bio-text').textContent = portfolioData.bioText; // Insert bio text

    // Apply left alignment for the content
    homeSection.style.textAlign = 'left'; // Align the home section content to the left

    // Profile Image: Float Left and remove any transition animation
    profileImage.style.float = 'left'; // Align the profile image to the left
    profileImage.style.marginRight = '90vh'; // Add margin to the right of the image
    profileImage.style.animation = 'none'; // Disable any transition animations for the profile image

    // Make sure text is aligned left in h1 and h2 elements
    if (h1Element) {
      h1Element.style.float = 'left'; // Align h1 (logo) to the left
    }
    nameElements.forEach((h2) => {
      h2.style.textAlign = 'left'; // Align name (h2) text to the left
    });

    // Ensure bio text is aligned left
    if (bioText) {
      bioText.style.textAlign = 'left'; // Align bio text to the left
    }

    // Set the font family for h1, h2, and bio text to Arial
    h1Element.style.fontFamily = 'Arial, sans-serif'; // Font for h1 (logo)
    nameElements.forEach((h2) => {
      h2.style.fontFamily = 'Arial, sans-serif'; // Font for h2 (name)
    });

    // Set font-size to 10px for h1, h2, and bio-text
    h1Element.style.fontSize = '10px'; // Font size for h1 (logo)
    nameElements.forEach((h2) => {
      h2.style.fontSize = '10px'; // Font size for h2 (name)
    });
    document.querySelector('.bio-text').style.fontSize = '10px'; // Font size for bio text

    // Hide the "Learn more" button
    if (learnMoreButton) {
      learnMoreButton.style.display = 'none'; // Hide the button
    }

    isBuilt = true;
  } else {
    // Reset and show all sections again if the portfolio has already been built
    for (let i = 0; i < bodyElements.length; i++) {
      bodyElements[i].style.display = 'block'; // Show all sections again
    }

    // Reset the dynamic styles applied to home section
    profileImage.style.float = ''; // Reset float for profile image
    profileImage.style.marginRight = ''; // Reset margin for profile image
    profileImage.style.transition = ''; // Reset transition for profile image

    nameElements.forEach((h2) => {
      h2.style.textAlign = ''; // Reset text alignment for h2 elements
      h2.style.fontFamily = ''; // Reset font-family for h2 elements
      h2.style.fontSize = ''; // Reset font size for h2 elements
    });
    if (h1Element) {
      h1Element.style.float = ''; // Reset float for h1
      h1Element.style.fontFamily = ''; // Reset font-family for h1
      h1Element.style.fontSize = ''; // Reset font size for h1
    }

    if (bioText) {
      bioText.style.textAlign = ''; // Reset text alignment for bio text
    }
    document.querySelector('.bio-text').style.fontSize = ''; // Reset font size for bio text
    homeSection.style.textAlign = ''; // Reset text alignment for the home section

    // Show the "Learn more" button again
    if (learnMoreButton) {
      learnMoreButton.style.display = ''; // Reset display to show the button
    }

    isBuilt = true;
  }
  changeBtn.style.display="none";
  nav.style.display="";
  build.style.display="none";
  theme.style.display="none";
  showSection();
  hover.style.display='none';
  disablePointerEvents();
}

function disablePointerEvents() {
  const skillImages = document.querySelectorAll('.skills-list img'); // Adjust the selector based on your HTML structure

  skillImages.forEach((img) => {
    img.style.pointerEvents = 'none'; // Disable pointer events
  });
}

function showSection() {
  // Hide all sections first
  const allSections = document.querySelectorAll('#projects, footer'); // Select all sections and footer
  allSections.forEach((section) => {
    section.style.display = 'none'; // Hide all sections
  });

  // Only show the skills section
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    skillsSection.style.display = 'block'; // Show only the skills section
  }
}
function showAll() {
  const bodyElements = document.body.children; // Get all child elements of the body

  // Loop through all elements and set them to display as 'block'
  for (let i = 0; i < bodyElements.length; i++) {
    bodyElements[i].style.display = 'block'; // Show each section
  }
}

function enablePointerEvents() {
  const skillImages = document.querySelectorAll('.skills-list img'); // Adjust the selector based on your HTML structure

  skillImages.forEach((img) => {
    img.style.pointerEvents = ''; // Disable pointer events
  });
}
function add(){
  enablePointerEvents();
  showAll();

  const show = document.getElementById('arrow-down');
  const profileImage = document.querySelector('.profile-image');

  show.style.display="";

  const button1 = document.getElementById('add');
  const button2 = document.getElementById('build');
  const button3 = document.getElementById('Change');
  const theme = document.getElementById('theme');

  button1.style.display="none";
  button2.style.display="none";
  button3.style.display="none";
  theme.style.display="";
  profileImage.style.animation="";
}