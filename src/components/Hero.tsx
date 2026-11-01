import styles from "./Hero.module.css";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
}: HeroProps) => {
  return (
    <section className={styles.hero} aria-label="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.cta}>
            <a href={ctaLink} className={styles.ctaBtn}>{ctaText}</a>
          </div>
        </div>
      </div>
    </section>
  );
};