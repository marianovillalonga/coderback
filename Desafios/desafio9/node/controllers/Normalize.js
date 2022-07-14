const {normalizr, denormalize,schema} = require('normalizr')
const util = require('util')

const msj = require('./msj.json')

const print = obj =>{
    console.log(util.inspect(obj, false, 12, true))
}

const userSchema = new schema.Entity('users')

const commentSchema = new schema.Entity('comments', {
    commenter: userSchema
})

const postSchema = new schema.Entity('posts', {
    author: userSchema,
    coment: [commentSchema]
})

const msjSchema = new schema.Entity('msj', {
    posts: [postSchema]
})

console.log('==== OBJETO ORIGINAL ====')
console.log(JSON.stringify(msj).length)
print(msj)

console.log('==== OBJETO ORIGINAL ====')
const normalizedMsj = normalizr(msj,msjSchema)
console.log(JSON.stringify(normalizedMsj).length)
print(normalizedMsj)

console.log('==== OBJETO ORIGINAL ====')
const denormalizedMsj = denormalize(normalizedMsj.result,msjSchema,normalizedMsj.entities)
console.log(JSON.stringify( denormalizedMsj ).length)