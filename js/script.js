/* A cross-browser solution to toggle a class on an element */
function toggleClass(element, whichClass) {
  if (element.classList) {
    return element.classList.toggle(whichClass);
  } else {
    // For IE9
    var classes = element.className.split(" ");
    var i = classes.indexOf(whichClass);
    var added = false;
    if (i >= 0) classes.splice(i, 1);
    else {
      classes.push(whichClass);
      added = true;
    }
    element.className = classes.join(" ");
    return added;
  }
}

/* Create a var for menu-icon. Using querySelector() because we know its only one element. */
const menuIcon = document.querySelector(".menu-icon");

/* creates var for navbar from HTML file */
const navBar = document.querySelector(".navbar");

/*
Create event listener for click.
We need to do this regardless of screen width, because it can change after the page has loaded.
(The user can resize the browser, or tilt their phone/tablet sideways.)
*/
console.log("Setting up event listener");
menuIcon.addEventListener("click", function () {
  console.log("click!");

  /* create a const/var to apply only to the mobile media-query */
  const mq = window.matchMedia("(max-width: 735px)");

  if (mq.matches) {
    /* the code below will only execute when the screen is sufficiently narrow (e.g. on mobile devices) */

    /* if we're hiding the navBar now */
    if (toggleClass(navBar, "hidden-on-mobile")) {
      this.innerHTML = "Menu";
    } else {
      /* 'this' = menuIcon, and changes its text to "X" */
      this.innerHTML = "X";
    }
  }
}); /* closes the clicker function */
