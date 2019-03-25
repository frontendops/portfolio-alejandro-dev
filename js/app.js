import { projects } from './projects.js';



//buttons to filter projects

const buttons = document.querySelector('#btn-container');

const projectsBody = document.querySelector(".features");

projects.forEach(project => {
   projectsBody.innerHTML += `<article> <a href="${project.link}" class="image"><img src="${project.img}" alt="${project.alt}" /></a> <h3 class="major">${project.title}</h3> <p>${project.description}</p> <a href="${project.link}" class="special">${project.button}</a> </article>`
})

function renderNewprojects(project) {
   projectsBody.innerHTML += `<article> <a href="${project.link}" class="image"><img src="${project.img}" alt="${project.alt}" /></a> <h3 class="major">${project.title}</h3> <p>${project.description}</p> <a href="${project.link}" class="special">${project.button}</a> </article>`
}



buttons.addEventListener('click', (e) => {
   const primary = document.querySelector('.primary');
   if (primary) {
      primary.classList.remove('primary')
   }
   e.target.classList.add('primary')

   projectsBody.innerHTML = '';
   projects.forEach(project => {
      if (project.technology === e.target.innerHTML.toLowerCase()) {

         renderNewprojects(project);
      } else if (e.target.innerHTML.toLowerCase() === 'all') {
         renderNewprojects(project)
      }
   })

})
