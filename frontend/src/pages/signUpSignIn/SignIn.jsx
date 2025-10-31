import Home from '../home/Home';
import { images } from '../../components/images';
import Overlay from '../../components/Overlay';
import * as Styles from './SignUpSignInStyles';
import { Modal } from '../../components/modal/Modal';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { userSignIn } from '../../redux/actions/userActions';
import { useState } from 'react';


const SignIn = () => {
	const navigate = useNavigate();
	const closeModal = () => {
		navigate('/');
	};
	const [email, setEmail] = useState('');
	const [password, setpasswordEmail] = useState('');
	const handleSignIn = (e) =>{
		e.preventDefault();
		dispatch(userSignIn({email, password}));
	}
const dispatch = useDispatch();
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
							Hello <br />
							welcome back
						</h4>
						{/* <small>Enter your personal details to continue your journey</small> */}
						<small>Enter your personal details to login</small>
					</Styles.SignUpSignInDetails>

					<Styles.SignUpSignInGoogleBox>
						<img src={images.googleIcon} alt='' />
						<span>Sign in with Google</span>
					</Styles.SignUpSignInGoogleBox>

					<Styles.SignUpSignInOrBox>
						<img src={images.line} alt='' />
						<span>or</span>
						<img src={images.line} alt='' />
					</Styles.SignUpSignInOrBox>

					<Styles.Form onSubmit={handleSignIn}>
						<input type='text' placeholder='E-mail'
						 name='email'
						  value={email}
						  onChange={(e) => setEmail(e.target.value)}/>
						<input type='text' placeholder='Password' 
						name='password'
						value={password} 
						onChange={(e) => setpasswordEmail(e.target.value)}
						/>
						<button>Sign In</button>
					</Styles.Form>

					<Styles.SignUpSignInSmall>
						Don't have an account? <Link to='/signup'> Sign up here</Link>
					</Styles.SignUpSignInSmall>
				</Modal>
			</Styles.SignUpSignInContainer>
		</>
	);
};

export default SignIn;
