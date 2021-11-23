import TextField from '../TextField';
import SerachIcon from '../../icons/search';
import style from './search.module.scss';

interface IProps {
  placeholder: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchField = ({
  value,
  onChange,
  placeholder,
}: IProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.icon}>
        <SerachIcon />
      </div>
      <TextField
        onChange={onChange}
        value={value}
        className={style.search}
        placeholder={placeholder} />
    </div>
  );
};

export default SearchField;;;