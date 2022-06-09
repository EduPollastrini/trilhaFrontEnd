# TrilhaFrontEnd  

a) Com suas palavras defina o que é um sistema de controle de versões (VCS)? (máx 10 linhas)

Os sistemas de controle de versão é um softwere que serve para rastrear e gerenciar as alterações em um código de software e gerenciar diferentes versões no desenvolvimento de um documento, podendo gerenciar alterações no codigo-fonte podendo melhorar a forma das equipes trabalharem de forma mais rapida e inteligente.

b) Cite 5 vantagens em utilizar um VCS:

- reduz o tempo de desenvolvimento e aumenta as implementações bem-sucedidas
- ajuda as equipes de software a trabalhar de forma mais rápida e inteligente
- são ferramentas de software que ajudam as equipes de software a gerenciar as alterações ao código-fonte ao longo do tempo
-  a maioria dos sistemas permite marcar onde é que o documento estava com uma versão estável, podendo ser facilmente resgatado no futuro.
- Cada software de controle de versão usa mecanismos para evitar qualquer tipo de invasão de agentes infecciosos nos arquivos. Além do mais, somente usuários com permissão poderão mexer no código.

c) Cite 3 exemplos de VCS:

- Subversion
- Git
- Mercurial
<br></br>
---
<h1 align="center"><strong>HTML Desafio-2</strong></h1>

<h2>a) Sobre HTML, responda:</h2>

<br><h2>I.  Cite  as  principais  tags  HTML  e  para  que  servem  respectivamente.  Dê  exemplos  de  situações reais de onde são usadas;</h2></br>

<br><h3> Tags de comentários:</h3></br>
São usadas para deixar anotações para deixar o código mais organizado, sendo que não são visíveis no navegador.

<br><h3> Tags estruturais:</h3></br>
Tem a função de estruturar o código, sendo usadas para adequar o código para ter uma melhor visualização do usuário no navegador.

<br><h3> Tags de conteúdo</h3></br>
Usadas para poder organizar ou incluir conteúdos na página, como títulos, parágrafos, imagens, links, etc.

<br><h2>II. Explique com suas palavras a importância do HTML Semântico;</h2></br>

O HTML Semântico é importante porque serve para deixar o site e o código com as informações bem explicadas e compreensíveis facilitando o entendimento dos usuarios, também facilita na busca de forma com que os leitores de tela para deficientes visuais tenham maior facilidade para compreender.

<br><h2>I V. O que é acessibilidade em páginas web?</h2></br>

Acessibilidade na web significa que pessoas com deficiência podem perceber, entender, navegar, interagir e contribuir para a web.

<br><h2>V. Quais são as boas práticas devemos adotar ao construir uma página web para que ela seja acessível?</h2></br>

- Um site para ser considerado acessivel deve ter todo o seu conteúdo em texto.
- Todos os links presentes em textos ou em páginas da Web devem deixar bem claro suas funções e objetivos.
- O site deve ser responsivo, ou seja, abrir em celulares, tablets, desktop.
- W3C (World Wide Web Consortium), é um consórcio internacional que busca padronizar os sites da internet.
- Testar o site nos principais navegadores (Internet Explorer, Safari e Chrome).
- Evitar tom de cores próximos e transparência.
- Trabalhe na hierarquia de informação afim de tornar o conteúdo do site claro.
<br></br>
---
<h1 align="center"><strong>CSS Desafio-2</strong></h1>

<h2>a) A respeito de CSS, responda:</h2>

<br><h2>I. Explique com suas palavras a importância do CSS (mínimo 5 linhas e no máximo 10)</h2></br>

O CSS é importante pois ele organiza todo o conteúdo da documentação, utilizando diversas possibilidades para formatação, deixando mais bonito, e atrativo. Pode ser considerado o designer do projeto da pagina web, sendo utilizado alguns atributos específicos para a identidade visual.

<br><h2>II. Explique a diferença entre class & id.</h2></br>

Class é atribuido para mais de um elemento ou grupo de elemento (definido pelo .)

Id é atribuido apenas para um elemento específico (definido por #).

<br><h2>III. Como podemos fazer a inserção do CSS na página?</h2></br>

De forma mais simples, ele pode ser inserido através da tag < style></ style> dentro da sessão < head></ head>, o estilo é definido após de a identificação um seletor, podendo ser ele < body>, < h1>, < text>, < p> entre outros, ou inserindo um link rel dentro do head o direcionando para o css/style.css.

<br><h2>IV. Explique o que é encadeamento e agrupamento de seletores.</h2></br>

Os encadeados exigem uma especificidade, onde em casos de alterações de algum estilo em um elemento ou palavra em específico, você deve especificar como será feito.

Agrupamento de seletores é o conjunto vários elementos onde você deseja atribuir as mesmas características a eles.

<br><h2>V.  O que é Box-Model e dê 3 exemplos de aplicação.</h2></br>

Todo elemento inserido em uma página web, geralmente é acompanhado de uma caixa retangular. Uma dessas caixas (box), é a Box-Model, sendo ela um modelo padrão.

Alguns exemplos de aplicação são: área de conteúdo (content area); área de preenchimento (padding area); área de borda (border area) e área de margem (margin area)

<br><h2>VI. Explique a diferença entre Margin e Padding.</h2></br>

O margin faz a separação do elemento de elementos vizinhos, faz um espaçamento fora do conteúdo. O padding realiza o preenchimento dentro dos limites do conteúdo.

<br><h2>VII. Explique o que é Position e dê um exemplo de cada.</h2></br>

Position é um recurso que ordena e determina o lugar/posição de elementos em uma determinada página web, blog, rede social etc.

1. Área de conteúdo (content area) - Aréa destinada ao conteúdo da página Web.

2. Área de preenchimento (padding area) - Extenção do conteúdo, quando a formatação de cores ou imagem, ele se estende para a área de preenchimento.

3. Área de borda (border area) - Se estende da área de preenchimento, possui as dimensões de largura e a altura do border-box.

4. Área de margem (margin area) - Faz a separação do elemento de elementos vizinhos, faz um espaçamento fora do conteúdo.
<br></br>
---
<h1 align="center"><strong>FlexBox Desafio-3</strong></h1>

<br><h2>a) Explique o que é o FlexBox?</h2></br>

FlexBox é um modelo de layout unidimensional quanto como um metodo capaz de organizar escialmente os elementos em uma interface, além de possuir capacidades avançadas de alinhamento.

<br><h2>b) Cite e explique cada propriedade do eixo principal.</h2></br>

 A propriedade flex-direction define a direção do eixo principal e pode tem quatro valores possíveis:

 - row
 - row-reverse
 - column
 - column-reverse


<br>Se o valor escolhido for <strong>row</strong> (linha) ou <strong>row-reverse</strong> (linha reversa), seu eixo principal se moverá ao longo da linha — na direção inline.

<br>Se o valor escolhido for <strong>column</strong> (coluna) ou <strong>column-reverse</strong> (coluna reversa) e o eixo principal se moverá do topo até o fim da página — na direção block.

<br><h2>c) Cite e explique cada propriedade do eixo transversal.</h2></br>

O <strong>eixo transversal</strong> é perpendicular ao eixo principal, logo, se a propriedade <strong>flex-direction</strong> estiver definida nas linhas, como <strong>row</strong> ou <strong>row-reverse</strong>, o eixo transversal estará na direção das colunas, como <strong>column</strong> ou <strong>column-reverse</strong>.

Se o eixo principal for definido nas colunas, como <strong>column</strong> ou <strong>column-reverse</strong>, então o eixo transversal estará na direção das linhas, como <strong>row</strong> ou <strong>row-reverse</strong>.

Compreender a diferença entre os eixos principal e perpendicular é o que importa quando começamos a observar o alinhamento ou justificação dos itens flexíveis (flex items); o flexbox possui propriedades que alinham e justificam o conteúdo ao longo de um eixo ou de outro.

<br><h2>d) Explique o que é um Flex Container?</h2></br>

O Container Flex é a área de um documento que faz uso do flexbox.
Para criar essa estrutura, define-se o valor da propriedade <strong>display</strong> do elemento representado pelo contêiner como <strong>flex</strong> ou <strong>inline-flex</strong>. Desse modo, os elementos-filhos desse contêiner tornar-se-ão do tipo flex. Como todas as propriedades no CSS possuem valores padrão, ao criar um contêiner flex

O resultado final é que todos os elementos serão alinhados em uma linha, usando o tamanho do conteúdo como o tamanho no eixo principal. Se houver mais itens do que é possível caber no container, não haverá uma quebra de linha; ao invés disso, irão ultrapassar o limite horizontal da página. Se alguns elementos forem mais altos que outros, todos os itens se estenderão ao longo do eixo transversal para preencher seu tamanho total.

<br><h2>e) Explique o que é um Flex Item?</h2></br>

Flex Item são elementos-filhos do flex container.
Os ítens serão dispostos no leiaute seguindo ou o eixo principal ou o transversal.

- Eixo principal: o eixo principal de um flex container é o eixo primário e ao longo dele são inseridos os flex items. Cuidado: O eixo principal não é necessariamente horizontal; vai depender da propriedade flex-direction .

- main-start | main-end: os flex items são inseridos dentro do container começando pelo lado start, indo em direção ao lado end.

- Tamanho principal: A largura ou altura de um flex item, dependendo da direção do container, é o tamanho principal do ítem. A propriedade de tamanho principal de um flex item pode ser tanto width quanto height, dependendo de qual delas estiver na direção principal.

- Eixo transversal: O eixo perpendicular ao eixo principal é chamado de eixo transversal. Sua direção depende da direção do eixo principal.

- cross-start | cross-end: Linhas flex são preenchidas com ítens e adicionadas ao container, começando pelo lado cross start do flex container em direção ao lado cross end.

- cross size: A largura ou altura de um flex item, dependendo do que estiver na dimensão transversal, é o cross size do íten. A propriedade cross size pode ser tanto a largura quanto a altura do ítem, o que estiver na transversal.

<br><h2>f) Como funciona o flex-wrap?</h2></br> 

 Qualquer distribuição espacial ocorrerá ao longo dessa linha, sem referência às linhas de ambos os lados. Para gerar a quebra automática das linhas adicione a propriedade flex-wrap com o valor wrap. Assim, se elementos forem muito grandes para serem exibidos em uma única linha, eles serão agrupados em outras linhas.

 Visto que a propriedade flex-wrap está definida como wrap, os itens serão reorganizados em mais de uma linha. Trocando-se para nowrap, que também é o valor inicial, eles encolherão para caber no contêiner, porque estão usando valores iniciais de flexbox que permitem que os itens encolham. O uso do nowrap causaria um vazamento se os itens não encolhessem ou não diminuíssem o suficiente para caber.

 <br><h2>g) Como é feita a Expansão, Encolhimento e Tamanho dos elementos flex?</h2></br>

Pode ser feita através dessas 3 propriedades:

- flex-grow (en-US): pode-se definir como um inteiro positivo, os elementos flex podem crescer ao longo do eixo principal, a partir do valor mínimo estabelecido nessa propriedade;

- flex-shrink (en-US): Controla a redução dps elementos;

- flex-basis (en-US): define o tamanho inicial dos elementos, em unidades de pixel, antes que o espaço remanescente seja redistribuído.

<br><h2>h) Como é feito o Alinhamento, Justificação e Distribuição de espaço livre entre os elementos?</h2></br>

Feito através dessas propriedades:

- align-items: Alinha os elementos no eixo transversal;

- justify-content: alinha os elementos ao longo do eixo principal;
<br></br>
---

<h1 align="center"><strong>Grid Layout Desafio-3</strong></h1>

<br><h2>a) Explique o que é o Grid Layout.</h2></br>


Uma ferramenta de programação visual utilizada em grandes sessões de uma página web. São grades que formam linhas auxiliares na vertical e horizontal tornando o layout mais estilizado e alinhado. Também pode utizar os elementos pai (container) onde diz como os elementos filhos (item) vão se comportar.

<br><h2>b) Cite e dê exemplos das propriedades do Grid Container?</h2></br>

- display: Define o elemento como um grid container;

- grid-template-columns: Define o número total de colunas que serão criadas no grid;

- grid-template-rows: Define a quantidade de linhas no grid;

- grid-template-areas: Define áreas específicas no grid. O ponto (.) pode ser utilizado para criar áreas vazias;

- grid-template: Atalho para definir o grid-template-columns, grid-template-rows e grid-template-areas;

- gap: Define o gap (gutter) entre os elementos do grid;

- grid-auto-columns: Define o tamanho das colunas do grid implícito (gerado automaticamente, quando algum elemento é posicionado em uma coluna que não foi definida);

- grid-auto-rows - Define o tamanho das linhas do grid implícito (gerado automaticamente, quando algum elemento é posicionado em uma linha que não foi definida);

- grid-auto-flow: Define o fluxo dos itens no grid. Se eles vão automaticamente gerar novas linhas ou colunas;

- grid: Atalho geral para definir o grid: grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns e grid-auto-flow;

- justify-content: Justifica os itens do grid em relação ao eixo x (horizontal);

- align-content: Alinha os itens do grid em relação ao eixo y (vertical);

- justify-items: Justifica o conteúdo dos itens do grid em relação ao eixo x (horizontal). Justifica em relação a célula;

- align-items: Alinha o conteúdo dos itens do grid em relação ao eixo y (vertical). Alinha em relação a célula;

<br><h2>c) Cite e dê exemplos das propriedades do Grid Item?</h2></br>

- grid-column: Define quais colunas serão ocupadas pelo grid item. É possível definir uma linha de início e final, assim o item irá ocupar múltiplas colunas.

- grid-row: Define quais linhas serão ocupadas pelo grid item - Atenção aqui, pois esse linha é referente a row. Porém as chamadas grid lines que por tradução também significam linhas do grid, são diferentes. Uma row (linha), possui sempre 2 grid lines (linhas do grid), uma no início dela e uma no final dela.

- grid-area: Define a área do item do grid. É um atalho para grid-row-start, grid-column-start, grid-row-end, grid-column-end. O z-index pode ser utilizado para manipular a posição no eixo Z do item. Ou seja, se um item for posicionado em cima de outro, o z-index controla qual vêm na frente.

- justify-self: Justifica o item do grid em relação ao eixo x (horizontal). Justifica em relação a célula.

- align-self: Justifica o item do grid em relação ao eixo y (vertical). Alinha em relação a célula.

<br><h2>d) O que é a unidade fr?</h2></br>

A unidade fr representa uma fração do espaço disponível no container do grid. A próxima definição de grid cria três espaços com tamanhos iguais que aumentam e diminuem de acordo com o espaço disponível.

<br><h2>e) O que é a notação repeat?</h2></br>

A notação repeat é utilizada para a repetição da seção de track listing.

<br><h2>f) O que são as linhas do Grid?</h2></br>

As linhas são numeradas e podem ser posicionadas a partir do layout da trilha definida.

<br><h2>g) O que é uma célula no Grid?</h2></br>

A célula é a menor unidade do grid, pode ser comparada com uma célula de tabela. O grid sendo definido como pai, os items (filhos) serão organizados e distribuídos em célular.

<br><h2>H. O que são áreas do Grid?</h2></br>

Áreas do grid é o espaço em que o item se ocupa (sempre retangulares – não em L por exemplo)

<br></br>

---
<h1 align="center"><strong>SPA Angular Desafio - 5.1</strong></h1>

<br><h2>a) Explique de forma sucinta a diferença entre SPA e MPA;</h2></br>

O SPA (Single Page Application) é uma aplicação web que exibe o conteúdo em uma única página, sendo assim, quando solicitado o carregamento de um elemento em específico, o mesmo ficará disponível nesta mesma página, sem ter a necessidade de entregar múltiplas páginas ao usuário. O SPA possibilita uma comunicação mais dinâmica com o servidor, deixando a apresentação dos dados solicitados mais eficiente. As principais características, segundo Bognar Junior, são:

- Equilibrar o desenvolvimento da aplicação, ou seja, não sobrecarregar o server-side e subutilizar o client-side;

- Otimizar a experiência do usuário da aplicação, dando maior ênfase nas técnicas de desenvolvimento front-end;

- Utilizar mais JavaScript para o desenvolvimento, normalmente com a ajuda de um framework.

O MPA (Multi Page Application) é uma plicação web que exibe o conteúdo em múltiplas páginas. Possui diferentes páginas para os recursos do site, sendo assim, quando o usuário solicita entrar em algum recurso, é carregado para ele uma página com os dados da solicitação.

As páginas são geradas dentro do servidor e enviadas para o usuário de acordo com a sua interação.

Segundo o site Library:

“Em resumo, as SPAs se tornam mais atrativas quando o assunto é experiência do usuário. Porém um dos grandes problemas com essa abordagem é a dificuldade que os mecanismos de busca possuem ao detectar suas páginas. Dessa forma para sites que de- pendem de uma otimização nos motores de busca (do inglês, Search Engine Optimization (SEO)), como comércios eletrônicos, sites de notícias a escolha de uma MPA pode ser a melhor opção.”

<br><h2>b) Como eram as páginas WEB na década de 90 e 1º década dos anos 2000?</h2></br>

Entre 1989 e 1990 o cientista Tim Berners-Lee teve uma proposta para facilitar a transição entre as páginas da internet, iniciando assim a World Wide Web (WWW), um formato de rede mais aprimorado.

O cientista também elaborou o sistema de navegação por cliques, sendo eles o HTTP e o HTML.

O HTTP (Hypertext Transfer Protocol - Protocolo de Transferência de Hipertexto) é o protocolo usado para transferência de dados entre os computadores, ele determina como será feita a comunicação entre um navegador e um servidor web.

O HTML (HyperText Markup Language - Linguagem de Marcação de HiperTexto) é a estrutura codificada por trás da página web, sendo o bloco de construção mais básico da web.

Contudo, ao longo dos anos foram surgindo mais linguagens de programação que foram muito eficientes e necessárias para a melhoria das páginas Web.

Entre essas linguagens, alguns destaques são (entre 1990 e 1ª década dos anos 2000):

- cPython: 1991;
- Ruby: 1993;
- Java: 1995;
- PHP: 1995;
- JavaScript: 1995;
- C#: 2000;

Com o surgimento dessas linguagens (além das que já existiam), ficou cada vez mais prático para os programadores trabalharem em um desenvolvimento de página Web mais atrativa, com boa navegabilidade e eficiência, uma boa experiência para o usuário e desenvolvedores.

Algumas páginas web de grandes empresas nos anos 90 comparadas com o anos 2000:

<img src="https://ik.imagekit.io/5thmxr5d9/google_-_antigo_q0nlqhlpX?ik-sdk-version=javascript-1.4.3&updatedAt=1652987994844"></img>

<img src="https://ik.imagekit.io/5thmxr5d9/google_-_novo_TI1Nqfmod?ik-sdk-version=javascript-1.4.3&updatedAt=1652987994490"></img>

<img src="https://ik.imagekit.io/5thmxr5d9/unknown_bvrJaaSL4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652989171224"></img>

<img src="https://ik.imagekit.io/5thmxr5d9/fdf_-2_4YugOQ?ik-sdk-version=javascript-1.4.3&updatedAt=1652989171928"></img>

<br><h2>c) O que é WEB 1.0 , WEB 2.0 e WEB 3.0?</h2></br>

- WEB 1.0: É a internet como ela surgiu. Sites de conteúdo estático com pouca interatividade dos internautas e diversos diretórios de links. No começo a internet era mais restrita ao uso militar e universitário, nela os usuários tinham acesso a recursos limitados, comparando aos disponíveis nos dias de hoje.

- WEB 2.0: A Web 2.0, também chamada de web participativa, foi a revolução dos blogs e chats, das mídias sociais colaborativas, das redes sociais e do conteúdo produzido pelos próprios internautas.

- WEB 3.0: A Web 3.0 é uma internet onde teremos toda informação de forma organizada para que não somente os humanos possam entender, mas principalmente as máquinas, assim elas podem nos ajudar respondendo pesquisas e perguntas com uma solução concreta, personalizada e ideal. É uma internet cada vez mais próxima da inteligência artificial. É um uso ainda mais inteligente do conhecimento e conteúdo já disponibilizado online, com sites e aplicações mais inteligentes, experiência personalizada e publicidade baseada nas pesquisas e no comportamento de cada indivíduo.

<br><h2>d) Com suas palavras, responda às seguintes perguntas referentes ao Angular:</h2></br>

<br><h3>I. De forma resumida o que é o Angular?</h3></br>

O angular é uma plataforma construída em TypeScript, ou seja, ela possui um conjunto com o JavaScript, possibilitando realizar todos os comandos de JS e mais alguns adicionais, ele é responsável pela criação de interface com o usuário. Dentro deste framework é feita a criação do SPA, com isso, de uma forma dinâmica, a atualização de dados é feita somente sob aquilo que é solicitado pelo usuário (evitando muitos dados trafegados), tornando a interação do mesmo mais fluída, e deixando a comunicação entre o navegador e o servidor transparente para ele.

<br><h3>II. Qual a relação do Angular com SPA?</h3></br>

Como o objetivo do SPA é apresentar dados solicitados em um único carregamento de página, o angular o auxilia fazendo a sincronização com os dados armazenados no servidor de uma forma simples e bem estruturada.

<br><h3>III. Em uma aplicação básica, o que é essencial ter?</h3></br>

- Componentes: os componentes são os blocos de construção que compõem um aplicativo.

- Modelo: Cada componente tem um modelo HTML que declara como esse componente é renderizado. Você define esse modelo inline ou por caminho de arquivo.

- Injeção de dependência: A injeção de dependência permite declarar as dependências de suas classes TypeScript sem cuidar de sua instanciação. Em vez disso, o Angular lida com a instanciação para você.

<br><h3>IV. O que é o Angular CLI e qual a sua importância? Dê exemplos;</h3></br>

É uma ferramenta que cria toda a estrutura necessária para o projeto, com os arquivos, diretórios e scripts necessários para o desenvolvimento da aplicação.

Ela é importante pois facilita a criação de elementos, classes e etc., ajuda a processar e agrupar diversos arquivos.

Alguns exemplos:

- ng construir: Compila um aplicativo Angular em um diretório de saída.
- ng servir: Constrói e atende seu aplicativo, reconstruindo em alterações de arquivo.
- ng gerar: Gera ou modifica arquivos com base em um esquema.
- teste ng: Executa testes de unidade em um determinado projeto.
- ng e2e: Cria e atende a um aplicativo Angular e, em seguida, executa testes de ponta a ponta.

<br><h3>V. Para que serve o arquivo angular.json?</h3></br>

O angular.json define o arquivo que vai iniciar a aplicação, traz propriedades sobre o projeto, entre elas qual é o caminho do arquivo principal main.ts;

<br><h3>VI. Quais pacotes (libs) são considerados primários (default)?</h3></br>

- Angular Router: Implementa o serviço Angular Router , que permite a navegação de uma visualização para outra conforme os usuários realizam tarefas do aplicativo. Define o Route objeto que mapeia um caminho de URL para um componente e a RouterOutlet diretiva que você usa para colocar uma visualização roteada em um modelo, bem como uma API completa para configurar, consultar e controlar o estado do roteador;

- PWA Angular:é uma biblioteca com suporte a service worker Angular que fornece uma experiência de usuário como se o aplicativo fosse projetado para ser executado em seu sistema operacional e hardware.

- HttpClient: Executa solicitações HTTP. Este serviço está disponível como uma classe injetável, com métodos para realizar requisições HTTP;

- Angular Animations: A animação fornece a ilusão de movimento: os elementos HTML mudam de estilo ao longo do tempo. Animações bem projetadas podem tornar seu aplicativo mais divertido e simples de usar, mas não são apenas cosméticas;

- Angular Schemes: Um esquema é um gerador de código baseado em modelo que suporta lógica complexa. É um conjunto de instruções para transformar um projeto de software gerando ou modificando código. Os esquemas são empacotados em coleções e instalados com npm;

<br><h3>VII. Para que serve o arquivo package.json?</h3></br>

O arquivo package.jason descreve o projeto, configura dependências do mesmo (quais outros pacotes ele vai precisar para ser executado) e scripts automatizados.

<br><h3>VIII. Para que serve o arquivo environment.ts?</h3></br>

O arquivo environment.ts pode ser usado para definir variáveis globais em ambiente de desenvolvimento

<br><h2>e) Sobre Text Interpolation, responda:</h2></br>

<br><h3>I. O que é?</h3></br>

A interpolação de texto permite incorporar valores de string dinâmicos em seus modelos HTML.

<br><h3>II. Quais os benefícios de se ter interpolação em uma aplicação Angular?</h3></br>

O benefício é que a interpolação pode ser usada para alterar dinamicamente o que aparece em uma exibição do aplicativo, como exibir uma saudação personalizada que inclui o nome do usuário.

<br><h3>III. Crie uma interpolação com o seu nome, com nome do seu guia, data do desafio e a sua turma do desafio.</h3></br>

Crie uma interpolação com o seu nome, com nome do seu guia, data do desafio e a sua turma do desafio.

<img src="https://ik.imagekit.io/5thmxr5d9/imagem_2022-05-24_114009666_WBkXUAi4H.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653403212245">

<br><h2>f) A respeito de Bindings, responda:</h2></br>

<br><h3>I. O que é Property Binding e quais as suas aplicações?</h3></br>

A Property Binding Associa informação do componente para o template (HTML), ajuda a definir valores para propriedades de elementos ou diretivas HTML. Use a associação de propriedade para fazer coisas como a funcionalidade do botão de alternância, definir caminhos programaticamente e compartilhar valores entre componentes.

<br><h3>II. Qual é o passo a passo do fluxo das informações com Property Binding?</h3></br>

A associação de propriedade move um valor em uma direção, da propriedade de um componente para uma propriedade do elemento de destino.

<br><h3>III. Dê um exemplo de Property Binding e explique o seu funcionamento.</h3></br>

Para associar à propriedade de um elemento, coloque-o entre colchetes, [ ], que identifica a propriedade como uma propriedade de destino. Uma propriedade de destino é a propriedade DOM à qual você deseja atribuir um valor. Por exemplo, a propriedade de destino no código a seguir é a srcpropriedade do elemento de imagem.

**src/app/app.component.html**
```html
<img alt="item" [src]="itemImageUrl">
```

Na maioria dos casos, o nome de destino é o nome de uma propriedade, mesmo quando parece ser o nome de um atributo. Neste exemplo, srcé o nome da propriedade do elemento.

Os colchetes, [ ], fazem com que o Angular avalie o lado direito da atribuição como uma expressão dinâmica. Sem os colchetes, o Angular trata o lado direito como uma string literal e define a propriedade para esse valor estático.

**src/app.component.html**
```html
<app-item-detail childItem="parentItem"></app-item-detail>
```

<br><h3>IV. O que é Event Binding?</h3></br>

Event Binding permite ouvir e responder às ações do usuário, como pressionamentos de tecla, movimentos do mouse, cliques e toques, vincula um código da aplicação a um certo evento disparado pelo navegador.

<br><h3>V.   Dê um exemplo de Event Binding e explique o seu funcionamento.</h3></br>

Para vincular a um evento (Event Binding), você usa a sintaxe de vinculação de evento Angular. Essa sintaxe consiste em um nome de evento de destino entre parênteses à esquerda de um sinal de igual e uma declaração de modelo entre aspas à direita. No exemplo a seguir, o nome do evento de destino é clicke a instrução do modelo é onSave().

**Sintaxe de vinculação de eventos**
```html
<button (click)="onSave()">Save</button>
```
A associação de eventos escuta os eventos de clique do botão e chama o onSave()método do componente sempre que ocorre um clique.

<br><h3>VI. O que é Two-Way-Data-Binding e em quais cenários devemos usá-lo?</h3></br>

A associação bidirecional oferece aos componentes em seu aplicativo uma maneira de compartilhar dados. Use a associação bidirecional para ouvir eventos e atualizar valores simultaneamente entre componentes pai e filho.

<br><h3>VII. Dê um exemplo de Two-Way-Data-Binding e explique.</h3></br>

A sintaxe de ligação bidirecional (Two-Way-Data-Binding) do Angular é uma combinação de colchetes e parênteses, [()]. A [()] sintaxe combina os colchetes de associação de propriedade, [], com os parênteses de associação de evento, ().

**src/app/app.component.html**
```html
<app-sizer [(size)]="fontSizePx"></app-sizer>
```

<br><h2>G. Diretivas:</h2></br>

<br><h3>I O que é uma diretiva Angular e qual o seu propósito?</h3></br>

As diretivas são classes que adicionam comportamento adicional aos elementos em seus aplicativos angular. Use as diretivas internas do Angular para gerenciar formulários, listas, estilos e o que os usuários veem.

Diretivas são extensões da linguagem HTML, que fornecem a possibilidade de estender/ampliar o comportamento de elementos HTML. Este recurso permite a implementação de novos comportamentos de forma declarativa.

<br><h3>II Quais tipos de diretivas existem?</h3></br>

- Componentes: diretivas com um modelo. Esse tipo de diretiva é o tipo de diretiva mais comum.

- Diretivas de atributo: diretivas que alteram a aparência ou o comportamento de um elemento, componente ou outra diretiva.

- Diretivas estruturais: diretivas que alteram o layout do DOM adicionando e removendo elementos DOM.

<br><h3>III O Angular possui algumas diretivas default, explique as 6 principais e dê um exemplo de cada;</h3></br>

- NgClass: Adicione ou remova várias classes CSS simultaneamente com

- NgStyle: Utilizado para definir vários estilos embutidos simultaneamente, com base no estado do componente.

- NgModel: Utilizada para exibir uma propriedade de dados e atualizar essa propriedade quando o usuário fizer alterações.

- NgIf: Adicione ou remova um elemento aplicando uma NgIf diretiva a um elemento host.

- NgFor: se a NgFor diretiva para apresentar uma lista de itens.

- NgSwitch: exibe um elemento entre vários elementos possíveis, com base em uma condição de troca. Angular coloca apenas o elemento selecionado no DOM.

<br><h2>h) Reactive forms:</h2></br>

<br><h3>I. Qual a diferença entre template-driven e reactive forms?</h3></br>

O template-driven forms é um tipo de formulário mais simples de implementar, dada a sua proximidade em relação a como criamos formulários apenas com HTML (é necessário importar o módulo FormsModule).

O reactive forms fornece uma abordagem baseada em modelo para lidar com entradas de formulário cujos valores mudam ao longo do tempo, a lógica fica, geralmente, no componente e as suas validações são feitas programaticamente com TypeScript (é necessário importar o módulo ReactiveFormsModule).

<br><h3>II. Quais benefícios temos ao usar um formulário reativo?</h3></br>

São mais flexíveis, fornecem um caminho direto para teste, e com isso você pode ter a certeza de que seus dados são consistentes e previsíveis quando solicitados. Quaisquer consumidores dos fluxos têm acesso para manipular esses dados com segurança. Fornecem também acesso síncrono ao modelo de dados, imutabilidade com operadores observáveis e rastreamento de alterações por meio de fluxos observáveis.

<br><h3>III. Quais módulos são necessários para criar os formulários reativos?</h3></br>

ReactiveFormsModule

<br><h3>IV. Quais classes base temos para formulários reativos no Angular?</h3></br>

- FormControl: registra um único controle de formulário;

- FormGroup: faz com que a legenda e o campo fiquem juntos;

- FormBuilder: fornece métodos convenientes para gerar controles;

- Validators: fornece um conjunto de validadores internos que podem ser usados por controles de formulário;

- FormArray: é uma alternativa FormGroup para gerenciar qualquer número de controles sem nome;

- AbstractControl: A classe base abstrata para as classes de controle de formulário concreto FormControl, FormGroupe FormArray. Ele fornece seus comportamentos e propriedades comuns.

<br><h3>V. Como é feita a configuração de um formulário reativo usando separadamente as classes base?</h3></br>

A [formControl] diretiva vincula a FormControlinstância criada explicitamente a um elemento de formulário específico na exibição, usando um acessador de valor interno (implementa um campo de entrada para um único controle).

<br><h3>VI. Como se dá o fluxo de informações entre o formulário reativo e o componente em Angular?</h3></br>

Em formulários reativos, cada elemento de formulário na visualização está diretamente vinculado ao modelo de formulário (uma FormControlinstância). As atualizações da exibição para o modelo e do modelo para a exibição são síncronas e não dependem de como a interface do usuário é renderizada.

<br><h3>VII. Como é feita a captura dos dados de um formulário reativo e apresentado na tela?</h3></br>

- O usuário chama o favoriteColorControl.setValue()método, que atualiza o FormControlvalor.

- A FormControlinstância emite o novo valor por meio do valueChangesobservável.

- Quaisquer assinantes do valueChangesobservável recebem o novo valor.

- O acessador de valor de controle no elemento de entrada de formulário atualiza o elemento com o novo valor.

<br><h3>VIII. Explique  para  o  que  serve  a  validação  de  um  formulário  e  como  isto  pode  ser  apresentado para o usuário?</h3></br>

A validação de formulários faz parte do gerenciamento de qualquer conjunto de formulários, com isso ele melhora a qualidade geral dos dados

- Os formulários reativos definem validadores personalizados como funções que recebem um controle para validar.

- Os formulários orientados por modelo estão vinculados a diretivas de modelo e devem fornecer diretivas de validação personalizadas que envolvem funções de validação.

- Ele é apresentado ao usuário como uma solicitação de entrada de dados (ex.: login, cadastro e etc.), onde essa entrada deve receber os valores inseridos pelo mesmo, sendo a inserção de nome, preenchimento de todos os campos e etc.

<br></br>

---
<h1 align="center"><strong>Componentes Desafio - 5.2</strong></h1>

<br><h2>Item 1: Reutilização de componentes</h2></br>

<br><h2>a) A respeito de componente, responda:</h2></br>

<br><h3>I. O que é um componente em aplicações Angular?</h3></br>

Os componentes são o principal bloco de construção para aplicativos Angular.

<br><h3>II. Do que um componente é composto?</h3></br>

Cada componente consiste em:

- Um modelo HTML que declara o que é renderizado na página;

- Uma classe TypeScript que define o comportamento;

- Um seletor CSS que define como o componente é usado em um modelo;

- Opcionalmente, estilos CSS aplicados ao modelo.

<br><h3>III. Qual é o comando utilizado para criar um componente utilizando Angular CLI?</h3></br>

Executar o ng generate component < component-name > omando, onde < component-name > é o nome do seu novo componente.

<br><h3>IV. Qual a importância da reutilização de componentes?</h3></br>

Otimização o trabalho, gerar uma maior consistência em sua base, melhorar o fluxo de ajustes, cortar custos desnecessários, facilitar a colaboração, permitir escalonamento de projetos e acelerar o desenvolvimento.

<br><h3>V. Qual a funcionalidade do selector no exemplo abaixo?</h3><br>

Serve como um selector CSS.

<br><h3>VI. Explique a funcionalidade de templateUrl e template nos exemplos abaixo equando devemos utilizar cada uma delas</h3></br>

- templateUrl: Usado para definir o modelo HTML que o componente usa para exibir informações. Geralmente esse modelo é um arquivo HTML separado. No caso do exemplo, pode-se notar que o templateUrl possui o valor de um link externo, sendo ele um html separado.

- template: Permite definir um modelo dentro do componente, adicione uma template propriedade ao decorador que contém o HTML que você deseja usar.@Component (sem ter a necessidade de abrir um html externamente, separado). No caso do exemplo, o template já exibe uma informação de '< h1>Hello World.</ h1>'

<br><h3>VII. Explique a funcionalidade de styleUrls e styles nos exemplos abaixo equando devemos utilizar cada um deles.</h3></br>

- styleUrls: Utilizada para declarar os estilos de um componente em um arquivo separado. No caso do exemplo, é inserido um link que direciona diretamente para a formatação de estilos de um componente mas em um arquivo separado.

- styles: Utilizada para declarar os estilos dentro do componente. No caso do exemplo, é definido um font-weight: normal, sem a necessidade de realizar o estilo em um arquivo separado.

<br><h2>Item 2: Rotas</h2></br>

<br><h3>Sobre o funcionamento das rotas do Angular, responda:</h3></br>

<br><h3>I. Qual é o comando no Angular CLI para criar uma nova aplicação com rotas?</h3></br>

ng generate module app-routing --flat --module=app

<br><h3>II. Qual é o comando no Angular CLI para criar um novo módulo com rotas?</h3></br>

ng generate nome-do-projeto --routing

<br><h3>III. Para que serve o método navigate( ) da classe Router?</h3></br>

É utilizado para fazer a navegação via código.

<br><h3>IV. Para que serve o método isactive( ) da classe Router?</h3></br>

Função utilizada para receber informações de configuração de quando o link do router esta ativo.

<br><h3>V. Para que serve o arquivo src/app/app-routing.module.ts?</h3></br>

Possibilita a importação de rotas dentro do arquivo através do seu módulo de rotas.

<br><h3>VI. Para que serve a tag < router-outlet></ router-outlet>?</h3></br>

Atua como um espaço reservado que o Angular preenche dinamicamente com base no estado atual do roteador.

<br><h3>VII. Dê um exemplo de um botão chamando uma rota através de um método em angular.</h3></br>

```html
<button [routerLink]="['lista']">Abrir lista de números</button>
```

<br><h3>VIII. Dê um exemplo de um botão chamando uma rota sem chamar um método em angular.</h3></br>

```html
<a href="lista">
	<button>Abrir lista de números</button>
</a>
```

<br><h3>IX. O que é Lazy Load? Dê um exemplo da definição de uma rota em angular utilizando Lazy Load.</h3></br>

O Lazy Load (Lazy Loading, ou “carregamento preguiçoso”, em bom português) é uma técnica de programação que ajuda as páginas a exibirem seus conteúdos de maneira mais ágil e eficiente.

<br><h3>X. O que é Eager Load? Dê um exemplo da definição de uma rota em angular utilizando Eager Load.</h3></br>

É o mecanismo pelo qual uma associação, coleção ou atributo é carregado imediatamente quando o objeto principal é carregado. Dessa forma todas as relações de uma entidade serão carregadas no mesmo momento em que esta entidade é carregada. É o contrário do Lazy Loading.

<br><h2>Item 3: Pipes</h2></br>

<br><h3>I. Qual é a utilidade dos pipes em aplicações Angular? </h3></br>

Transformar strings, valores monetários, datas e outros dados para exibição. Pipes são funções simples para usar em expressões de modelo para aceitar um valor de entrada e retornar um valor transformado. Os pipes são úteis porque você pode usá-los em toda a sua aplicação, enquanto declara cada pipe apenas uma vez. Por exemplo, você usaria um pipe para mostrar uma data como 15 de abril de 1988 em vez do formato de string bruto.

<br><h3>II. Cite os 6 pipes que fazem parte do pacote inicial do Angular. </h3></br>

- DatePipe;
```html 
{{ value_expression | date [ : format [ : timezone [ : locale ] ] ] }}
```

- UpperCasePipe;
```html
{{ value_expression | uppercase }}
```

- LowerCasePipe;
```html
{{ value_expression | lowercase }}
```

- CurrencyPipe;
```html
{{ value_expression | currency [ : currencyCode [ : display [ : digitsInfo [ : locale ] ] ] ] }}
```

- DecimalPipe;
```html
{{ value_expression | number [ : digitsInfo [ : locale ] ] }}
```

- PercentPipe.
```html
{{ value_expression | percent [ : digitsInfo [ : locale ] ] }}
```

<br><h3>III. Descreva a funcionalidade de cada um dos pipes citados acima e dê um exemplo da sua utilização, juntamente com o resultado em tela.</h3></br>

- DatePipe: formata um valor de data de acordo com as regras de localidade.

- UpperCasePipe: transforma o texto em letras maiúsculas.

- LowerCasePipe: transforma o texto em todas as letras minúsculas.

- CurrencyPipe: transforma um número em uma string de moeda, formatada de acordo com as regras de localidade.

- DecimalPipe: transforma um número em uma string com um ponto decimal, formatado de acordo com as regras de localidade.

- PercentPipe: transforma um número em uma string de porcentagem, formatada de acordo com as regras de localidade.

<br><h3>IV. O que são custom pipes?</h3></br>

Custom pipes (pipes personalizados) são utilizados para criar transformações personalizadas do pipe.

<br></br>

---

<h1 align="center"><strong>Serviços - Desafio - 5.3</strong></h1>

<br><h2>Item 1: Services</h2></br>

<br><h2>a) A respeito de services, responda:</h2></br>

<br><h3>I. Qual o propósito de services no angular? </h3></br>

O services é uma categoria ampla que engloba qualquer valor, função ou recurso que um aplicativo precisa. Um serviço é tipicamente uma classe com um propósito estreito e bem definido. Deve fazer algo específico e fazê-lo bem.

<br><h3>II. Porque no Angular há uma distinção entre components e services?</h3></br>

Angular distingue componentes de serviços para aumentar a modularidade e a reutilização. Ao separar a funcionalidade relacionada à visualização de um componente de outros tipos de processamento, você pode tornar suas classes de componentes enxutas e eficientes.

<br><h3>III. Como as services são disponibilizadas em um component?</h3></br>

Um component pode delegar determinadas tarefas aos services, como buscar dados do servidor, validar a entrada do usuário ou fazer logon diretamente no console. Ao definir essas tarefas de processamento em uma classe de serviço injetável , você disponibiliza essas tarefas para qualquer componente. Você também pode tornar seu aplicativo mais adaptável injetando diferentes provedores do mesmo tipo de serviço, conforme apropriado em diferentes circunstâncias.

<br><h3>VI. Que tipo de tarefas uma service pode ter?</h3></br>

Pode ter tarefas direcioadas pelo componet, sendo elas a busca de dados do servidor, validador de entrada do usuário ou fazer logon diretamente no console.

<br><h3>V. Verdadeiro ou Falso. Uma service precisa obrigatoriamente estar em pelo menos um módulo? Justifique sua escolha.</h3></br>

Verdadeiro, pois ela precisa deste módulo para gerar a função e realizar a comunicação com o component.

<br><h3>VI. Verdadeiro ou Falso. Uma service é do tipo de padrão de projeto Singleton?Justifique sua escolha.</h3></br>

Verdadeiro, pois o singleton é uma classe que deve ter apenas uma instância e pode ser utilizado por mais components e services.

<br><h3>VII. Escreva uma service que deverá ter os seguintes métodos e em cada um deverá escrever uma implementação básica (pode ser usado Arrays):

- getUsers( ): <any> { }
```html
getUsers( ): <users> { 
    	return this.http.get<users>(this.url);
}
```

- getUserById(userId: number): <any> { }
```html
getUserById(userId: number): <number> { 
    	return this.http.get<number>(this.url);
}
```

- setUsers(users: any): <any> { }
```hmtl
setUsers(users: any): <any> {
    	return this.http.get<any>(this.url);
}
```

- deleteUser(userId: number): <any> { }</h3></br>
```html
- deleteUser(userId: number): <number> { 
    	return this.http.delete<number>(this.url);
}
```

<br><h2>b) A respeito de services, responda:</h2></br>

<br><h3>I. O que é Injeção de Dependências?</h3></br>

A DI é conectada à estrutura Angular e usada em todos os lugares para fornecer novos componentes com os serviços ou outras coisas que eles precisam. Componentes consomem serviços; ou seja, você pode injetar um serviço em um componente, dando ao componente acesso a essa classe de serviço.

<br><h3>II. Verdadeiro  ou  Falso.  Injeção  de  Dependências  pode  ser  apenas  de  services? Justifique sua escolha.</h3></br>

Falso, pode ser também uma função, por exemplo, ou um valor.

<br><h3>III. Verdadeiro ou Falso. O Angular quando vai instanciar uma classe de componente verifica se as injeções de dependência já não estão sendo usadas?Justifique sua escolha.</h3></br>

Verdadeiro, ao saber que um componente depende de um serviço, o angular primeiro verifica se o injetor possui instâncias existentes desse serviço. Se uma instância de serviço solicitada ainda não existir, o injetor cria uma usando o provedor registrado e a adiciona ao injetor antes de retornar o serviço ao Angular.

<br><h2>c) HTTP Client:</h2></br>

<br><h3>I. O que é o protocolo HTTP?</h3></br>

O protocolo HTTP é responsável por fornecer a comunicação entre front-end e o servidor, ele baixa, carrega dados e acessa também outros serviços de back-end.

<br><h3>II. Cite outros tipos de comunicação com o backend e faça um breve resumo de cada.</h3></br>

- REST: Um conjunto de princípios e definições necessários para a criação de um projeto com interfaces bem definidas.

- SOAP: Um protocolo para troca de informações estruturadas em uma plataforma descentralizada e distribuída.

<br><h3>III. Que recursos o HTTP nos fornece?</h3></br>

- A capacidade de solicitar objetos de resposta digitados;

- Tratamento de erros simplificado;

- Recursos de testabilidade;

- Interceptação de solicitação e resposta.

<br><h3>IV. Para usar o HttpClient no Angular, como devemos fazer sua importação e injeção?</h3></br>

É necessário importar o arquivo Angular HttpClientModule. Configurar o injetor de dependência HttpClient com serviços de suporte para XSRF (Sea Surf ou Session Riding - é um vetor de ataque que aplica um truque no navegador web, fazendo com que ele execute uma ação indesejada na aplicação web alvo onde a vítima está logada). Importado automaticamente por HttpClientModule.

<br><h3>V. Verdadeiro ou Falso. O HttpClient pode ser usado com RxJS? Justifique sua escolha.</h3></br>

Verdadeiro, pois o HttpClient solicita informações e recupera as respostas, e o RxJS é uma biblioteca para construção de programas assíncronos ou baseado em eventos, utilizando uma sequência de observables.

<br><h3>VI. Cite os principais métodos HTTP e faça um breve resumo de cada.</h3></br>

- get(): este método recebe dois argumentos; a URL do terminal a partir da qual buscar e um objeto de opções que é usado para configurar a solicitação;

- POST: Cria um novo Produto;

- PUT: Atualiza um produto;

- DELETE: Deleta um produto;

- HEAD: O método HEAD solicita uma resposta de forma idêntica ao método GET, porém sem conter o corpo da resposta;

- CONNECT: O método CONNECT estabelece um túnel para o servidor identificado pelo recurso de destino;

- OPTIONS: O método OPTIONS é usado para descrever as opções de comunicação com o recurso de destino;

- TRACE: O método TRACE executa um teste de chamada loop-back junto com o caminho para o recurso de destino;

- PATCH: O método PATCH é utilizado para aplicar modificações parciais em um recurso.

<br><h3>VII. Verdadeiro ou Falso. Com o protocolo HTTP é possível dizer/setar o tipo de resposta do servidor backend? Justifique sua escolha.</h3></br>

Verdade, pois através do HttpClient.get() - método para buscar dados de um servidor - O método assíncrono envia uma solicitação HTTP e retorna um Observable que emite os dados solicitados quando a resposta é recebida. O tipo de retorno varia com base nos valores observee responseTypeque você passa para a chamada.

<br><h3>VIII. Cite os tipos de retorno que uma requisição HTTP pode ter? Faça um breve resumo de cada.</h3></br>

- Respostas de informação (100-199): Códigos informativos indicando que a solicitação iniciada pelo navegador continua;

- Respostas de sucesso (200-299): Retornados quando o pedido do navegador foi recebido, compreendido e processado pelo servidor;

- Redirecionamentos (300-399): Retornados quando um novo recurso foi substituído pelo recurso solicitado;

- Erros do cliente (400-499): Indicando que houve um problema com o pedido;

- Erros do servidor (500-599): Indicam que a solicitação foi aceita, mas que um erro no servidor impediu o cumprimento da solicitação.

<br><h3>IX. Cite os principais status de uma requisição HTTP e faça um breve resumo de cada.</h3></br>

- 100 Continue: Essa resposta provisória indica que tudo ocorreu bem até agora e que o cliente deve continuar com a requisição ou ignorar se já concluiu o que gostaria;

- 201 Created: A requisição foi bem sucedida e um novo recurso foi criado como resultado. Esta é uma tipica resposta enviada após uma requisição POST;

- 303 See Other: O servidor manda essa resposta para instruir ao cliente buscar o recurso requisitado em outra URI com uma requisição GET;

- 405 Method Not Allowed: O método de solicitação é conhecido pelo servidor, mas foi desativado e não pode ser usado. Os dois métodos obrigatórios, GET e HEAD, nunca devem ser desabilitados e não devem retornar este código de erro;

- 501 Not Implemented: O método da requisição não é suportado pelo servidor e não pode ser manipulado. Os únicos métodos exigidos que servidores suportem (e portanto não devem retornar este código) são GET e HEAD.

<br><h3>X. Faça um exemplo de chamadas do tipo GET, POST, PUT, DELETE.</h3></br>

GET
```html
getUsers( ): <users> { 
    	return this.http.get<users>(this.url);
}
```

POST
```html
getUserById(userId: number): <number> { 
    	return this.http.post<number>(this.url);
}
```

PUT
```html
getPeso(peso: quilos): <quilos> {
    	return this.http.put<quilos>(this.url);
}
```

DELETE
```html
- deletePeso(peso: quilos): <quilos> { 
    	return this.http.delete<quilos>(this.url);
}
```

<br><h3>XI. Para que serve o cabeçalho em uma requisição HTTP?</h3></br>

Os cabeçalhos HTTP permitem que o cliente e o servidor passem informações adicionais com a solicitação ou a resposta HTTP.

Cabeçalhos podem ser classificados de acordo com os seus contextos:

- Cabeçalho genérico: Cabeçalhos que podem ser usados tanto em solicitações quanto em respostas, porém sem relação com os dados eventualmente transmitidos no corpo da mensagem;

- Cabeçalho de solicitação: Cabeçalhos contendo mais informação sobre o recurso a ser obtido ou sobre o próprio cliente;

- Cabeçalho de resposta (en-US): Cabeçalhos contendo informação adicional sobre a solicitação, como a sua localização ou sobre o servidor;

- Cabeçalho de entidade: Cabeçalhos contendo mais informação sobre o conteúdo da entidade, como o tamanho do conteúdo ou o seu MIME-type.

<br><h3>XII. O que é um Interceptor e quais as suas aplicações?</h3></br>

O interceptor, inspeciona e transforma solicitações HTTP de seu aplicativo para um servidor e pode também inspecionar e transformar as respostas de um servidor no caminho de volta ao aplicativo. Vários interceptores formam uma cadeia de manipuladores de solicitação/resposta para frente e para trás.

Os interceptores podem executar uma variedade de tarefas implícitas , desde a autenticação até o registro, de maneira rotineira e padrão, para cada solicitação/resposta HTTP.

Sem interceptação, os desenvolvedores teriam que implementar essas tarefas explicitamente para cada HttpClientchamada de método.

Para implementar um interceptor, declare uma classe que implemente o intercept()método da HttpInterceptor (intercepta e manipula um HttpRequestou HttpResponse.) interface.

<br><h3>XIII. Quais cenários mais comuns podemos usar Interceptors?</h3></br>

Quando se é necessário executar uma variedade de tarefas implícitas , desde a autenticação até o registro, de maneira rotineira e padrão, para cada solicitação/resposta HTTP.

<br><h2>d) RxJS:</h2></br>

<br><h3>I. O que é o RxJS?</h3></br>

RxJS é uma biblioteca para compor programas assíncronos e baseados em eventos usando sequências observáveis.

<br><h3>II. Qual a diferença de Promises e Observables?</h3></br>

- Promise são ansiosas, enquanto Observable são preguiçosos,

- Promise sempre são assíncronas, enquanto Observable pode ser tanto síncronas quanto assíncronas;

- Promise sempre retornam o mesmo valor, enquanto Observable pode retornar um fluxo de valores, de nenhum a vários.

<br><h3>III. O que significa ser baseado em eventos?</h3></br>

Significa ser baseado em ações a serem tomadas pelo usuário, por exemplo, evento em um click, utilização de um botão, a interação disposta a partir dessas ações.

<br><h3>VI. O que é o padrão de projetos Observer?</h3></br>

Os OBSERVERs registram-se no SUBJECT para receber atualizações quando os dados do SUBJECT são alterados. Os OBSERVERs também podem cancelar o seu registro e dessa forma não receber mais nenhuma atualização do SUBJECT.

<br><h3>V.  O que é o padrão de projetos Iterator?</h3></br>

O padrão Iterator permite o acesso sequencial aos elementos de um conjunto sem expor sua implementação subjacente. O padrão Iterator também é responsável por toda a tarefa de iteração, eliminando assim a responsabilidade adicional, simplificando, assim a sua aplicação e deixando a responsabilidade onde deveria estar.

<br><h3>VI. O que é programação funcional com coleções?</h3></br>
Programação funcional é uma forma de programação declarativa. Por outro lado, a maioria das linguagens mais conhecidas, incluindo linguagens OOP (programação orientada a objeto), como C#, Visual Basic, C++ e Java, foram criadas para dar suporte principalmente à programação imperativa (de procedimento).

Na programação funcional a modelagem de um problema computacional é composta por uma coleção de funções que interagem entre si utilizando recursos como: composição funcional, condições e recursão. Essencialmente, “a computação é vista como uma função matemática mapeando entradas e saídas” – onde não há uma noção de estado, e com essa perspectiva, distingue-se diretamente dos paradigmas imperativo, lógico e/ou orientado à objeto.

<br><h3>VII. Quais os conceitos básicos do RxJS para eventos assíncronos? Descreva todos e dê um exemplo de como utilizá-lo.</h3></br>

- Observable: representa a ideia de uma coleção invocável de valores ou eventos futuros;

- Observer: é uma coleção de callbacks que sabe escutar os valores entregues pelo Observable;

- Subscription: representa a execução de um Observável, é útil principalmente para cancelar a execução;

- Operators: são funções puras que permitem um estilo de programação funcional de lidar com coleções com operações como map, filter, concat, reduce, etc;

- Subject: é equivalente a um EventEmitter e a única maneira de multicast de um valor ou evento para vários observadores;

- Schedulers: são despachantes centralizados para controlar a simultaneidade, permitindo-nos coordenar quando a computação acontece em, por exemplo, setTimeoutou requestAnimationFrameoutros.

<br><h3>VIII. Quais são os operadores de criação?</h3></br>

- ajax;

- bindCallback;

- bindNodeCallback;

- defer;

- empty;

- from;

- fromEvent;

- fromEventPattern;

- generate;

- interval;

- of;

- range;

- throwError;

- timer;

- iif.

<br><h3>IX. Ainda dentro de operadores de criação, explique melhor e dê um exemplo para os seguintes operadores:</h3></br>

- ajax; Ele cria um observável para uma solicitação Ajax com um objeto de solicitação com url, cabeçalhos, etc. ou uma string para uma URL.
```html
const ajax: AjaxCreationMethod;
```

- from; Cria um Observable a partir de um Array, um objeto do tipo array, um Promise, um objeto iterável ou um objeto do tipo Observable.
```html
from<T>(input: ObservableInput<T>, scheduler?: SchedulerLike): Observable<T>
```

- fromEvent; Cria um Observable que emite eventos de um tipo específico provenientes de determinado destino de evento.
```html
fromEvent<T>(target: any, eventName: string, options?: EventListenerOptions | ((...args: any[]) => T), resultSelector?: (...args: any[]) => T): Observable<T>
```

- generate; Gera uma sequência observável executando um loop controlado por estado produzindo os elementos da sequência, usando o agendador especificado para enviar mensagens de observador.
```html
generate<T, S>(initialStateOrOptions: S | GenerateOptions<T, S>, condition?: ConditionFunc<S>, iterate?: IterateFunc<S>, resultSelectorOrScheduler?: SchedulerLike | ResultFunc<S, T>, scheduler?: SchedulerLike): Observable<T>
```
- of; Converte os argumentos em uma sequência observável.
```html
of<T>(...args: (SchedulerLike | T)[]): Observable<T>
```
- interval; Cria um Observable que emite números sequenciais a cada intervalo de tempo especificado, em um SchedulerLike.
```html
interval(period: number = 0, scheduler: SchedulerLike = asyncScheduler): Observable<number>
```
- throwError; Emitir erro na assinatura.
```html
throwError(errorOrErrorFactory: any, scheduler?: SchedulerLike): Observable<never>
```
- timer; Após determinada duração, emite números em sequência a cada duração especificada.
```html
timer(dueTime: number | Date = 0, intervalOrScheduler?: number | SchedulerLike, scheduler: SchedulerLike = asyncScheduler): Observable<number>
```

<br><h3>X. Quais os operadores de criação de associação?</h3></br>

- combineLatest;

- concat;

- forkJoin;

- merge;

- partition;

- race;

- zip.

<br><h3>XI. Ainda dentro de operadores de criação de associação, explique melhor e dê um exemplo para os seguintes operadores:</h3></br>

- concat; Cria um Observable de saída que emite sequencialmente todos os valores do primeiro Observable fornecido e depois passa para o próximo.
```html
concat(...args: any[]): Observable<unknown>
```

- forkJoin; Aceita um ou um dicionário Arrayde e retorna um que emite uma matriz de valores na mesma ordem exata da matriz passada ou um dicionário de valores na mesma forma que o dicionário passado.ObservableInputObjectObservableInputObservable
```html
forkJoin(...args: any[]): Observable<any>
```

- merge; Cria uma saída Observable que emite simultaneamente todos os valores de cada entrada Observable.
```html
merge(...args: (number | SchedulerLike | Observable<unknown> | InteropObservable<unknown> | AsyncIterable<unknown> | PromiseLike<unknown> | ArrayLike<...> | Iterable<...> | ReadableStreamLike<...>)[]): Observable<unknown>
```

<br><h3>XII. Quais os operadores de transformação?</h3></br>

- buffer;

- bufferCount;

- bufferTime;

- bufferToggle;

- bufferWhen;

- concatMap;

- concatMapTo;

- exhaust;

- exhaustMap;

- expand;

- groupBy;

- map;

- mapTo;

- mergeMap;

- mergeMapTo;

- mergeScan;

- pairwise;

- partition;

- pluck;

- scan;

- switchScan;

- switchMap;

- switchMapTo;

- window;

- windowCount;

- windowTime;

- windowToggle;

- windowWhen;

<br><h3>XIII. Ainda dentro de operadores de transformação, explique melhor e dê um exemplo para os seguintes operadores:</h3></br>

- concatMap; Projeta cada valor de origem para um Observable que é mesclado no Observable de saída, de maneira serializada, esperando que cada um seja concluído antes de mesclar o próximo.
```html
concatMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, ObservedValueOf<O> | R>
```

- map; Aplica uma determinada projectfunção a cada valor emitido pelo Observable de origem e emite os valores resultantes como um Observable.
```html
map<T, R>(project: (value: T, index: number) => R, thisArg?: any): OperatorFunction<T, R>
```

- mapTo; Emite o valor constante dado na saída Observable toda vez que a fonte Observable emite um valor.
```html
mapTo<R>(value: R): OperatorFunction<any, R>
```

- mergeMap; Projeta cada valor de origem para um Observable que é mesclado na saída Observable.
```html
mergeMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector?: number | ((outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R), concurrent: number = Infinity): OperatorFunction<T, ObservedValueOf<O> | R>
```

- mergeMapTo; Projeta cada valor de origem para o mesmo Observable que é mesclado várias vezes na saída Observable.
```html
mergeMapTo<T, R, O extends ObservableInput<unknown>>(innerObservable: O, resultSelector?: number | ((outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R), concurrent: number = Infinity): OperatorFunction<T, ObservedValueOf<O> | R>
```

- switchMap; Projeta cada valor de origem para um Observable que é mesclado no Observable de saída, emitindo valores apenas do Observable projetado mais recentemente.
```html
switchMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, ObservedValueOf<O> | R>
```

- switchMapTo; Projeta cada valor de origem para o mesmo Observable que é nivelado várias vezes com switchMapo Observable de saída.
```html
switchMapTo<T, R, O extends ObservableInput<unknown>>(innerObservable: O, resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, ObservedValueOf<O> | R>
```
