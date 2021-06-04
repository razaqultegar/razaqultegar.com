import Page from '@components/page'

const Contact = () => {
  return (
    <Page title="Kontak" footer={false} description="Mari berdiskusi.">
      <article>
        <p>Mari berdiskusi.</p>

        <blockquote>
          <a
            href="mailto:razaqultegar@protonmail.com?subject=Hello"
            className="reset"
          >
            razaqultegar@protonmail.com
          </a>
        </blockquote>
      </article>
    </Page>
  )
}

export default Contact
