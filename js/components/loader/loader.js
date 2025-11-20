export default class Loader{
    isShow = false;
    constructor(){

        this.mask = document.createElement('div');
    }
    
    showLoader(){
        this.mask.classList.add("mask");
        document.querySelector("body").append(this.mask);
        const loaderCircle = document.createElement('div');
        loaderCircle.classList.add("loader")
        this.mask.append(loaderCircle)
    }
    hideLoader(){
        this.mask.remove()
    }
}