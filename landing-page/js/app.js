//global variable
const AllSections = Array.from(document.querySelectorAll("section"));

const NavBarMenu = document.getElementById("navbar__list");
//creating navbar
const CreateNewLi = () => {
   for (section of AllSections) {
      const NewListItem = document.createElement("li");

      const sectioname = section.getAttribute('data-nav');

      const sectionlink = section.getAttribute('id');

      NewListItem.innerHTML = `<a class="menu__link" href='#${sectionlink}'>${sectioname}</a>`;

      NavBarMenu.appendChild(NewListItem);
   }
}
 CreateNewLi();



// make section in viewport

function SectionViewport (element){
let sectionPostion = element.getBoundingClientRect();
return (sectionPostion.top >= 0);

} 
SectionViewport();


 