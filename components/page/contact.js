export default function Contact() {
  return (
    <div id="pages">
      <div className="page-header">
        <h1 className="page-title">Kontak</h1>
      </div>
      <div className="page-body">
        <p>
          Saya tidak begitu bisa memainkan sebuah platform sosial media, terkadang saya membuat akun
          hanya untuk melihat desain, fitur, dsb. Terakhir saya menghapus akun Instagram, karena
          semakin hari semakin tidak ada waktu untuk memainkan itu.
        </p>
        <ul>
          <li>
            <a href="https://facebook.com/razaqultegar">Facebook</a>
          </li>
          <li>
            <a href="https://github.com/razaqultegar">GitHub</a>
          </li>
        </ul>
        <h3>Podcast</h3>
        <ul>
          <li>
            <a href="https://open.spotify.com/episode/7g9nSeHXUt9jxIvxmShoux?si=htbCu-H-QN2mwS9pZT5RZw">
              Antara Anak Muda, Narkoba, Kopi-Senja, dan Karir
            </a>
          </li>
        </ul>
        <h3>Email</h3>
        <p>
          Saya selalu senang ketika ada orang menghubungi saya. Untuk itu jika kamu ingin berbicara
          dengan saya, apapun itu keperluannya. Silahkan kirim email ke{' '}
          <strong>myrazaqul[at]gmail[dot]com</strong>.
        </p>
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

        .page-body {
          font-family: 'Lora', Georgia, serif;
          font-size: 1.125rem;
          line-height: 1.7;
          margin: 30px auto 0;
        }

        @media only screen and (min-width: 700px) {
          .page-title {
            font-size: 3.125rem !important;
          }
        }

        @media only screen and (min-width: 1000px) {
          .page-header {
            margin: 0 auto 20px;
          }
        }
      `}</style>
    </div>
  );
}
