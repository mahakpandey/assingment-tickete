import '../../styles/Header.css'
import Logo from '../../icons/LogoIcon'
import LockIcon from '../../icons/LockIcon'
import QuestionIcon from '../../icons/QuestionIcon'

const Header = () => {
  return (
    <div className="flex flex-column">
      <div className="header flex space-between align ">
        <div>
          <Logo />
        </div>
        <div className="flex gap-2">
          <LockIcon />
          <span className='checkout-text'>Checkout</span>
        </div>
        <div className="flex gap-2">
           <QuestionIcon/>
          <span className='help-text'>Help</span>
        </div>
      </div>
      <div className="sub-header">
        <p className="sub-header-text">Holding your tickets for 30:00</p>
      </div>
    </div>
  )
}

export default Header