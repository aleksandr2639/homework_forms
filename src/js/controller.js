export default class Controller{
    constructor(container){
        this.container = container;
    }

    build(){
      this.container.drawUI()
      this.container.buttonClick();
    }

}