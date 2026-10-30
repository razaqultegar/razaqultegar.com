import Image from "next/image";
import Section from "@/components/sections/Section";
import { clients } from "@/data/clients";

const logoHeight = { md: "h-14", lg: "h-18" };

export default function Dots() {
  return (
    <Section id="dots" title="DOTS.">
      <p>
        Sebelum jadi DOTS., tim ini namanya Limbo, kumpulan freelancer yang
        kerja bareng sejak 2021 sampai 2023. Setelah ngelewatin beberapa
        tantangan internal, kami rebranding jadi DOTS. di 2023 dan bertahan
        sampai hari ini. Belum berbadan hukum resmi, jadi lebih pas disebut tim
        lepas yang solid ketimbang agensi formal.
      </p>
      <p>
        Di tim ini saya mulai sebagai Senior Full Stack Developer, lalu
        pelan-pelan pindah ke kursi Project Manager. Porsi ngoding makin
        sedikit, diganti ngatur arah proyek dan jaga koordinasi tim biar
        semuanya tetap jalan.
      </p>
      <div>
        <p className="text-ink/70 mb-3 text-sm">
          Beberapa klien yang pernah kami tangani:
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
          <li
            title="dan masih banyak lagi"
            className="flex h-20 items-center justify-center px-2"
          >
            <span className="text-ink hover:text-rust text-[44px] leading-none font-bold tracking-tighter italic opacity-70 transition hover:opacity-100">
              dll.
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
