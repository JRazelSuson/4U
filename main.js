onload = () =>{
    document.body.classList.remove("container");
};
window.addEventListener('DOMContentLoaded', function() {
  const msg = document.getElementById('welcomeMsg');
  const text = msg.textContent;
  msg.textContent = '';
  msg.classList.remove('hidden');
  [...text].forEach((char, i) => {
    const span = document.createElement('span');
  
    span.innerHTML = char === ' ' ? '&nbsp;' : char;
    span.style.animationDelay = `${i * 0.07}s`;
    msg.appendChild(span);
  });
});