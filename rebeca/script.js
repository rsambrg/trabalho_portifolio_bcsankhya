

const sobre = document.getElementById("sobre");
const links = document.getElementById("links");
const contatos = document.getElementById("contatos");


function mudarConteudoSobre() {
    var novoConteudo = "<h2>Rebeca Sampaio, Engenheira Eletricista e Dev Java</h2><img src='rebeca.png' alt='foto de Rebeca'style='box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);width: 20%; height: 20%; border-radius: 50%;' ><p><h3>Engenheira eletricista de formação, dev nas horas de monotonia, 25 anos.<br>Residente de Uberlândia, MG, nascida e criada no norte de minas!<br>Paixão por tecnologia desde a infância, nunca soube o que queria,mas sabia que queria criar.<br>Me encontrei na engenharia, depois me encontrei na programação<br>até encarar o desafio de juntar os meus dois mundos favoritos!<br></p>";
    document.getElementById("conteudo").innerHTML = novoConteudo;
}

function mudarConteudoLinks() {
    var novoConteudo ="<p><ul><li><h4><a href='exemplos/01/index.html'><button id='links' type='button'>5 livros para me conhecer! </button></a></h4></li><li><h4><a href='https://rsambrg.github.io/bcsankhya/index.html'><button id='links' type='button'>Página de links do github com atualizações diárias</button></a></h4></li><li><h4> <a href='https://rsambrg.github.io/bcsankhya/03_Aula_08_05/aula_03_tabela.html'><button id='links' type='button'>Atualmente desenvolvendo API com dados de animais</button></a></h4></li><li><h4><a href='exemplos/02/questao-03.html'><button id='links'type='button'>Blog sobre folclore e cultura regional</button></a></h4></li></ul></section></p>";
    document.getElementById("conteudo").innerHTML = novoConteudo;
}

function mudarConteudoContato(){
    var novoConteudo = "<div class='center-block'><main><form enctype='multipart/form-data' id='formulario' style='box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);'><p><h4>Contato</h4><a href='https://www.linkedin.com/in/eng-rebecasampaio/'><img src='linkedin.png' style='box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); 'height='70px' width='70px'></a> <a href='https://www.instagram.com/r_sambrg/'><img src='insta.png' style='box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); ' height='70px' width='70px'></a> <a href='https://github.com/rsambrg' ><img src='git.png' style='box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);'height='70px' width='70px'></a><br><ul><li><label for='nome'> Nome: </label><input type='text' id='nome'><br><label for='email'> E-mail: </label><input type='text' id='email'></li><br><li><label>Interesse:</label><input type='radio' id='feedback' value='feedback'><label for='feedback'>Feedback</label><input type='radio' id='colaboracao' value='colaboracao'><label for='colaboracao'>Colaboração</label><br><input type='radio' id='outro-contato' value='outros'><label for='outro-contato'>Outro:<input type='text' size='8'></label><br></li><li><label for='mensagem'>Mensagem:</label><br><textarea rows='4' cols='25'></textarea><br><label for='foto'></li><li>Enviar uma foto:</label><input type='file' id='foto' name='foto'><br><br></li><li><label>Permissão para uso de dados:</label></br><input type='checkbox' id='usodedados' value='dados' name='permissao'><label for='usodedados' >Eu concordo que meus dados serão usados para responder à minha consulta.</label><br><input class='envia' type='submit' value='Enviar'> <input class='envia' type='reset' value='Limpar'><br></li></ul><br></form></p></main></div>";
    document.getElementById("conteudo").innerHTML = novoConteudo;
}