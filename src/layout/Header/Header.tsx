// import cn from 'classnames';
import { IHeaderProps } from "./HeaderProps";
// import styles from './Header.module.css';

const Header: React.FC<IHeaderProps> = ({ ...props }) => {
  return (
    <div {...props}>
      Header
    </div>
  );
};

export default Header;
