import Page from '../components/page';

export default function Custom404() {
  return (
    <Page title="Halaman Tidak Ditemukan | Razaqul Tegar - Full Stack Web Developer">
      <div className="error-page">
        <h2>404</h2>
        <style jsx>{`
          .error-page {
            align-items: center;
            color: #000;
            display: flex;
            height: calc(100vh - 70px);
            justify-content: center;
            margin: 0 auto;
            width: 100%;
          }

          .error-page h2 {
            font-size: 120px;
            line-height: 1.2;
            margin: 0;
          }

          @media only screen and (min-width: 700px) {
            .error-page h2 {
              font-size: 300px;
            }
          }

          @media only screen and (min-width: 1000px) {
            .error-page {
              max-width: 1600px;
            }
          }
        `}</style>
      </div>
    </Page>
  );
}
