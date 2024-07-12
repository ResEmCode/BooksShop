import Card from "@/src/enteties/Card";
import s from './index.module.scss';

type Props = {
  limit: number;
}

const Cards = ({ limit }: Props) => {
  return (
    <div className={s.cards}>
      {Array.from({ length: limit }, (_, index) => (
        <Card key={index} />
      ))}      
    </div>
  );
}

export default Cards;
