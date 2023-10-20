/*-----About tabs-------*/
const tabContainer = document.querySelector(".about-tabs");
aboutSection = document.querySelector(".about-me")
tabContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tabs-items") && !e.target.classList.contains("active2")){
        tabContainer.querySelector(".active2").classList.remove("active2");
        e.target.classList.add("active2");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active3").classList.remove("active3");
        aboutSection.querySelector(target).classList.add("active3");

    }
});
