import PageContainer from './page-container';
import Header from './header';

export default function Page({ title, description, children }) {
  return (
    <>
      <Header />
      <PageContainer title={title} description={description}>
        {children}
      </PageContainer>
    </>
  );
}
