import { JsonLd } from "@/components/json-ld";
import { getFaqs } from "@/lib/faq";
import { getFaqJsonLd } from "@/lib/seo";

export function Faq() {
  const faqs = getFaqs();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-paper py-16 lg:py-24"
    >
      <JsonLd data={getFaqJsonLd()} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-wider text-tomato-700">
          FAQ
        </p>
        <h2
          id="faq-heading"
          className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
        >
          Questions about Dibs
        </h2>
        <p className="mt-3 text-base text-ink-600">
          Everything people ask before they share a chore list with their
          partner, roommates or family.
        </p>
        <div className="mt-10 divide-y divide-ink-200 border-y border-ink-200">
          {faqs.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="group py-5"
            >
              <summary className="cursor-pointer font-display text-lg font-bold text-ink marker:text-tomato-600">
                {item.question}
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
