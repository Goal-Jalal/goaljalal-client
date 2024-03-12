import Link from "next/link";

import styles from "./main.module.css";

interface FooterIconProps {
  icon: React.ReactNode;
  text: string;
  link: string;
}

export const FooterIcon = (props: FooterIconProps) => {
  const { icon, text, link } = props;

  return (
    <Link href={link}>
      <div className={styles.icon}>
        {icon}
        <span>{text}</span>
      </div>
    </Link>
  );
};
