
export class Slider {
  constructor(whereUse) {
    this.slidesContainer = document.querySelector(`.${whereUse}__slides`);
    this.dots = document.querySelectorAll(`.${whereUse}__dot`);
    this.currentSlide = 0;

    this.handlerSlide();
  }

  showSlide(idx) {
    this.slidesContainer.style.transform = `translateX(-${
      this.currentSlide * 100
    }%)`;
    this.dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === idx);
    });
  }

  handlerSlide() {
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.currentSlide = index;
        this.showSlide(index);
      });
    });
  }
}
