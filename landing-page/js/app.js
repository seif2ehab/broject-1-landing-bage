//global variable
const AllSections = Array.from(document.querySelectorAll("section"));

const NavBarMenu = document.getElementById("navbar__list");
//creating navbar
let NewListItem = document.createElement("li");

const CreateNewLi = () =>
 {
  //creating for loop to sections
  for (section of AllSections) {
      let NewListItem = document.createElement("li");

      let sectioname = section.getAttribute('data-nav');

      let sectionlink = section.getAttribute('id');

      NewListItem.innerHTML = `<a class="menu__link" href='#${sectionlink}'>${sectioname}</a>`;

      NavBarMenu.appendChild(NewListItem);
//part of the function that make scrolling smooth
      const navLinks = document.querySelectorAll(".menu__link");

     navLinks.forEach((link) => {

      NewListItem.addEventListener('click', () => {

      let herf = link.getAttribute('href');

      let target = document.querySelector(herf);


  event.preventDefault();
    target.scrollIntoView({
       behavior: "smooth",
       block: "end",
       inline: "nearest",
          }
       ) }
)}
      )}
  }


 
            
      
   
  
   
   

CreateNewLi();
// create a function to make sections active
function active() 
{
      for (section of AllSections) { 
            let sectionRect = section.getBoundingClientRect();
            let sectionTop = sectionRect.top;
            let sectionBot = sectionRect.bottom;
      if (sectionTop>=-150 && sectionBot<= 800){
            if (!section.classList.contains('your-active-class')){
                  section.classList.add('your-active-class')
            };
      }
      else {
            section.classList.remove('your-active-class')
      };
};
};
document.addEventListener('scroll' , active);
//create function to make the navigation bar fixed
function fixedNav()
 {
   const view = NavBarMenu.offsetTop;
      if (window.pageYOffset > view){
            NavBarMenu.classList.add("fixed");
      }
        else {
            NavBarMenu.classList.remove("fixed");
      };
};

