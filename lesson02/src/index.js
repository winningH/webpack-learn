import pic from "./assets/images/logo.png"
import './assets/css/index.less'
console.log(pic)

const img = new Image()
img.src = pic
const root = document.getElementById("app")
root.append(img)