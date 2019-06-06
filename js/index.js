const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.querySelectorAll("nav a");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].text = siteContent.nav[`nav-item-${i + 1}`];
  navLinks[i].style.color = "green";
}

let childLink = document.createElement("a");
childLink.setAttribute("href", "#");
childLink.textContent = "Secret Child Link";
navLinks[0].appendChild(childLink);

let preChildLink = document.createElement("a");
preChildLink.setAttribute("href", "#");
preChildLink.textContent = "Secret preChild Link";
navLinks[0].prepend(preChildLink);

let ctaHeaderOne = document.querySelector(".cta h1");
ctaHeaderOne.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent.cta.button;

let ctaImage = document.querySelector(".cta #cta-img");
ctaImage.setAttribute('src', siteContent.cta["img-src"]);


let mainContentHeaders = document.querySelectorAll(".main-content h4");

let headersToAdd = [];
Object.keys(siteContent["main-content"]).forEach(function (element) {

  if (element.includes("h4")) {
    headersToAdd.push(siteContent["main-content"][element]);
  }

});

for (let i = 0; i < headersToAdd.length; i++) {
  mainContentHeaders[i].textContent = headersToAdd[i];
}

let mainContentParagraphs = document.querySelectorAll(".main-content p");

let paragraphsToAdd = [];
Object.keys(siteContent["main-content"]).forEach(function (element) {

  if (element.includes("content")) {
    paragraphsToAdd.push(siteContent["main-content"][element]);
  }

});

for (let i = 0; i < paragraphsToAdd.length; i++) {
  mainContentParagraphs[i].textContent = paragraphsToAdd[i];
}

let mainContentImage = document.querySelector(".main-content .middle-img");
mainContentImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];

let contactParagraphs = document.querySelectorAll(".contact p");

let contactParagraphsToAdd = [];

Object.keys(siteContent["contact"]).forEach(function (element) {

  if (!element.includes("h4")) {
    contactParagraphsToAdd.push(siteContent["contact"][element]);
  }

});


for (let i = 0; i < contactParagraphsToAdd.length; i++) {
  contactParagraphs[i].textContent = contactParagraphsToAdd[i];
}

let footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;