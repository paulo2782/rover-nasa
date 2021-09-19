const ROVER = ['L','M','L','M','L','M','L','M','M','M','M','R','M','M','R','M','R','R','M']

var i = 0;

var R1 = 0;
var X1 = 1;
var Y1 = 2;

$(function(){

	$('#plato').append(
						"<b><p style='color:red'>GRADE TAMANHO 5,5</p></b>"+
						'<p>Pressione L para girar esquerda 90&#176 / R para girar 90&#176 direita M para movimentar 1 ponto da grade</p>'+
						'<p><b>ROVER 1 - ENTROU - Posição 1,2 N </b></p>'+
						'<p>Faça a sequência (L M L M L M L M M) </p>'
	)

   			
	document.onkeydown = function(e) {

		if(e.which != 76 && e.which != 82 && e.which != 77){
			
			return false
		}

    	str = ROVER[i]


		if(str != e.key.toUpperCase()){
			alert('Movimento Incorreto')
			return false;
		}

		i = i + 1

		if(e.which == 76){ 

			R1 = R1-1			
			if(R1 == -4){
				R1 = 0
			}

		}

		if(e.which == 82){
			R1 = R1+1

			if(R1 == 4){
				R1 = 0
			}
		}
		if(e.which == 77){
			if(R1 == -3 || R1 == 1){
				X1 = X1 +1
			}
			if(R1 == -1 || R1 == 3){
				X1 = X1 -1
			}
			if(R1 == 0){
				Y1 = Y1 +1
			}
			if(R1 == -2 || R1 == 2){
				Y1 = Y1 -1
			}

		}


		switch(R1){
		  case 0:
		  	coord = 'Norte'		  
		  break;
		  case -1:
		  	coord = 'Leste'	
		  break;
		  case -2:
		  	coord = 'Sul'		  
		  break;
		  case -3:
		  	coord = 'Oeste'		  
		  break;
		}
		switch(R1){
		  case 0:
		  	coord = 'Norte'		  
		  break;
		  case 1:
		  	coord = 'Oeste'		  
		  break;
		  case 2:
		  	coord = 'Sul'		  
		  break;
		  case 3:
		  	coord = 'Leste'		  
		  break;

		}
		$('#plato').append("<h6 style='font-size:10px'>"+coord+' - Posição: X: '+X1+' Posição Y: '+Y1)

		
		if(i == 9){
			R1 = 3;
			X1 = 3;
			Y1 = 3;			
			

			$('#plato').append(
						'<p><b>ROVER 2 - ENTROU - Posição 3,3 E </b></p>'+
						'<p>Faça a sequência (M M R M M R M R R M) </p>'
			)
						
		}

	}

})
