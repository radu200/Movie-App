import SearchField from '../../inputs/search';
import logo from "../../../images/logo.svg";
import style from './header.module.scss';

interface IProps {
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Header = ({
  onSearchChange,
}: IProps) => {
  return <div className={style.header}>
    <img src={logo} alt="Timescale" className={style.logo} />
    <div className={style.search_field_container}>
      <SearchField onChange={onSearchChange} placeholder={'Search for a movie'} />
    </div>
  </div>;
};

export default Header;