import style from './loginInput.module.css';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';

const LoginInput = () => {
	return (
		<>
			<div className={style.loginInput}>
				<h1 className={style.title}>Log In</h1>
				<InputField/>
				<Button/>
			</div>
		</>
	);
};

export default LoginInput;
