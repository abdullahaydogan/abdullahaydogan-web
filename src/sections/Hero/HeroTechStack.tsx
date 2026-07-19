import { heroTechnologies } from "./hero.data";

function HeroTechStack() {
  return (
    <div>
      <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-ink-muted uppercase">
        Core stack
      </p>

      <p className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-[0.8rem]">
        {heroTechnologies.map((technology, index) => (
          <span key={technology} className="inline-flex items-center gap-2.5">
            <span className="text-ink">{technology}</span>
            {index < heroTechnologies.length - 1 ? (
              <span className="text-line-strong" aria-hidden="true">
                ·
              </span>
            ) : null}
          </span>
        ))}
      </p>
    </div>
  );
}

export default HeroTechStack;