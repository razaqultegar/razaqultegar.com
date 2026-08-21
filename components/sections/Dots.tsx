import Section from "@/components/sections/Section";
import { clients } from "@/data/clients";

export default function Dots() {
  return (
    <Section id="dots" title="DOTS.">
      <p>
        Sebelum jadi DOTS., tim ini namanya{" "}
        <strong className="font-semibold">Limbo</strong> — kumpulan freelancer
        yang kerja bareng sejak 2021 sampai 2023. Setelah ngelewatin beberapa
        tantangan internal, kami rebranding jadi{" "}
        <strong className="font-semibold">DOTS.</strong> di 2023 dan jalan
        sampai sekarang. Belum berbadan hukum resmi, jadi lebih pas disebut tim
        lepas yang solid ketimbang agensi formal.
      </p>
      <p>
        Peran saya di sini juga berkembang: mulai dari{" "}
        <strong className="font-semibold">Senior Full Stack Developer</strong>,
        sekarang jadi <strong className="font-semibold">Project Manager</strong>{" "}
        — dulu sibuk ngoding, sekarang lebih banyak mikirin arah proyek dan
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
              className="border-ink/20 text-ink/60 flex h-16 items-center justify-center rounded border border-dashed px-2 text-center text-xs"
            >
              {client.name}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
