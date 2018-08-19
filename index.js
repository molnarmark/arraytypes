class ArrayTypesRepr {
  constructor(type, elements = []) {
    this.type = type;
    this.elements = elements
  }

  toString() {
    let stringRepr = `${this.type}<`
    const processedTypes = []
    for (const element of this.elements) {
      if (processedTypes.includes(element.type)) {
        continue
      }
      stringRepr = `${stringRepr}${element.type}|`
      processedTypes.push(element.type)
    }
    stringRepr = stringRepr + '>'
    stringRepr = stringRepr.replace(/\|>$/, '>')
    return stringRepr
  }

  elementTypes() {
    return [...new Set(this.elements.map(elem => elem.type))]
  }
}

const isArray = variable => Object.prototype.toString.call(variable) === '[object Array]'

module.exports = function ArrayTypes(variable) {
  if (isArray(variable)) {
    const elements = []
    for (const element of variable) {
      elements.push({
        value: element,
        type: typeof element
      })
    }

    return new ArrayTypesRepr('Array', elements)
  }
}