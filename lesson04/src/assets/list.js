// import _ from "lodash-es";

// console.log(_.join(["Another", "module", "loaded!"], " "));

// import css from "./assets/css/index.css";
// import _ from "lodash-es";
// import(/* webpackChunkName:'laohan' */ "lodash-es").then((_) => {
//   // Do something with lodash (a.k.a '_')...
//   console.log(_);
// });

// import("lodash-es").then((_) => {
//   // Do something with lodash (a.k.a '_')...
//   console.log(_);
// });

// console.log(_.join(["hello", "webpack"], " "));

// function getComponent() {
//   const element = document.createElement("div");
//   element.innerHTML = _.join(["hello", "webpack"], "xx");
//   return element;
// }

// document.body.appendChild(getComponent());
function getComponent() {
  // return import(/* webpackChunkName:'laohan' */ "lodash-es").then(
  return import(/* webpackChunkName:'xxxx' */ 'lodash-es').then(
    ({ default: _ }) => {
      const element = document.createElement('div')
      element.innerHTML = _.join(['hello', 'webpack'], 'xx')
      return element
    }
  )
  // const element = document.createElement("div");
  // const { default: _ } = await import(
  //   /* webpackChunkName:"laohan" */ "lodash-es"
  // );
  // console.log(_);
  // element.innerHTML = _.join(["hello", "webpack"], "xx");
  // return element;
}

getComponent().then(ele => {
  document.body.appendChild(ele)
})
