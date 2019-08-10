//INICIAR JOGO

function iniciarJogo()
{var nivel = document.getElementById('nivel').value
 if(nivel=== '')
	{alert('Selecione um nível para iniciar o jogo')
	 return false
	}
	window.location.href = 'jogo.html?' + nivel
}

//INICIAR JOGO PARTE 2

var mosquitoTempo = 2000

var dificuldade = window.location.search
dificuldade = dificuldade.replace('?', '')
if (dificuldade==='cagao')
	{//2000
	 mosquitoTempo = 2000
	}
else if (dificuldade==='medio')
	{//1200
	 mosquitoTempo = 1200
	}
else if (dificuldade==='marvel')
	{//750
	 mosquitoTempo = 750
	}



//FUNÇÕES DE RANDOMIZAÇÃO

var largura = 0
var altura = 0
var vidas = 1
var tempo = 60
function tamanhoPalcoJogo()
{largura = window.innerWidth
 altura = window.innerHeight
}
tamanhoPalcoJogo() //é colocado fora também porque se não não captura a tela inicial, apenas quando é ajustada

var cronometro = setInterval( function()
		{tempo -= 1
		 if (tempo <0)
			{clearInterval(cronometro)
			 clearInterval(criaMosquito)
			 window.location.href = 'win.html'

			}
		 else
		 	{document.getElementById('cronometro').innerHTML = tempo
		 	}
		}, 1000)

function posicaoRandom()
{
	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) //se o elemento com id 'mosquito' existir vai executar essa função
		{document.getElementById('mosquito').remove()
		 if(vidas >3) 
			{ window.location.href = 'game_over.html'
			}
			else 
				{document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png' //aqui vai deixar vazio as vidas
				 vidas++
				}
		} 

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoY, posicaoX) //só vai gerar quando atualizar a página, não automaticamente quando mudar o tamanho
	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoRandom() + " " + ladoAleatorio()
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function ()
		{this.remove()
		}

	document.body.appendChild(mosquito)
}


function tamanhoRandom()
{var classe = Math.floor(Math.random() * 3)
	switch(classe)
		{case 0:
		 return 'mosquito1'
		 case 1:
		 return 'mosquito2'
		 case 2:
		 return 'mosquito3'
		}
}


function ladoAleatorio()
{var classe = Math.floor(Math.random() * 2)
	switch(classe)
		{case 0:
		 return 'ladoA'
		 case 1:
		 return 'ladoB'
		}
}
