// Открытие модального окна при нажатии на кнопку "Подробнее"
document.querySelectorAll('.more-info').forEach(button => {
  button.addEventListener('click', function () {
    const modalId = this.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

// Закрытие модального окна при нажатии на крестик
document.querySelectorAll('.close').forEach(close => {
  close.addEventListener('click', function () {
    this.closest('.modal').style.display = 'none';
  });
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});

// Переключение между светлым и тёмным режимами
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Плавающая кнопка "Наверх"
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Счётчик просмотров проектов
document.querySelectorAll('.more-info').forEach((button) => {
  button.addEventListener('click', (e) => {
    const project = e.target.closest('.project');
    const viewCount = project.querySelector('.view-count');
    let views = parseInt(viewCount.textContent) || 0;
    viewCount.textContent = ++views;
  });
});
