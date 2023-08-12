import Link from 'next/link';
import cn from 'classnames';
import { ITagProps } from "./Tag.props";
import styles from './Tag.module.css';

const Tag: React.FC<ITagProps> = ({ size = 's', color = 'ghost', href, children, className, ...props }) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.grey]: color === 'grey',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      {
        href
          ? <Link href={href}>{children}</Link>
          : <>{children}</>
      }
    </div>
  );
};

export default Tag;
