import { IFooterProps } from "./FooterProps";
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import Link from 'next/link';

const Footer: React.FC<IFooterProps> = ({ ...props }) => {
  const rightsCN = cn(styles.base, styles.rights);
  const agreementCN = cn(styles.base, styles.agreement);
  const policyCN = cn(styles.base, styles.policy);

  return (
    <footer {...props}>
      <Link
        href={'#'}
        target='_blank'
        className={rightsCN}
      >
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </Link>
      <Link
        href={'#'}
        target='_blank'
        className={agreementCN}
      >
        Пользовательское соглашение
      </Link>
      <Link
        href={'#'}
        target='_blank'
        className={policyCN}
      >
        Политика конфиденциальности
      </Link>
    </footer>
  );
};

export default Footer;
