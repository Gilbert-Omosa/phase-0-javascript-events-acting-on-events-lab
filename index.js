// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10) - 10;
    
    if (left >= 0) {
      dodger.style.left = `${left}px`;
    }
  }
  
  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace('px', '');
    const right = parseInt(rightNumbers, 10) + 10;
    
    if (right <= 360) {
      dodger.style.left = `${right}px`;
    }
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      moveDodgerLeft();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });
  

