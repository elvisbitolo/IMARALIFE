import styles from "./Footer.module.css";

interface FooterLinksProps {
  title: string;
  links: { label: string; href: string }[];
}

export const FooterLinks = ({
  title,
  links,
}: FooterLinksProps) => {
  return (
    <div>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface FooterContactProps {
  title: string;
  contacts: string[];
}

export const FooterContact = ({
  title,
  contacts,
}: FooterContactProps) => {
  return (
    <div>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.list}>
        {contacts.map((contact, index) => (
          <li key={index} className={styles.item}>
            {contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="site-footer">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.logo}>Imaralife</span>
            <p className={styles.description}>
              Companion CBO · Mariwa, Seme Sub-County, Kisumu County · Kenya
            </p>
          </div>
          <div className={styles.linksColumn}>
            <FooterLinks
              title="Quick Links"
              links={[
                { label: "About", href: "#about" },
                { label: "Programs", href: "#programs" },
                { label: "Impact", href: "#impact" },
                { label: "Contact", href: "#contact" },
              ]}
            />
          </div>
          <div className={styles.contactColumn}>
            <FooterContact
              title="Contact"
              contacts={[
                "Simon Osoo",
                "Silas Chiaw",
                "Samuel Otuoma",
              ]}
            />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2026 Imaralife Companion CBO. All rights reserved.</p>
      </div>
    </footer>
  );
}