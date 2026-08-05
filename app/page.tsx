import { Artwork } from "@/components/towa/artwork";
import { Features } from "@/components/towa/features";
import { Footer } from "@/components/towa/footer";
import { Hero } from "@/components/towa/hero";
import { Moments } from "@/components/towa/moments";
import { Navbar } from "@/components/towa/navbar";
import { RecentMembers } from "@/components/towa/recent-members";
import { RulesFaq } from "@/components/towa/rules-faq";
import { TeamAndBoosters } from "@/components/towa/team-boosters";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <RecentMembers />
      <Features />
      <Moments />
      <Artwork />
      <TeamAndBoosters />
      <RulesFaq />
      <Footer />
    </main>
  );
}
