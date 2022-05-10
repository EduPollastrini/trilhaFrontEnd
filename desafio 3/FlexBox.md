<h1 align="center"><strong>FlexBox</strong></h1>

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