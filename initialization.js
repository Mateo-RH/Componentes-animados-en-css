

document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var options = {
        	duration: 500,
        	indicators: true,
        	noWrap: true,
        	onCycleTo: function(nose, arrastrado) {
        		console.log(arrastrado);
        	}
        }
        var instances = M.Carousel.init(elems, options);
});