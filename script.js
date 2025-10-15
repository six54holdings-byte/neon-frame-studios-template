(function(){
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if(navToggle && nav){
    navToggle.addEventListener('click', ()=>{
      const exp = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!exp));
      nav.style.display = exp ? 'none' : 'flex';
    });
  }

  document.getElementById('year').textContent = new Date().getFullYear();

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); }
    });
  }, {threshold: .18});

  document.querySelectorAll('.card,.service,.rate,.gear-list li,.about-card').forEach(el=>{
    el.style.opacity = .001;
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });

  const style = document.createElement('style');
  style.textContent = `.in{opacity:1 !important; transform:translateY(0) !important}`;
  document.head.appendChild(style);

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',(e)=>{
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
    });
  });
})();