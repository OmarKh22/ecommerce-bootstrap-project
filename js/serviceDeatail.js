const toggleBtn = document.getElementById('toggle-btn');
const features = document.getElementById('features');

toggleBtn.addEventListener('click', () => {
  if (features.classList.contains('d-none')) {
    features.classList.remove('d-none');
    toggleBtn.innerHTML = '▲';
  } else {
    features.classList.add('d-none');
    toggleBtn.innerHTML = '▼';
  }
});