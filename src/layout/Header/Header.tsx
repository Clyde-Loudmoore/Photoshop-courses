// import cn from 'classnames';
import { IHeaderProps } from "./HeaderProps";
// import styles from './Header.module.css';

const Header: React.FC<IHeaderProps> = ({ ...props }) => {
  return (
    <header {...props}>
      Header
    </header>
  );
};

export default Header;
