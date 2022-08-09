const {normalizr, denormalize,schema} = require('normalizr')
const util = require('util')

const blog = require('./blog.json')

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

const blogSchema = new schema.Entity('blog', {
    posts: [postSchema]
})

console.log('==== OBJETO ORIGINAL ====')
console.log(JSON.stringify(blog).length)
print(blog)

console.log('==== OBJETO ORIGINAL ====')
const normalizedBlog = normalizr(blog,blogSchema)
console.log(JSON.stringify(normalizedBlog).length)
print(normalizedBlog)

console.log('==== OBJETO ORIGINAL ====')
const denormalizedBlog = denormalize(normalizedBlog.result,blogSchema,normalizedBlog.entities)
console.log(JSON.stringify( denormalizedBlog ).length)