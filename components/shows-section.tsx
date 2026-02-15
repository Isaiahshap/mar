import { SectionHeading } from "@/components/section-heading";
import { SeatedWidget } from "@/components/seated-widget";

export function ShowsSection() {
  return (
    <section id="shows" className="bg-light-lavender px-6 py-36 sm:py-44">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Shows"
          caption="Upcoming performances and ticket links."
          accentColor="purple"
        />
        
        <div className="border-[3px] border-deep-aubergine bg-subtle-surface p-8 shadow-brutal-aubergine sm:p-10">
          <SeatedWidget />
        </div>
      </div>
    </section>
  );
}
