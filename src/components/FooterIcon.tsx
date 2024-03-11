import styles from "./main.module.css";

interface FooterIconProps {
  icon: React.ReactNode;
  text: string;
}

export const FooterIcon = (props: FooterIconProps) => {
  const { icon, text } = props;

  return (
    <div className={styles.icon}>
      {icon}
      <span>{text}</span>
    </div>
  );
};
