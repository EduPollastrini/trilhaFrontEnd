<h1 align="center"><strong>Grid Layout</strong></h1>

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