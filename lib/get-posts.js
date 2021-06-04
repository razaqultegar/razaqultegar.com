import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default () => {
  const posts = fs
    .readdirSync('./data/journal/')
    .filter((file) => path.extname(file) === '.md')
    .map((file) => {
      const postContent = fs.readFileSync(`./data/journal/${file}`, 'utf8')
      const { data, content } = matter(postContent)

      if (data.published === false) {
        return null
      }

      return { ...data, body: content }
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return posts
}
