// import cn from 'classnames';
import Menu from '@/layout/Menu/Menu';
import { ISidebarProps } from "./SidebarProps";
// import styles from './Sidebar.module.css';

const Sidebar: React.FC<ISidebarProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};

export default Sidebar;
