/*----About section-----*/

// Get references to the "Education" and "Experience" elements by their IDs
const educationLink = document.getElementById("education-link");
const experienceLink = document.getElementById("experience-link");

// Get references to the tab content elements
const educationTabContent = document.querySelector(".Edu-Exp .tab-content");
const experienceTabContent = document.querySelector(".Edu-Exp .tab-content:last-child");

// Add click event listeners to the "Education" and "Experience" links
educationLink.addEventListener("click", function() {
    // Add or remove the "active-link" class for styling
    educationLink.classList.add("active-link");
    experienceLink.classList.remove("active-link");

    // Show the "Education" tab content and hide the "Experience" tab content
    educationTabContent.style.display = "block";
    experienceTabContent.style.display = "none";
});

experienceLink.addEventListener("click", function() {
    // Add or remove the "active-link" class for styling
    experienceLink.classList.add("active-link");
    educationLink.classList.remove("active-link");

    // Show the "Experience" tab content and hide the "Education" tab content
    experienceTabContent.style.display = "block";
    educationTabContent.style.display = "none";
});

// Initialize the active tab content (Education) when the page loads
educationLink.click();


/*----Open and Close menu toggle*/
const sideMenu = document.getElementById("sidemenu");


const openMenu = document.getElementById("openmenu");
const closeMenu = document.getElementById("closemenu");

openMenu.addEventListener("click", function(){
    sideMenu.style.right= "0";
});


closeMenu.addEventListener("click", function(){
    sideMenu.style.right= "-220px";
});


// const scriptURL = 'https://script.google.com/macros/s/AKfycbwy0-_BlrmXKGF6I2Yu12I0cQLG8illcY_FP9IRp2X1hfjFBC0MWISiX-APgyUjvmujNA/exec'
//     const form = document.forms['submit-to-google-sheet']
  
//     form.addEventListener('submit', e => {
//       e.preventDefault()
//       fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => console.log('Success!', response))
//         .catch(error => console.error('Error!', error.message))
//     })

/*----Another alternative---*/
// const sideMenu = document.getElementById("sidemenu");

// function openmenu(){
//     sideMenu.style.right ="0";
// }

// function closemenu(){
//     sideMenu.style.right ="-170px";
// }
