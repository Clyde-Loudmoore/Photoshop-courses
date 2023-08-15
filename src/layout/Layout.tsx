// import cn from 'classnames';
import { ILayoutProps } from "./Layout.props";
// import styles from './Layout.module.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import { FC } from 'react';

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
  return function withLayoutComponent (props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};