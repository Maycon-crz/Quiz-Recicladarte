function mostraquis(parametro){
	var botoes = {
		fileiraum: "<button type='button' class='btn btn-lg btn-primary m-2' onclick='verificaresposta(1, 1);'>Azul</button>"+
		"<button type='button' class='btn btn-lg btn-danger m-2' onclick='verificaresposta(1);'>Vermelho</button>"+
		"<button type='button' class='btn btn-lg btn-success m-2' onclick='verificaresposta(1);'>Verde</button>"+
		"<button type='button' class='btn btn-lg btn-warning m-2' onclick='verificaresposta(1);'>Amarelo</button>"+
		"<button type='button' class='btn btn-lg btn-dark m-2' onclick='verificaresposta(1);'>Preto</button>",
		fileiradois: "<button type='button' class='btn btn-lg btlaranja m-2' onclick='verificaresposta(1);'>Laranja</button>"+
		"<button type='button' class='btn btn-lg light text-dark border m-2' onclick='verificaresposta(1);'>Branco</button>"+
		"<button type='button' class='btn btn-lg btroxo m-2' onclick='verificaresposta(1);'>Roxo</button>"+
		"<button type='button' class='btn btn-lg btmarrom m-2' onclick='verificaresposta(1);'>Marrom</button>"+
		"<button type='button' class='btn btn-lg btn-secondary m-2' onclick='verificaresposta(1);'>Cinza</button>",
	}
	var quizlixeiras = {
		um: "Qual a cor da lixeira que é usada para o descarte de objetos feitos em alumínio?",
		dois: "Pergunta dois"
	}	
	document.getElementById("pergunta").innerHTML=quizlixeiras.um;
	document.getElementById("primeirafilabotoes").innerHTML=botoes.fileiraum;
	document.getElementById("segundafilabotoes").innerHTML=botoes.fileiradois;
}
function verificaresposta(nomequiz, cor){
	switch(nomequiz){
		case 1:
			switch(cor){
				case 1:
					window.alert("Quiz sobre lixeiras resposta = "+cor);
				break;
				case 2:
					window.alert("Quiz sobre lixeiras resposta = "+cor);
				break;
				case 3:
					window.alert("Quiz sobre lixeiras resposta = "+cor);
				break;
				case 4:
					window.alert("Quiz sobre lixeiras resposta = "+cor);
				break;
				case 5:
					window.alert("Quiz sobre lixeiras resposta = "+cor);
				break;
				case 6:
					window.alert("Quiz sobre lixeiras resposta = "+cor);
				break;
				case 7:
					window.alert("Quiz sobre lixeiras resposta = "+cor);
				break;
				case 8:
					window.alert("Quiz sobre lixeiras resposta = "+cor);
				break;
				case 9:
					window.alert("Quiz sobre lixeiras resposta = "+cor);
				break;
				case 10:
					window.alert("Quiz sobre lixeiras resposta = "+cor);
				break;
			}			
		break;
	}	
}
