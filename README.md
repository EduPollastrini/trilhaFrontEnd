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