const zones = document.querySelectorAll(".zone");

const divs = document.querySelectorAll(".div");
const imgs = document.querySelectorAll(".img");

for (img of imgs) {
  img.mousedown = function (e) {
    e.preventDefault();
  }

}
for (zone of zones) {
  zone.ondragover = allDrop;
  zone.ondrop = drop;
}

function allDrop(event) {
  event.preventDefault();

}
for (div of divs) {
  div.ondragstart = drag;
}


function drag(event) {
  // console.log(event.target);
  event.dataTransfer.setData("id", event.target.id);
}


function drop(event) {
  let itemId = event.dataTransfer.getData('id');
  event.target.append(document.querySelector(`#${itemId}`))
}