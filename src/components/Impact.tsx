import styles from "./Impact.module.css";

interface StatProps {
  number: string | number;
  label: string;
  description?: string;
}

export const Stat = ({
  number,
  label,
  description,
}: StatProps) => {
  return (
    <div className={styles.stat}>
      <p className={styles.number}>
        {typeof number === "string" ? number : number.toLocaleString()}
      </p>
      <h3 className={styles.label}>{label}</h3>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

interface ImpactProps {
  title: string;
  stats: StatProps[];
}

export const Impact = ({
  title,
  stats,
}: ImpactProps) => {
  return (
    <section className={styles.section} aria-label="impact">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{title}</h2>
        </div>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <Stat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};