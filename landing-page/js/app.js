//global variable
const AllSections = Array.from(document.querySelectorAll("section"));

const NavBarMenu = document.getElementById("navbar__list");
//creating navbar

const CreateNewLi = () =>
 {
  //creating for loop to sections
  for (section of AllSections) {
      var NewListItem = document.createElement("li");

      var sectioname = section.getAttribute('data-nav');

      var sectionlink = section.getAttribute('id');

      NewListItem.innerHTML = `<a class="menu__link" href='#${sectionlink}'>${sectioname}</a>`;

      NavBarMenu.appendChild(NewListItem);
   }
  };
   
   

CreateNewLi();
// create a function to make sections active
function active() 
{
      for (section of AllSections) { 
            var sectionRect = section.getBoundingClientRect();
            var sectionTop = sectionRect.top;
            var sectionBot = sectionRect.bottom;
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
   var view = NavBarMenu.offsetTop;
      if (window.pageYOffset > view){
            NavBarMenu.classList.add("fixed");
      }
        else {
            NavBarMenu.classList.remove("fixed");
      };
};
document.addEventListener("scroll" , fixedNav);