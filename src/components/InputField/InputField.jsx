import style from './inputField.module.css';
import { Link } from 'react-router-dom';

const InputField = () => {
	return (
		<>
			<div className={style.inputField}>
				<form action="" className={style.loginInput}>
					<input
						type="email"
						className={style.input}
						placeholder="Email"
						required
					/>
					<input
						type="password"
						className={style.input}
						placeholder="Password"
						required
					/>
					<div className={style.remember}>
						<div className={style.checkboxContainer}>
							<input type="checkbox" id="rememberMe" />
							<label htmlFor="rememberMe">Remember me</label>
						</div>

						<div className={style.forgot}>
							<Link to={'/forgot-password'}>Forgot Password</Link>
						</div>
					</div>

					<button type="submit" className={style.loginBtn}>
						Log In
					</button>
				</form>
				<div className={style.line}> </div>
			</div>
		</>
	);
};

export default InputField;
