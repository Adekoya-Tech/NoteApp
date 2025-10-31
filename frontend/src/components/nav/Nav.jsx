import { Link } from 'react-router-dom';
import * as Styles from './NavStyles';
import { BiCaretDown } from 'react-icons/bi';

const Nav = ({ user }) => {
	const handleLogOut = () =>{
		localStorage.removeItem('user')
		window.location.href = '/signin'
	}
	return (
		<>
			<Styles.NavContainer>
				{user ? (
					<Styles.UserDetailsBox>
						<h4>
							{user.firstName} {user.lastName} <BiCaretDown />
						</h4>

						<Styles.UserDetails>
							<Link>Profile</Link>
							<Link onClick={handleLogOut}>Logout</Link>
						</Styles.UserDetails>
					</Styles.UserDetailsBox>
				) : (
					<Styles.NavWrapper>
						<Styles.NavButton primary>
							<Link to='/signin'>Sign In</Link>
						</Styles.NavButton>
						<Styles.NavButton secondary>
							<Link to='/signup'>Sign Up</Link>
						</Styles.NavButton>
					</Styles.NavWrapper>
				)}
			</Styles.NavContainer>
		</>
	);
};

export default Nav;
