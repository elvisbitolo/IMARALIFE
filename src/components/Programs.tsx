import styles from "./Programs.module.css";

interface PricingCardProps {
  tag: string;
  price: string;
  pricePer: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
}

export const PricingCard = ({
  tag,
  price,
  pricePer,
  features,
  ctaText,
  ctaLink,
  popular = false,
}: PricingCardProps) => {
  return (
    <div
      className={styles.card} 
      aria-label={`pricing-card-${tag.toLowerCase()}`}
    >
      {popular && <span className={styles.popularTag}>Popular</span>}
      <h3 className={styles.cardTitle}>{tag}</h3>
      <div className={styles.price}>
        <span className={styles.priceAmount}>{price}</span>
        <span className={styles.pricePer}>{pricePer}</span>
      </div>
      <ul className={styles.featuresList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            {feature}
          </li>
        ))}
      </ul>
      <a href={ctaLink} className={styles.ctaBtn}>
        {ctaText}
      </a>
    </div>
  );
};