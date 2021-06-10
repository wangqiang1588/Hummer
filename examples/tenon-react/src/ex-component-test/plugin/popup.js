import { Base, View } from '@hummer/tenon-react'

class Popup extends Base {
  constructor() {
    super();
    this.view = new View();
    this.render = null;
    // this.element = this.view.element;
  }
  _setAttribute(key, value) {
    switch (key) {
      case 'default':
        this.render = value
        this.renderElement()
        break;
      default:
        break;
    }
  }
  renderElement(){
    // renderSlot(React.createElement(getComponent(this.render)), this.view);
  }

}

export default {
  name: 'popup',
  factory() {
    return new Popup()
  }
}