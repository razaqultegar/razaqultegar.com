import PageContainer from './page-container';
import Header from './header';

export default function Page({ title, description, children }) {
  return (
    <div className="page-width">
      <Header />
      <PageContainer title={title} description={description}>
        {children}
      </PageContainer>
      <style jsx global>{`
        .page-width {
          padding-top: 0;
          margin: 0 auto;
          width: 100%;
        }

        @media only screen and (min-width: 1000px) {
          .page-width {
            max-width: 1600px;
          }
        }
      `}</style>
    </div>
  );
}
