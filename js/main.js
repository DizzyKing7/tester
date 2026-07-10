// Basic interactivity: nav toggle, contact form handling, year injection
document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.getElementById('nav-toggle');
  var nav=document.getElementById('site-nav');
  if(toggle && nav){
    toggle.addEventListener('click',function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(nav.style.display === 'flex' || nav.style.display === ''){ nav.style.display = 'none'; }
      else { nav.style.display = 'flex'; nav.style.flexDirection='column'; }
    });
  }

  var yearEls = document.querySelectorAll('#year');
  yearEls.forEach(function(el){ el.textContent = new Date().getFullYear(); });

  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var status = document.getElementById('form-status');
      status.textContent = 'Thanks — your message was sent (demo).';
      form.reset();
    });
  }
});