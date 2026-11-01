import styles from "./Layout.module.css";

export const Layout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};