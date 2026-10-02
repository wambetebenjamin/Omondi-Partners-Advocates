const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 3, 2) * 70}ms`;
  revealObserver.observe(el);
});

const offices = {
  nairobi: ['+254 112 272 061', 'info@omondipartners.co.ke', '14 Riverside Drive, Nairobi'],
  mombasa: ['+254 112 272 061', 'mombasa@omondipartners.co.ke', 'Links Road, Nyali, Mombasa'],
  kisumu: ['+254 112 272 061', 'kisumu@omondipartners.co.ke', 'Achieng Oneko Road, Milimani, Kisumu']
};
document.querySelectorAll('.office').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.office').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    document.getElementById('office-details').innerHTML = offices[button.dataset.office].map((item, index) => index === 0 ? `<b>${item}</b>` : `<span>${item}</span>`).join('');
  });
});

document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const note = document.getElementById('form-note');
  note.textContent = 'Thank you — our team will be in touch shortly.';
  note.style.color = '#b8962e';
  event.target.reset();
});

document.getElementById('cookie-ok').addEventListener('click', () => {
  document.getElementById('cookie').style.display = 'none';
  localStorage.setItem('omondi-cookie-consent', 'true');
});
if (localStorage.getItem('omondi-cookie-consent') === 'true') document.getElementById('cookie').style.display = 'none';

document.querySelector('.menu-toggle').addEventListener('click', () => {
  const nav = document.querySelector('.site-header nav');
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  nav.style.position = 'absolute'; nav.style.top = '88px'; nav.style.left = '0'; nav.style.right = '0';
  nav.style.padding = '22px'; nav.style.background = '#fff'; nav.style.flexDirection = 'column'; nav.style.gap = '18px';
});
