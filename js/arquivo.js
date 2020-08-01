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
		respostatres: 2,
		quatro: "Objetos feitos de vidro devem ser descartados na lixeira de que cor?",
		respostaquatro: 3,
		cinco: "Qual a cor da lixeira que devemos descartar resíduos hospitalares e de serviço de saúde?",
		respostacinco: 7
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
		case "quizlixeirasquatro":
			return quizlixeiras.quatro;
		break;
		case "lixeirasRespostaPerguntaQuatro":
			return quizlixeiras.respostaquatro;
		break;
		case "quizlixeirascinco":
			return quizlixeiras.cinco;
		break;
		case "lixeirasRespostaPerguntaCinco":
			return quizlixeiras.respostacinco;
		break;
	}
}
var nomequiz = "";
var toggle = 0;
var nivel=0;
var contaresposta =1;
var qtderros=0;
function mostraquiz(parametro){
	nomequiz = parametro;	
	if(toggle == 1){
		document.getElementById("pergunta").innerHTML="";
		document.getElementById("primeirafilabotoes").innerHTML="";
		document.getElementById("segundafilabotoes").innerHTML="";
		document.getElementById("nivel").innerHTML="";
		toggle=0;
		nivel=0;
	}else{
		switch(parametro){
			case "lixeiras":
				contaresposta =1;
				document.getElementById("pergunta").innerHTML=botoeseperguntas("quizlixeiras");
				document.getElementById("primeirafilabotoes").innerHTML=botoeseperguntas("botoesum");
				document.getElementById("segundafilabotoes").innerHTML=botoeseperguntas("botoesdois");
				document.getElementById("nivel").innerHTML="<h1>Nível 0</h1>";
			break;
			// case "meioambiente":
			// break;
		}	
		toggle=1;
	}
		
}
// Azul 1// Vermelho 2// Verde 3// Amarelo 4// Preto 5
// Laranja 6// Branco 7// Roxo 8// Marrom 9// Cinza 10
function verificaresposta(cor){
	if(qtderros === 2){		
		document.getElementById("pergunta").innerHTML="Errou 3 vezes fim de jogo!";
		document.getElementById("primeirafilabotoes").innerHTML="";
		document.getElementById("segundafilabotoes").innerHTML="";
		document.getElementById("nivel").innerHTML="";
		qtderros=0;		
		nivel=0;
	}else{
		switch(nomequiz){
			case "lixeiras":
				switch(contaresposta){
					case 1://primeira resposta primeira pergunta
						var resposta = botoeseperguntas("lixeirasRespostaPerguntaum");
						if(cor == resposta){
							alert("Correto!");
							nivel++;							
							document.getElementById("nivel").innerHTML="<h1>Nível "+nivel+"</h1>";
							document.getElementById("pergunta").innerHTML=botoeseperguntas("quizlixeirasdois");
							contaresposta = 2;
						}else{
							qtderros++;
							alert("Errou! "+qtderros);						
						}
					break;
					case 2:
						var resposta = botoeseperguntas("lixeirasRespostaPerguntaDois");
						if(cor == resposta){
							alert("Correto!");
							nivel++;							
							document.getElementById("nivel").innerHTML="<h1>Nível "+nivel+"</h1>";
							document.getElementById("pergunta").innerHTML=botoeseperguntas("quizlixeirastres");
							contaresposta = 3;
						}else{
							qtderros++;
							alert("Errou! "+qtderros);
						}
					break;
					case 3:
						var resposta = botoeseperguntas("lixeirasRespostaPerguntaTres");
						if(cor == resposta){
							alert("Correto!");
							nivel++;							
							document.getElementById("nivel").innerHTML="<h1>Nível "+nivel+"</h1>";
							document.getElementById("pergunta").innerHTML=botoeseperguntas("quizlixeirasquatro");
							contaresposta = 4;
						}else{
							qtderros++;
							alert("Errou! "+qtderros);
						}
					break;
					case 4:
						var resposta = botoeseperguntas("lixeirasRespostaPerguntaQuatro");
						if(cor == resposta){
							alert("Correto!");
							nivel++;							
							document.getElementById("nivel").innerHTML="<h1>Nível "+nivel+"</h1>";
							document.getElementById("pergunta").innerHTML=botoeseperguntas("quizlixeirascinco");
							contaresposta = 5;
						}else{
							qtderros++;
							alert("Errou! "+qtderros);
						}
					break;
					case 5:
						var resposta = botoeseperguntas("lixeirasRespostaPerguntaCinco");
						if(cor == resposta){
							alert("Correto!");
							nivel++;
							document.getElementById("pergunta").innerHTML="Fim!";
							document.getElementById("primeirafilabotoes").innerHTML="";
							document.getElementById("segundafilabotoes").innerHTML="";
							document.getElementById("nivel").innerHTML="";
							nivel=0;
							// contaresposta = 4;
						}else{
							qtderros++;
							alert("Errou! "+qtderros);
						}
					break;
				}
			break;
		}
	}
}
