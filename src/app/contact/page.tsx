import { ContactPanel } from "@/components/contact-panel";
import { PageHero } from "@/components/page-hero";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Email me, call me, or open the professional channels."
        intro="Email is usually the best place to start. If something is time-sensitive, calling works too."
      />
      <ContactPanel />
    </main>
  );
}
