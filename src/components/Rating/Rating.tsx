import { FC, useEffect, useState, KeyboardEvent } from 'react';
import cn from 'classnames';
import { IRatingProps } from "./Rating.props";
import styles from './Rating.module.css';
import StarIcon from './star.svg';

const Rating: FC<IRatingProps> = ({ isEditable = false, rating, setRating, ...props }) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleEnter(i + 1, e)}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleEnter = (i: number, e: KeyboardEvent) => {
    if (e.code !== 'Enter' || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => {
        return (
          <span key={i}>
            {r}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
