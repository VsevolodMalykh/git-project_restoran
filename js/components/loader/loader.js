export default class Loader {
  static loader = null;
  // constructor(){
  // }

  static showLoader() {
    if(!this.loader){

        console.log("loader start");
        const mask = document.createElement("div");
        mask.classList.add("mask");
        console.log(mask)
        debugger
        document.body.append(this.mask);
        const loaderCircle = document.createElement("div");
        loaderCircle.classList.add("loader");
        mask.append(loaderCircle);
    }
  }
  static hideLoader() {
    if(!this.loader){
        console.log("loader hide");
        document.querySelector(".mask").remove();

    }
  }
}
