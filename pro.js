const scrollElements = document.querySelectorAll('.scroll');
console.log(scrollElements);
const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const displayScrollElement = (element) => {
  element.classList.add('show');
};

const hideScrollElement = (element) => {
  element.classList.remove('show');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});
handleScrollAnimation();