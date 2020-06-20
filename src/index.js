import _ from "lodash";

function component() {
  const element = document.createElement("div");
  const pageTitle = document.createElement("h1");

  pageTitle.innerHTML = _.join(["Hello", "webpack"], " ");
  element.appendChild(pageTitle);

  return element;
}

document.body.appendChild(component());
