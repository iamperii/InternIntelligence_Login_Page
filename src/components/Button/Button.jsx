import style from './button.module.css';
import facebook from '../../assets/svg/facebook.svg';
import google from '../../assets/svg/google.svg';
import apple from '../../assets/svg/apple.svg';
import { Link } from 'react-router-dom';
const Button = () => {
	return (
		<>
			<div className={style.btnContainer}>
				<h1 className={style.title}>Log in via</h1>
				<div className={style.socials}>
					<div className={style.social}>
						<img src={facebook} alt="facebook-logo" />
					</div>
					<div className={style.social}>
						<img src={google} alt="google-logo" />
					</div>
					<div className={style.social}>
						<img src={apple} alt="apple-logo" />
					</div>
				</div>
				<div className={style.signContainer}>
					<p>Doesn’t have an account?</p>
					<Link to="/signup">Create Account</Link>
				</div>
			</div>
		</>
	);
};

export default Button;
