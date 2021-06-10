import { Base } from '@hummer/tenon-react'

import { View, Text } from '@hummer/hummer-front'

class WebView extends Base {
  constructor() {
    super();
    let element = new View();
    let text = new Text();
    this.element = element;
    this.text = text;
    this.element.appendChild(text);
  }
  _setAttribute(key, value) {
    switch (key) {
      case 'content':
        this.text.text = value
        break;
      default:
        this.element.style = {
          [key]: value
        }
        break;
    }
  }
  
  addEventListener(event, func){
    switch(event){
      case 'webviewready':
        console.log('Add Event WebviewReady')
        break;
      default: 
        break;
    }
  }

}
export default {
  name: 'webview',
  factory() {
    return new WebView()
  }
}