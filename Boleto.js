function lotería(){
		let nCorrecto = [58,78,99,41,2,4,1];
		let nUsuario = [];
		
		for(let a=0; a<7; a++){
			nUsuario[a]=prompt("¿Cúales son tus números de lotería?")
			do{
				if (nUsuario[a]>255 || nUsuario[a]<1 || isNaN(nUsuario[a])){
				alert("No se admiten números mayores que 255 o menores que 1 ni carácteres")
				nUsuario[a]=prompt("¿Cúales son tus números de lotería?")
			}
			} while (nUsuario[a]>255 || nUsuario[a]<1 || isNaN(nUsuario[a]));
		}
		alert(nUsuario)
		if (nCorrecto[0,1,2,3,4,5,6]==nUsuario[0,1,2,3,4,5,6]) {
			document.write("¡Felicidades, eres el boleto premiado!")
		}else {
			document.write("Mala suerte. Inténtelo de nuevo la proxima vez.")
		}
			document.getElementById("0").innerHTML = nUsuario[0]
			document.getElementById("1").innerHTML = nUsuario[1]
			document.getElementById("2").innerHTML = nUsuario[2]
			document.getElementById("3").innerHTML = nUsuario[3]
			document.getElementById("4").innerHTML = nUsuario[4]
			document.getElementById("5").innerHTML = nUsuario[5]
			document.getElementById("6").innerHTML = nUsuario[6]
}