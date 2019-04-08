window.onload = () => {
  document.getElementsByClassName('no-fouc')[0].classList.remove('no-fouc');

  let navActive = false;
  window.onscroll = () => {

    // animation on nav link
    let rect = document.getElementById('my-projects').getBoundingClientRect();
    if(!navActive) {
      if(Math.floor(rect.top - 68) <= 0) {
        document.getElementById('nav-projects').classList.add('my-active');
        document.getElementById('nav-projects').classList.add('bulge');
        navActive = true;
      }
    }
    else {
      if(Math.floor(rect.top - 68) > 0) {
        document.getElementById('nav-projects').classList.remove('my-active');
        document.getElementById('nav-projects').classList.remove('bulge');
        navActive = false;
      }
    }
  }

  // animation on greeting
  let letters = document.getElementsByClassName('my-animated-greeting');
  let s = 0;
  for(let j of letters) {
    j.style.animationDelay = `${s}s`;
    j.classList.add('drop-in');
    s += 0.1;
  }

  // add mouseover listener to each project for hover animations
  let projects = document.getElementsByClassName('project');
  for(let i of projects) {
    i.addEventListener('mouseenter', (e) => {
      let lets = i.getElementsByClassName('project-title-letter');
      let s2 = 0;
      for(let j of lets) {
        j.style.animationDelay = `${s2}s`;
        j.classList.add('shimmer');
        s2 += 0.1;
      }
    });
    i.addEventListener('mouseleave', (e) => {
      let lets = i.getElementsByClassName('project-title-letter');
      let s2 = 0;
      for(let j of lets) {
        j.style.animationDelay = `${s2}s`;
        j.classList.remove('shimmer');
        s2 += 0.1;
      }
    });
  }
}
