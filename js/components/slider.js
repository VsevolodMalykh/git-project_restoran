// export function slider() {
//   const slidesContainer = document.querySelector(".reviews__slides");
//   const dots = document.querySelectorAll(".reviews__dot");

//   let currentSlide = 0;

//   function showSlide() {
//     slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

//     dots.forEach((dot, index) => {
//       dot.classList.toggle("active", index === currentSlide);
//     });
//   }

//   // Вешаем обработчики на все точки

// }

export class Slider {
  constructor() {
    this.slidesContainer = document.querySelector(".reviews__slides");
    this.dots = document.querySelectorAll(".reviews__dot");
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
