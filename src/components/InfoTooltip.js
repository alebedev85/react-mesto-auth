import success from '../images/success.svg';
import fail from '../images/fail.svg';

export default function InfoTooltip({ name, isOpen, onClose,isSuccess }) {
  const massageImg = isSuccess ? success : fail;
  const massageText = isSuccess ? 'Вы успешно зарегистрировались!':'Что-то пошло не так! Попробуйте ещё раз.';
  return (
    <div className={`popup popup_type_${name} ${isOpen && ('popup_opened')}`}>
      <div className="popup__container popup__container_type_info">
        <button className="popup__close-button" type="button" onClick={onClose} />
        <img className="popup__info-pic"  src={massageImg} />
        <h2 className="popup__title popup__title_info">{massageText}</h2>
      </div>
    </div>
  )
}

