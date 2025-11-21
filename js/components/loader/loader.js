export default class Loader {
  static loader = false;
  // constructor(){
  // }

  static showLoader() {
    if(!this.loader){

        const mask = document.createElement("div");

        mask.classList.add("mask");


        document.body.append(mask);

        const loaderCircle = document.createElement("div");

        loaderCircle.classList.add("loader");

        mask.append(loaderCircle);

        this.loader = true // Волшебная строчка, непонятно как это работает, но это работает
    }
  }
  static hideLoader() {
    if(this.loader){
        document.querySelector(".mask").remove();
        this.loader = false
    }
  }
}
