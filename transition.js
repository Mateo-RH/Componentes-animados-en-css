

document.addEventListener('DOMContentLoaded', function() {

	// Oculto todos los elementos menos el 1 (principal)

    var n = 4;
    
    if(n>=2) {
    	for( var i = 2; i <= n; i++ ) {
    		$(`#element${i}`).css("opacity", 0);
    		console.log(i)
    	}
    }

  });



function transition( card ){

	// Si alguna tarjeta se encuentra seleccionada, la deselecciono.

	if($(`#card1`).hasClass('card-active')) $(`#card1`).toggleClass('card-active');
	if($(`#card2`).hasClass('card-active')) $(`#card2`).toggleClass('card-active');
	if($(`#card3`).hasClass('card-active')) $(`#card3`).toggleClass('card-active');
	if($(`#card4`).hasClass('card-active')) $(`#card4`).toggleClass('card-active');

    // Selecciono la tarjeta que llame la funcion
	$(`#card${card}`).toggleClass('card-active');

}



function action(){

	console.log("Call the action");

}


function move( direction ){

	// 0 = izquierda
	// 1 = derecha
	// n = total de slides

	var n = 4;
	var activar = 2;
	var activo = 1;

	for( i = 1; i <= n; i++) {
		if($(`#element${i}`).hasClass('fadeIn')) {
			activo = i;
		}
	}


	if( direction === 0 ){
		activo === 1 ? activar = n : activar = activo - 1;
	} else {
		activo === n ? activar = 1 : activar = activo + 1;
	}

	// desaparecer
	$(`#element${activo}`).removeClass('fadeIn').addClass('fadeOut');

	$(`#element${activar}`).removeClass('fadeOut').addClass('fadeIn');
	$(`#title${activar}`).removeClass('fadeOut').addClass('fadeInText');
	$(`#subtitle${activar}`).removeClass('fadeOut').addClass('fadeInText');
	$(`#image${activar}`).removeClass('fadeOut').addClass('fadeInImg');


}

