const livro1 = document.getElementById("livro1");
const livro2 = document.getElementById("livro2");
const livro3 = document.getElementById("livro3");
const livro4 = document.getElementById("livro4");
const livro5 = document.getElementById("livro5");
const conteudo = document.getElementById("conteudo");


livro1.addEventListener("click",function() {
    conteudo.innerHTML = "<p> O Mestre e Margarida, obra-prima do autor russo Mikhail Bulgákov, é uma narrativa envolvente que mescla realismo e fantasia de maneira magistral. A trama entrelaça a Moscou soviética com um mundo sobrenatural, onde o diabo e seus demônios questionam a moralidade humana. A relação entre o Mestre, um escritor atormentado, e Margarida, sua amante, se destaca pela profundidade emocional. A crítica social, o humor sarcástico e a alegoria política fazem desta obra uma reflexão intrigante sobre a natureza da liberdade e a busca por sentido em um contexto opressivo. Bulgákov oferece uma leitura rica em camadas, que cativa e provoca reflexões duradouras. </p>"
});

livro2.addEventListener("click",function(){
    conteudo.innerHTML = "<p> Solaris, escrito por Stanisław Lem, é uma obra-prima da ficção científica que explora as complexidades da comunicação e da natureza humana. A trama gira em torno de uma equipe de cientistas que estudam o planeta Solaris, onde manifestações físicas de memórias e desejos surgem, desafiando a compreensão dos protagonistas. Com uma atmosfera intensamente filosófica, o livro mergulha nas profundezas da psicologia humana enquanto os personagens lutam para decifrar o inexplicável. Lem conduz os leitores por uma jornada reflexiva, tecendo um enredo envolvente que investiga a relação entre realidade, ilusão e a busca incessante por compreensão. </p>"
});

livro3.addEventListener("click", function(){
    conteudo.innerHTML = "<p> One Hundred Demons de Lynda Barry é uma obra visualmente cativante que explora as complexidades da vida através de histórias pessoais. Combinando desenhos expressivos e narrativa introspectiva, o livro mergulha nas emoções universais, abordando temas como amor, perda, autodescoberta e conexões humanas. Com uma abordagem única, Barry apresenta uma jornada íntima que ressoa profundamente com os leitores, revelando demônios internos e momentos de revelação. Cada página é uma janela para a alma da autora, capturando a essência da experiência humana em sua forma mais sincera e genuína. </p>"
});

livro4.addEventListener("click", function(){
    conteudo.innerHTML = "<p> Cem Anos de Solidão, obra-prima de Gabriel García Márquez, narra a saga da família Buendía ao longo de várias gerações em Macondo, uma vila fictícia. Mágico e real se entrelaçam, retratando a solidão, amores trágicos e o ciclo de repetição de eventos. Através de uma linguagem rica e onírica, o autor explora temas como poder, destino e decadência humana. A história envolvente e as complexas relações entre os personagens revelam uma profunda reflexão sobre a condição humana e a interligação entre passado e presente. Uma obra que captura a essência da América Latina e suas marcas culturais. </p>"
});

livro5.addEventListener("click", function(){
    conteudo.innerHTML = "<p> O Velho e o Mar, escrito por Ernest Hemingway, é uma comovente história sobre a tenacidade humana e a luta contra as adversidades. O livro narra a jornada solitária de Santiago, um pescador idoso e experiente, em sua busca por um grande peixe. Através da prosa enxuta de Hemingway, somos imersos nas emoções e desafios do protagonista, que enfrenta não apenas as forças da natureza, mas também sua própria determinação em meio à solidão do mar aberto. Uma reflexão sobre perseverança, dignidade e a relação entre o homem e a natureza. </p>"
});

