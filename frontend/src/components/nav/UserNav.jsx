import { NavLink, Link } from 'react-router-dom';
import * as Styles from './UserNavStyles';
import { userNavs } from './userNavData';

const UserNav = () => {
	return (
		<Styles.UserNavContainer>
			<Styles.UserNavWrapper>
				{userNavs.map((userNav) => (
					<Styles.UserNavLink key={userNav.name}>
						<NavLink to={userNav.path}>
							<img src={userNav.icon} />
							<p>{userNav.name}</p>
							{userNav.numOfItems > 0 && <div>{userNav.numOfItems}</div>}
						</NavLink>
					</Styles.UserNavLink>
				))}
			</Styles.UserNavWrapper>
			<Styles.NavWrapper>
				<Styles.NavButton primary='true'>
					<Link to='/notes/create'>+</Link>
				</Styles.NavButton>
				<Styles.NavButton secondary='true'>
					<Link to='/notes/create'>Create</Link>
				</Styles.NavButton>
			</Styles.NavWrapper>
		</Styles.UserNavContainer>
	);
};

export default UserNav;
