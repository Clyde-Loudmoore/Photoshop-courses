import { FC, useContext } from 'react';
import cn from 'classnames';
import styles from './Menu.module.css';
import { AppContext } from 'context/app.context';
import { PageItem, firstLevelMenuItem } from 'interfaces/menu.interfce';

import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from 'interfaces/page.interface';
import Link from 'next/link';

const firstLevelMenu: firstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'prodicts', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];

const Menu: FC = () => {
  const { menu, firstCategory } = useContext(AppContext);

  const buildFirstLevelMenu = () => {
    return (
      <>
        {
          firstLevelMenu.map((m) => {
            return (
              <div key={m.id}>
                <Link href={`/${m.route}`}>
                  <div className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id === firstCategory
                  })}>
                    {m.icon}
                    <span>
                      {m.name}
                    </span>
                  </div>
                </Link>
                {m.id === firstCategory && buildSecondLevelMenu(m)}
              </div>
            );
          })
        }
      </>
    );
  };

  const buildSecondLevelMenu = (menuItem: firstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {
          menu.map((elem) => {
            return (
              <div key={elem._id.secondCategory}>
                <div className={styles.secondLevel}>
                  {elem._id.secondCategory}
                </div>
                <div className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: elem.isOpened
                })}>
                  {buildThirdLevelMenu(elem.pages, menuItem.route)}
                </div>
              </div>
            );
          })
        }
      </div>
    );
  };

  const buildThirdLevelMenu = (pages: PageItem[], route: string) => {
    return (
      pages.map((page) => {
        return (
          <Link
            key={page._id}
            href={`/${route}/${page.alias}`}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: false
            })}
          >
            {page.category}
          </Link>
        );
      })
    );
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevelMenu()}
    </div>
  );
};

export default Menu;
