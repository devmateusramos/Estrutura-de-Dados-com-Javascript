function stack() {
  var items = [];

  this.push = function() {
      // Adiciona novo item à pilha
    items.push(element)
  }

  this.pop = function() {
      // Remover item que está no topo da pilha
    return items.pop()
  }

  this.peek = function() {
      // Devolve o elemento que está no topo da pilha
    return items[items.length]
  }

  this.isEmpty = function() {
      // Informar se a pilha está vazia ou não
    return this.length === 0
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
