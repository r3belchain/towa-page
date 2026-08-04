import { Artwork, Features, Footer, Hero, Moments, Navbar, RecentMembers, RulesFaq, TeamAndBoosters } from '@/components/towa/sections'

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
  )
}
