import React, { FC, useState } from 'react';

import Htag from "@/components/Htag";
import Button from "@/components/Button";
import Ptag from '@/components/Ptag/Ptag';
import Tag from '@/components/Tag/Tag';
import Rating from '@/components/Rating/Rating';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from 'interfaces/menu.interfce';

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}

const Home: FC<HomeProps> = ({ menu }) => {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
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
      <ul>
        {menu.map((elem) => {
          return (
            <li key={elem._id.secondCategory}>
              {elem._id.secondCategory}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};
