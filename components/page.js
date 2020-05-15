import PageContainer from './page-container';

export default function Page({ title, description, children }) {
  return (
    <PageContainer title={title} description={description}>
      {children}
    </PageContainer>
  );
}
