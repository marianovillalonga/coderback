const fs = require('fs')

class Contenedor {
  constructor (name) {
    this.name = name
  }

  async save (item) {
    let data
    try {
      data = await fs.promises.readFile(`./${this.name}`)
      data = JSON.parse(data)
    } catch (e) {
      data = []
    }
    const lastItem = data[data.length - 1]

    let id = 1

    if (lastItem) {
      id = lastItem.id + 1
    }
    item.id = id

    data.push(item)

    return fs.promises.writeFile(`./${this.name}`, JSON.stringify(data, null, 2))
  }

  async getById (id) {
    let data
    try {
      data = await fs.promises.readFile(`./${this.name}`)
      data = JSON.parse(data)
    } catch (e) {
      data = []
    }

    return data.find(item => item.id === id)
  }

  async getAll () {
    let data
    try {
      data = await fs.promises.readFile(`./${this.name}`)
      data = JSON.parse(data)
    } catch (e) {
      data = []
    }

    return data
  }

  async deleteById (id) {
    let data
    try {
      data = await fs.promises.readFile(`./${this.name}`)
      data = JSON.parse(data)
    } catch (e) {
      data = []
    }

    const productIndex = data.findIndex(item => item.id === id)

    if (productIndex === -1) {
      return
    }

    data.splice(productIndex, 1)

    return fs.promises.writeFile(`./${this.name}`, JSON.stringify(data, null, 2))
  }

  async deleteAll () {
    return fs.promises.writeFile(`./${this.name}`, '')
  }
 }

 module.exports = Contenedor