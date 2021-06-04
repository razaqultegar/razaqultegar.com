import Link from '@components/link'

import styles from './navigation.module.css'

const Previous = ({ previous, next }) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.previous}>
        {previous && (
          <Link href="/journal/[slug]" gray as={`/journal/${previous.slug}`}>
            <div className={styles.title}>← Older</div>
            {previous.title}
          </Link>
        )}
      </div>

      <div className={styles.next}>
        {next && (
          <Link href="/journal/[slug]" gray as={`/journal/${next.slug}`}>
            <div className={styles.title}>Newer →</div>
            {next.title}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Previous
