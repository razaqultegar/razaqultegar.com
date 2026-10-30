import Image from "next/image";
import Section from "@/components/sections/Section";
import { clients } from "@/data/clients";

const logoHeight = { md: "h-14", lg: "h-18" };

export default function Dots() {
  return (
    <Section id="dots" title="DOTS.">
      <p>
        Sebelum jadi DOTS., tim ini namanya{" "}
        <strong className="font-semibold">Limbo</strong>, kumpulan freelancer
        yang kerja bareng sejak 2021 sampai 2023. Setelah ngelewatin beberapa
        tantangan internal, kami rebranding jadi{" "}
        <strong className="font-semibold">DOTS.</strong> di 2023 dan jalan
        sampai sekarang. Belum berbadan hukum resmi, jadi lebih pas disebut tim
        lepas yang solid ketimbang agensi formal.
      </p>
      <p>
        Peran saya di sini juga berkembang: mulai dari{" "}
        <strong className="font-semibold">Senior Full Stack Developer</strong>,
        sekarang jadi <strong className="font-semibold">Project Manager</strong>
        . Dulu sibuk ngoding, sekarang lebih banyak mikirin arah proyek dan
        koordinasi tim.
      </p>
      <div>
        <p className="text-ink/70 mb-3 text-sm">
          Beberapa klien yang pernah dikerjain:
        </p>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {clients.map((client) => (
            <li
              key={client.name}
              className="flex h-20 items-center justify-center px-2"
            >
              <Image
                src={client.logo}
                alt={client.name}
                title={client.name}
                width={160}
                height={80}
                className={`${client.size ? logoHeight[client.size] : "h-10"} w-auto max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0`}
              />
            </li>
          ))}
          <li className="group flex h-20 items-center justify-center gap-2 px-2">
            <span className="text-rust text-5xl leading-none italic transition group-hover:-rotate-12">
              &amp;
            </span>
            <span className="text-ink/60 group-hover:text-ink text-xs leading-tight tracking-widest uppercase transition">
              masih
              <br />
              banyak
              <br />
              lagi
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
