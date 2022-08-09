const normalizr = require('normalizr')
const blogpost = require('./blogpost.json')
const fs = require('fs')

const authorSchema = normalizr.schema.Entity('authors')

const commentSchema = new normalizr.schema.Entity('comments')

const postChema = new normalizr.schema.Entity('posts', {
    author: authorSchema,
    comments: [commentSchema]
})

const normalizeBlogPost = normalizr.normalize(blogpost, postChema)

const denormalizedBlogpost = normalizr.denormalize(normalizeBlogPost, postChema,normalizeBlogPost.entities)
fs.promises
    .writeFile('blogpost.json', JSON.stringify(denormalizedBlogpost, null, 2))
    .then(() => console.log('blogpost.json written'))

