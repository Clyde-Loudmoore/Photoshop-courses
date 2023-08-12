import cn from 'classnames';
import { IPtagProps } from "./Ptag.props";
import styles from './Ptag.module.css';

const Ptag: React.FC<IPtagProps> = ({ size = 'm', children, className, ...props }) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Ptag;
