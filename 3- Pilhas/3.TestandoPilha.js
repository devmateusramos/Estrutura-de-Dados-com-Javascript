function Stack() {
  var items = [];

  this.push = function(element) {
      // Adiciona novo item à pilha
    items.push(element)
  }

  this.pop = function() {
      // Remover item que está no topo da pilha
    return items.pop()
  }

  this.peek = function() {
      // Devolve o elemento que está no topo da pilha
    return items[items.length - 1]
  }

  this.isEmpty = function() {
      // Informar se a pilha está vazia ou não
    return items.length === 0
  }

  this.clear = function() {
      // Limpa a pilha
    items = []
  }

  this.size = function() {
      // Informar o tamanho da pilha
    return items.length
  }

  this.print = function() {
      // Imprime a pilha no console
    console.log(items.toString())
  }
}

var pilha = new Stack()

pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)
pilha.push(5)

console.log(pilha.peek())
pilha.print()

pilha.pop()
pilha.print()
pilha.clear()

console.log(pilha.isEmpty())