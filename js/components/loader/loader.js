export default class Loader{
    isShow = false;
    constructor(){

        this.mask = document.createElement('div');
        this.init()
    }
    
    init(){
        this.showLoader()
    }

    showLoader(){
        console.log('loader start')
        this.mask.classList.add("mask");
        document.querySelector("body").append(this.mask);
        const loaderCircle = document.createElement('div');
        loaderCircle.classList.add("loader")
        this.mask.append(loaderCircle)
    }
    hideLoader(){
        
        console.log('loader hide')
        this.mask.remove()

    }
}