// import cn from 'classnames';
import { ISidebarProps } from "./SidebarProps";
// import styles from './Sidebar.module.css';

const Sidebar: React.FC<ISidebarProps> = ({ ...props }) => {
  return (
    <div {...props}>
      Sidebar
    </div>
  );
};

export default Sidebar;
