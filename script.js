const d = document,
  ratings = d.querySelectorAll('.rating-num'),
  btn = d.getElementById('btn'),
  submitted = d.querySelector('.submitted-container'),
  main = d.querySelector('.main'),
  res = d.querySelector('#res');

ratings.forEach((rating) => {
    rating.addEventListener('click', (e) => {
      // Remover la clase 'active' de todos los botones
      ratings.forEach(r => r.classList.remove('active'));
      // Agregar la clase 'active' solo al seleccionado
      e.target.classList.add('active');
      res.textContent = e.target.id;
      if(e.target === '' || e.target === null || e.target === undefined) return false;
  });
});
  
btn.addEventListener('click', (e) => {
  main.classList.add('d-none');
  submitted.classList.remove('d-none');
});

const show = () => {
  main.classList.remove('d-none');
  submitted.classList.add('d-none');
};

d.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('display') === null) localStorage.setItem('display','show');
  if(localStorage.getItem('display') === 'show') show();
});
