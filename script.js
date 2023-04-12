const btns = document.querySelectorAll( '.btn' );

const btn1 = document.querySelector( '.btn-1' );
const btn2 = document.querySelector( '.btn-2' );
const img = document.querySelector( '.img' );
console.log(img);


function triggerOn (e) {
  img.src = `./img/on-1.svg`
}

function triggerOff ( e ){
  img.src = `./img/on-2.svg`
}


btn1.addEventListener( 'click', triggerOn );
btn2.addEventListener( 'click', triggerOff );



// btns.forEach( btn =>
// {
//   btn.addEventListener( 'click', trigger );
// })