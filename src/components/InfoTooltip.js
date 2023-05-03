import success from '../images/success.svg';
import fail from '../images/fail.svg';

export default function InfoTooltip({ onClose }) {
  return (
    <div className={`popup popup_type_info-tool popup_opened`}>
      <div className="popup__container popup__container_type_info">
        <button className="popup__close-button" type="button" onClick={onClose} />
        <img className="popup__info-pic"  src={fail} />
        <h2 className="popup__title popup__title_info">Вы успешно зарегистрировались!</h2>
      </div>
    </div>
  )
}

