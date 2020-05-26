export default function About() {
  return (
    <div className="about-main">
      <aside className="about-images">
        <img src="/static/medias/about.jpeg" />
      </aside>
      <div className="about-description">
        <img src="/static/medias/about.jpeg" />
        <h1 className="about-title">
          Halo, saya Razaqul Tegar! <br />
          Saya seorang Full Stack Web Developer.
        </h1>
        <p>
          Berhasil membuat aplikasi kalkulator dengan menggunakan Visual Basic 6.0 merupakan awal
          perjalan saya di dunia pemograman. Lebih tepatnya waktu itu saya masih duduk di Sekolah
          Menengah Pertama. Setelah lulus, saya masuk ke salah satu Sekolah Menengah Kejuruan
          ternama yang ada di Purwokerto dan mengambil jurusan Rekayasa Perangkat Lunak.
        </p>
        <p>
          Saat ini saya sering menghabiskan waktu untuk membuat sebuah aplikasi/website, baik itu
          secara profesional maupun hanya sebagai hobi. Ketika saya tidak melakukan pekerjaan,
          biasanya saya menyempatkan waktu untuk berkegiatan alam seperti mendaki gunung, membaca
          buku, dan ngopi santai dengan beberapa teman.
        </p>
        <h3>Keahlian</h3>
        <ul>
          <li>Bootstrap, CSS, HTML, Sass</li>
          <li>PHP, CodeIgniter, WordPress</li>
          <li>JavaScript, Angular, Electron, React, JQuery, Webpack</li>
          <li>Node.js, Express, Laravel (learning)</li>
          <li>Git, Java, Linux (Basic CLI), SQL</li>
        </ul>
      </div>
      <style jsx>{`
        .about-main {
          position: relative;
          display: flex;
          -webkit-box-pack: justify;
          justify-content: space-between;
        }

        .about-images {
          display: none;
          flex-flow: column;
          position: relative;
          width: 300px;
          margin-right: 50px;
        }

        .about-description {
          min-width: 0;
          max-width: 900px;
          border-top: 3px solid #000;
        }

        .about-description img {
          width: 100%;
          margin: 25px 0 0;
        }

        .about-title {
          color: black;
          font-size: 2rem;
          line-height: 1.3;
          text-decoration: none;
          margin: 15px 0 15px 0;
          word-break: break-word;
        }

        .about-description p {
          font-family: 'Neue Haas Display Light', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 1.3rem;
          line-height: 1.7;
        }

        @media only screen and (min-width: 1000px) {
          .about-images {
            display: flex;
            width: 35%;
          }

          .about-description {
            width: 75%;
            margin: 0;
          }

          .about-description img {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
