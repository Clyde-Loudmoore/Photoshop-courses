import Htag from "@/components/Htag";
import Button from "@/components/Button";
import Ptag from '@/components/Ptag/Ptag';

const Home: React.FC = () => {
  return (
    <main>
      <Htag tag="h1">I Love It!</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Открыть</Button>
      <Ptag size='l'>Большой</Ptag>
      <Ptag>Средний</Ptag>
      <Ptag size='s'>Маленький</Ptag>
    </main>
  );
};

export default Home;
