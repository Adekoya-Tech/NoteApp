import Home from '../home/Home';
import { images } from '../../components/images';
import Overlay from '../../components/Overlay';
import * as Styles from './SignUpStyles';
import { Modal } from '../../components/modal/Modal';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	// const [closeModal, setCloseModal] = useState(false);
	const navigate = useNavigate();

	const closeModal = () => {
		navigate('/');
	};

	return (
		<>
			<Overlay onClick={closeModal} />
			<Home />
			<Styles.SignUpSignInContainer>
				<Modal>
					<Styles.CloseBtn onClick={closeModal}>
						<FaTimes />
					</Styles.CloseBtn>
					<Styles.SignUpSignInLogo>
						<img src={images.logo} alt='' />
					</Styles.SignUpSignInLogo>
					<Styles.SignUpSignInDetails>
						<h4>
							Create <br />
							your account
						</h4>
						<small>
							Enter your personal details to start your journey today
						</small>
					</Styles.SignUpSignInDetails>

					<Styles.SignUpSignInGoogleBox>
						<img src={images.googleIcon} alt='' />
						<span>Sign up with Google</span>
					</Styles.SignUpSignInGoogleBox>

					<Styles.SignUpSignInOrBox>
						<img src={images.line} alt='' />
						<span>or</span>
						<img src={images.line} alt='' />
					</Styles.SignUpSignInOrBox>

					<Styles.Form>
						<input type='text' placeholder='Name' />
						<input type='text' placeholder='E-mail' />
						<input type='text' placeholder='Password' />
						<button>Sign Up</button>
					</Styles.Form>

					<Styles.SignUpSignInSmall>
						Already have an account? <Link> Sign in here</Link>
					</Styles.SignUpSignInSmall>
				</Modal>
			</Styles.SignUpSignInContainer>
		</>
	);
};

export default SignUp;
