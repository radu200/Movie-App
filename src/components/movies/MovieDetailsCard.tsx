import style from './styles/movie.details.module.scss';
import CloseIcon from '../../images/close-icon.svg';

interface IProps {
  overview: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  imageUrl: string;
  onClose: React.MouseEventHandler<HTMLDivElement>;
}
const MovieDetails = ({
  overview,
  release_date,
  title,
  vote_average,
  vote_count,
  imageUrl,
  onClose
}: IProps) => {
  return (
    <div className={style.card}>
      <div className={style.card_header}>
        <h3>{title}</h3>
        <img src={CloseIcon} alt={title} onClick={onClose} />
      </div>
      <div className={style.card_content}>
        <img className={style.card_image} src={imageUrl} alt={title} />
        <div className={style.movie_details}>
          <p><span className="bold_text">Realease date</span>: {release_date}</p>
          <p className={style.description}>{overview}</p>
          <p><span className="bold_text">{vote_average}</span> {`/ 10 ( ${vote_count} total votes )`}</p>
        </div>
      </div>
    </div>);
};

export default MovieDetails;