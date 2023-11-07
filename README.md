# getUniqueSubsets

Este repositório contém uma função em JavaScript chamada `getUniqueSubsets` que gera todos os subconjuntos únicos de um conjunto de números inteiros, conforme especificado no problema.

## Função `getUniqueSubsets`

A função `getUniqueSubsets` é responsável por gerar os subconjuntos únicos de um conjunto de números inteiros. Ela utiliza manipulação de bits para otimizar o processo de geração de subconjuntos. A função aceita um array de números inteiros como entrada e retorna um array de arrays contendo todos os subconjuntos únicos.

### Uso da função

```javascript
const getUniqueSubsets require("./src/getUniqueSubsets");

const nums = [1, 2, 3];
const subsets = getUniqueSubsets(nums);
console.log(subsets);
```

## Executando os Testes

Este repositório inclui testes escritos usando a lib de testes nativa do node. Os testes cobrem diferentes cenários para garantir que a função `getUniqueSubsets` funcione corretamente.

Certifique-se de que você possui o Node.js 21.1.0 ou superior.

### Passos para Executar os Testes

1. Clone este repositório para o seu ambiente local.

2. Navegue para a pasta do repositório:

```bash
cd caminho-para-o-repositorio
```

3. Execute os testes:

```bash
npm test
```

Isso executará os testes definidos no arquivo de teste e exibirá os resultados no terminal.

## Cenários de Teste

Os testes incluem os seguintes cenários:

1. Conjunto vazio resulta em apenas um subconjunto (conjunto vazio).
2. Geração de subconjuntos para um pequeno conjunto onde a ordem não importa.
3. Conjuntos iguais devem ser considerados em um subconjunto.
4. Manipulação eficiente de um conjunto grande.
5. Inclusão de um conjunto vazio para um conjunto não vazio e um conjunto vazio.
6. Dois conjuntos vazios resultam em apenas um subconjunto (conjunto vazio).

Certifique-se de que os testes passam corretamente após a execução.
