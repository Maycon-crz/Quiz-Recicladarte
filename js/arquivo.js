function botoeseperguntas(parametro){	
	var botoes = {
		fileiraum: "<button type='button' class='btn btn-lg btn-primary m-2' onclick='verificaresposta(1);'>Azul</button>"+
		"<button type='button' class='btn btn-lg btn-danger m-2' onclick='verificaresposta(2);'>Vermelho</button>"+
		"<button type='button' class='btn btn-lg btn-success m-2' onclick='verificaresposta(3);'>Verde</button>"+
		"<button type='button' class='btn btn-lg btn-warning m-2' onclick='verificaresposta(4);'>Amarelo</button>"+
		"<button type='button' class='btn btn-lg btn-dark m-2' onclick='verificaresposta(5);'>Preto</button>",
		fileiradois: "<button type='button' class='btn btn-lg btlaranja m-2' onclick='verificaresposta(6);'>Laranja</button>"+
		"<button type='button' class='btn btn-lg light text-dark border m-2' onclick='verificaresposta(7);'>Branco</button>"+
		"<button type='button' class='btn btn-lg btroxo m-2' onclick='verificaresposta(8);'>Roxo</button>"+
		"<button type='button' class='btn btn-lg btmarrom m-2' onclick='verificaresposta(9);'>Marrom</button>"+
		"<button type='button' class='btn btn-lg btn-secondary m-2' onclick='verificaresposta(10);'>Cinza</button>",
	}
	var quizlixeiras = {
		um: "Qual a cor da lixeira que é usada para o descarte de objetos feitos em alumínio?",
		respostaum: 4,
		dois: "Qual a cor da lixeira que é usada para o descarte de lixo radioativo?",
		respostadois: 8,
		tres: "Qual a cor da lixeira que é usada para o descarte de objetos feitos em plástico?",
		respostatres: 2
	}	
	// Azul 1// Vermelho 2// Verde 3// Amarelo 4// Preto 5
	// Laranja 6// Branco 7// Roxo 8// Marrom 9// Cinza 10
	switch(parametro){
		case "botoesum":
			return botoes.fileiraum;
		break;
		case "botoesdois":
			return botoes.fileiradois;
		break;
		case "quizlixeiras":
			return quizlixeiras.um;			
		break;		
		case "lixeirasRespostaPerguntaum": 
			return quizlixeiras.respostaum;
		break;
		case "quizlixeirasdois":
			return quizlixeiras.dois;			
		break;
		case "lixeirasRespostaPerguntaDois":
			return quizlixeiras.respostadois
		break;
		case "quizlixeirastres":
			return quizlixeiras.tres;
		break;
		case "lixeirasRespostaPerguntaTres":
			return quizlixeiras.respostatres;
		break;
	}
}
var nomequiz = "";
function mostraquiz(parametro){
	nomequiz = parametro;		
	switch(parametro){
		case "lixeiras":
			contaresposta =1;
			document.getElementById("pergunta").innerHTML=botoeseperguntas("quizlixeiras");
			document.getElementById("primeirafilabotoes").innerHTML=botoeseperguntas("botoesum");
			document.getElementById("segundafilabotoes").innerHTML=botoeseperguntas("botoesdois");
		break;
		// case "meioambiente":
		// break;
	}		
}
var contaresposta =1;
// Azul 1// Vermelho 2// Verde 3// Amarelo 4// Preto 5
// Laranja 6// Branco 7// Roxo 8// Marrom 9// Cinza 10
function verificaresposta(cor){
	switch(nomequiz){
		case "lixeiras":
			switch(contaresposta){
				case 1://primeira resposta primeira pergunta
					var resposta = botoeseperguntas("lixeirasRespostaPerguntaum");
					if(cor == resposta){
						alert("Correto!");
						document.getElementById("pergunta").innerHTML=botoeseperguntas("quizlixeirasdois");
						contaresposta = 2;
					}else{
						alert("Errou!");
					}
				break;
				case 2:
					var resposta = botoeseperguntas("lixeirasRespostaPerguntaDois");
					if(cor == resposta){
						alert("Correto!");
						document.getElementById("pergunta").innerHTML=botoeseperguntas("quizlixeirastres");
						contaresposta = 3;
					}else{
						alert("Errou!");
					}
				break;
				case 3:
					var resposta = botoeseperguntas("lixeirasRespostaPerguntaTres");
					if(cor == resposta){
						alert("Correto!");
						document.getElementById("pergunta").innerHTML="Fim!";
						// contaresposta = 3;
					}else{
						alert("Errou!");
					}
				break;
			}
		break;
	}
}
