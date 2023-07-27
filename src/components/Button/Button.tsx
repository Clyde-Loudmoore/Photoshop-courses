import cn from 'classnames';

import { IButtonProps } from './Button.props';
import styles from './Button.module.css';

import ArrowIcon from './Arrow.svg';

const Button: React.FC<IButtonProps> = ({ appearance, children, arrow = 'none', className, ...props }) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' &&
        <span className={cn(styles.arrow, {
          [styles.down]: arrow === 'down'
        })}>
          <ArrowIcon />
        </span>
      }
    </button>
  );
};

export default Button;
