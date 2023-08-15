import cn from 'classnames';
import { IFooterProps } from "./FooterProps";
import styles from './Footer.module.css';

const Footer: React.FC<IFooterProps> = ({ ...props }) => {
  return (
    <div {...props}>
      Footer
    </div>
  );
};

export default Footer;
