// Hamburger toggle
  const menuToggle=document.getElementById("menu-toggle");
  const navLinks=document.getElementById("nav-links");
  menuToggle.addEventListener("click",()=>{navLinks.classList.toggle("active");menuToggle.textContent=navLinks.classList.contains("active")?"✖":"☰"});

  // Animate skills
  function animateSkills(){document.querySelectorAll('.progress').forEach(skill=>{skill.style.width=skill.getAttribute('data-skill');});}
  const skillsSection=document.querySelector('#skills');
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){animateSkills();observer.unobserve(skillsSection);}});},{threshold:0.3});
  observer.observe(skillsSection);