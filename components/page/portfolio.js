export default function Portfolio() {
  return (
    <div id="pages">
      <div className="page-header">
        <h1 className="page-title">Portfolio</h1>
      </div>
      <div className="page-body">
        <section className="featured-portfolio">
          <div className="featured-thumbnail">
            <div className="thumbnail-images">
              <img src="/static/medias/screenshot-covid19-go-id.png" />
            </div>
          </div>
          <div className="featured-body">
            <div className="featured-header">
              <span>Unggulan</span>
              <h3>COVID19.GO.ID</h3>
            </div>
            <div className="featured-description">
              <p>
                Dapat memberikan informasi seputar Covid-19 secepat mungkin kepada masyarakat
                Indonesia. Situs ini dikelola oleh tim Gugus Tugas Percepatan Penanganan COVID-19
              </p>
              <div className="featured-tech">
                <span>development</span>
                <span>nodejs</span>
                <span>wordpress</span>
              </div>
            </div>
            <div className="featured-link">
              <a href="https://covid19.go.id" style={{ color: '#fff' }}>
                Kunjungi Situs →
              </a>
            </div>
          </div>
        </section>
        <div className="portfolio">
          <div className="portfolio-header">
            <h3>BTPN Syariah</h3>
          </div>
          <div className="portfolio-body">
            <p>Aplikasi manajamen yang diterapkan di kantor pusat BTPN Syariah.</p>
            <div className="portfolio-tech">
              <span>java</span>
              <span>mysql</span>
              <span>netbeans</span>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-header">
            <h3>Dumoro</h3>
          </div>
          <div className="portfolio-body">
            <p>Tema situs wordpress kustom untuk UKM yang hendak memulai bisnis di dunia digital.</p>
            <div className="portfolio-tech">
              <span>development</span>
              <span>php</span>
              <span>wordpress</span>
            </div>
          </div>
          <div className="portfolio-link">
            <a href="https://puskomedia.id/dumoro" style={{ color: '#fff' }}>
              Kunjungi Situs →
            </a>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-header">
            <h3>Panda SID</h3>
          </div>
          <div className="portfolio-body">
            <p>Aplikasi sistem informasi desa yang dikembangan untuk memudahkan desa dalam tata kelola informasi.</p>
            <div className="portfolio-tech">
              <span>codeigniter</span>
              <span>development</span>
              <span>php</span>
            </div>
          </div>
          <div className="portfolio-link">
            <a href="https://panda.id" style={{ color: '#fff' }}>
              Kunjungi Situs →
            </a>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-header">
            <h3>Pertamina EP</h3>
          </div>
          <div className="portfolio-body">
            <p>Aplikasi pemutar vidio presentasi yang diminta secara khusus oleh VP Drilling &amp; Workover Pertamina EP, Bpk Pranefo Maaruf.</p>
            <div className="portfolio-tech">
              <span>development</span>
              <span>electron</span>
              <span>javascript</span>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-header">
            <h3>Sensus Penduduk Online</h3>
          </div>
          <div className="portfolio-body">
            <p>Situs informasi untuk pendataan penduduk yang dilakukan oleh Badan Pusat Statistik Indonesia.</p>
            <div className="portfolio-tech">
              <span>angular</span>
              <span>development</span>
              <span>javascript</span>
            </div>
          </div>
          <div className="portfolio-link">
            <a href="https://sensus.bps.go.id" style={{ color: '#fff' }}>
              Kunjungi Situs →
            </a>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-header">
            <h3>The Jakmania Purwokerto</h3>
          </div>
          <div className="portfolio-body">
            <p>Aplikasi sistem informasi untuk memudahkan dalam tata kelola anggota dan keuangan dalam organisasi.</p>
            <div className="portfolio-tech">
              <span>codeigniter</span>
              <span>design</span>
              <span>development</span>
              <span>php</span>
            </div>
          </div>
          <div className="portfolio-link">
            <a href="https://app.jakpurwokerto.org" style={{ color: '#fff' }}>
              Kunjungi Situs →
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        #pages {
          max-width: 800px;
          margin: 0 auto 40px;
        }

        .page-header {
          border-top: 3px solid #000;
          margin: 0 auto 20px;
        }

        .page-title {
          font-size: 2rem;
          line-height: 1.3;
          word-break: break-word;
          text-decoration: none;
          margin: 15px 0 15px 0;
        }

        .featured-portfolio {
          border-radius: 6px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
          color: #fff;
          display: flex;
          flex-direction: column;
          margin-bottom: 48px;
          min-height: 300px;
          overflow: hidden;
        }

        .featured-thumbnail {
          flex: 1;
        }

        .thumbnail-images {
          height: 100%;
          margin: 0;
          min-height: 320px;
          overflow: hidden;
          position: relative;
        }

        .thumbnail-images img {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }

        .featured-body {
          background-color: #222;
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 24px;
        }

        .featured-header span {
          font-family: 'Neue Haas Display Light', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 15px;
          letter-spacing: 0.01em;
          line-height: 18px;
          text-transform: uppercase;
        }

        .featured-header h3 {
          font-size: 22px;
          line-height: 26px;
          margin-bottom: 12px;
          margin-top: 4px;
          text-transform: uppercase;
        }

        .feaetured-description {
          flex: 1;
        }

        .featured-description p,
        .portfolio-body p {
          font-family: 'Lora', Georgia, sans-serif;
          font-size: 16px;
          line-height: 24px;
          margin: 0;
        }

        .featured-tech,
        .portfolio-tech {
          cursor: default;
          margin-top: 16px;
        }

        .featured-tech span,
        .portfolio-tech span {
          align-items: center;
          background-color: #d7d7db;
          border: 1px solid transparent;
          border-radius: 3px;
          color: #222;
          display: inline-flex;
          font-size: 14px;
          line-height: 20px;
          margin: 8px 8px 0 0;
          padding: 0 4px;
        }

        .featured-link {
          margin-top: 75px;
        }

        .portfolio {
          background-color: #222;
          border-radius: 4px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
          color: #fff;
          display: flex;
          flex: 1 1 100%;
          flex-direction: column;
          margin-bottom: 24px;
          overflow: hidden;
          position: relative;
        }

        .portfolio-header {
          display: flex;
          flex-direction: row;
          padding: 12px 16px 0;
          border-top: 4px solid #000000;
        }

        .portfolio-header h3 {
          font-size: 22px;
          line-height: 26px;
          margin: 0;
        }

        .portfolio-body {
          padding: 8px 16px 24px;
        }

        .portfolio-link {
          padding: 0 16px 16px;
        }

        @media only screen and (min-width: 700px) {
          .page-title {
            font-size: 3.125rem !important;
          }

          .featured-thumbnail {
            display: block;
            height: 100%;
            position: relative;
            width: 100%;
          }

          .featured-portfolio {
            flex-direction: row;
          }
        }

        @media only screen and (min-width: 1000px) {
          .page-header {
            margin: 0 auto 20px;
          }

          .featured-header h3,
          .portfolio-header h3 {
            font-size: 28px;
            line-height: 32px;
          }
        }
      `}</style>
    </div>
  );
}
