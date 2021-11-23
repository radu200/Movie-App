import style from './styles/modal.module.scss';

interface IProps {
  children: React.ReactNode;
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

const ModalView = ({ onClose, children }: IProps) => {
  return (
    <div className={style.modal} onClick={onClose}>
      <div className={style.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>);
};

export default ModalView;