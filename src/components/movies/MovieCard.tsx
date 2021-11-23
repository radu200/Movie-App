import style from './styles/movie.card.module.scss';

interface IProps {
  title: string;
  imageUrl: string;
  vote_average: number;
  onGetMovie: React.MouseEventHandler<HTMLDivElement>;
}

const MovieCard = ({ title, imageUrl, vote_average, onGetMovie }: IProps) => {
  return (
    <div className={style.card} onClick={onGetMovie}>
      <div className={style.card_image_container}>
        <p className={style.card_rating}>{vote_average}</p>
        <img className={style.card_image} src={imageUrl} alt={title} />
      </div>
      <p className={style.card_title}>{title}</p>
    </div>);
};

export default MovieCard;