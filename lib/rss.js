const fs = require('fs')
const RSS = require('rss')
const path = require('path')
const marked = require('marked')
const matter = require('gray-matter')

const posts = fs
  .readdirSync(path.resolve(__dirname, '../data/journal/'))
  .filter((file) => path.extname(file) === '.md')
  .map((file) => {
    const postContent = fs.readFileSync(`./data/journal/${file}`, 'utf8')
    const { data, content } = matter(postContent)
    return { ...data, body: content }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

const renderer = new marked.Renderer()

renderer.link = (href, _, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`

marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  renderer,
})

const renderPost = (md) => marked(md)

const main = () => {
  const feed = new RSS({
    title: 'Razaqul Tegar',
    site_url: 'https://razaqultegar.com',
    feed_url: 'https://razaqultegar.com/feed.xml',
    image_url: 'https://razaqultegar.com/og.png',
    language: 'id',
  })

  posts.forEach((post) => {
    const url = `https://razaqultegar.com/journal/${post.slug}`

    feed.item({
      title: post.title,
      description: renderPost(post.body),
      date: new Date(post.date),
      author: 'Razaqul Tegar',
      url,
      guid: url,
    })
  })

  const rss = feed.xml({ indent: true })
  fs.writeFileSync(path.join(__dirname, '../public/feed.xml'), rss)
}

main()
