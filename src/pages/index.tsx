import React, { FC, useState } from 'react';

import Htag from "@/components/Htag";
import Button from "@/components/Button";
import Ptag from '@/components/Ptag/Ptag';
import Tag from '@/components/Tag/Tag';
import Rating from '@/components/Rating/Rating';

const Home: FC = () => {
  const [rating, setRating] = useState<number>(4);

  return (
    <main>
      <Htag tag="h1">I Love It!</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Открыть</Button>
      <Ptag size='l'>Большой</Ptag>
      <Ptag>Средний</Ptag>
      <Ptag size='s'>Маленький</Ptag>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </main>
  );
};

export default Home;
