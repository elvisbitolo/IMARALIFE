import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { PricingCard } from "@/components/Programs";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Imaralife Ball Games Welfare & Tournament Program",
  description: "Self-sustaining sports welfare system for grassroots ball games communities",
};

// Hero data
const heroData = {
  title: "Self-Sustaining Sports Welfare System",
  subtitle: "Transforming grassroots ball games through conditional tournament sponsorship and community-owned welfare coverage.",
  ctaText: "Explore Programs",
  ctaLink: "#programs",
};

// Impact stats
const impactStats = [
  { number: "800", label: "Silver Members (Annual)", description: "Generate Ksh 800,000 with 76% safety margin" },
  { number: "3,000+", label: "Active Players Target", description: "By December 2027 across Nyanza and Western regions" },
  { number: "192,500", label: "Anticipated Claims", description: "5% injury rate + 0.5% mortality rate" },
  { number: "607,500", label: "Gross Reserve Surplus", description: "Ksh 607,500 (76% safety margin)" },
];

// Programs data
const programs = [
  {
    tag: "Bronze",
    price: "Ksh 2,000",
    pricePer: "/yr",
    features: [
      "Injury cover: Ksh 1,500 (Tent only)",
      "100/month player cover",
      "Tournament entry / 1-month trial",
    ],
    ctaText: "Subscribe",
    ctaLink: "#",
  },
  {
    tag: "Silver <span>(Main)</span>",
    price: "Ksh 800",
    pricePer: "/yr",
    features: [
      "Injury cover: Ksh 3,500 (Tent + Chairs + Ksh 2,500 cash)",
      "Funeral cover: Ksh 3,500 (Full package)",
      "Hockey, Rugby 7s, School Teams",
    ],
    ctaText: "Subscribe",
    ctaLink: "#",
    popular: true,
  },
  {
    tag: "Gold",
    price: "Ksh 5,000",
    pricePer: "/yr",
    features: [
      "Injury cover: Ksh 5,000",
      "Funeral cover: Ksh 5,000 (Full package)",
      "Hockey, Rugby 7s, School Teams",
    ],
    ctaText: "Subscribe",
    ctaLink: "#",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        ctaText={heroData.ctaText}
        ctaLink={heroData.ctaLink}
      />

      <section className="section" id="programs">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Programs & Pricing</h2>
            <p className="section-description">
              Tiered annual pricing takes effect January 2027. Introductory promotional rate of Ksh 600 applies through December 31, 2026.
            </p>
          </div>
          <div className="grid">
            {programs.map((program, index) => (
              <PricingCard
                key={index}
                {...program}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="impact">
        <Impact title="Impact & Projections" stats={impactStats} />
      </section>

      <Footer />
    </main>
  );
}