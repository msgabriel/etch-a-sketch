let size = 16;
let container = document.querySelector('.grid');

function grid() {

  for (let i = 0; i < size * size; i++) {
    let newDiv = document.createElement('div');
    container.appendChild(newDiv).classList.add('grid-item');

    const gridItem = document.querySelectorAll('.grid-item')[i];
    gridItem.style.height = (600 / size) + "px";
    gridItem.style.width = (600 / size) + "px";

    gridItem.addEventListener('click', function(e) {
      this.style.background = '#212121';
    });

    document.querySelector('.info').textContent = `${size} x ${size} grid`;

    gridItem.addEventListener('mousemove', function (e) {
      //left mouse button down
      if (e.buttons == 1) {
        this.style.background = '#212121';
      }
      //right mouse button down
      if (e.buttons == 2) {
        this.style.background = '#ccc';
      }
    });
  }

}

grid();

let resize = document.getElementById('resize');
resize.addEventListener('click', function (e) {
  container.innerHTML = "";
  size = parseInt(prompt('what size do you want?'))
  grid();
})

let reset = document.getElementById('reset');
reset.addEventListener('click', function (e) {
  container.innerHTML = "";
  grid();
})