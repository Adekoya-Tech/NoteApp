import { Link } from 'react-router-dom';
import * as Styles from './HeaderStyles'
import Nav from '../nav/Nav';
import Sidebar from '../sidebar/Sidebar';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { images } from '../images';
import UserNav from '../nav/UserNav';

const user = JSON.parse(localStorage.getItem('user'))

const Header = () => {
	const [openSidebar, setOpenSidebar] = useState(false)
  return (
		<>
			<Styles.HeaderContainer>
				{user ? (
					<>
						<Styles.HeaderWrapper>
							<Styles.SearchBoxWrapper>
								<Link>
									<img src={images.logo} alt='' />
								</Link>

								<Styles.SearchBox>
									<img src={images.searchIcon} alt='' />
									<input type='text' placeholder='Seach notes' />
								</Styles.SearchBox>
							</Styles.SearchBoxWrapper>

							<Nav user={user} />

							<Styles.Menu>
								<FaBars onClick={() => setOpenSidebar(true)} />
							</Styles.Menu>
						</Styles.HeaderWrapper>
						<UserNav />
					</>
				) : (
					<Styles.HeaderWrapper>
						<Link>
							<img src={images.logo} alt='' />
						</Link>

						<Nav user={user} />

						<Styles.Menu>
							<FaBars onClick={() => setOpenSidebar(true)} />
						</Styles.Menu>
					</Styles.HeaderWrapper>
				)}
			</Styles.HeaderContainer>
			{openSidebar && <Sidebar setOpenSidebar={setOpenSidebar} />}
		</>
	);
}

export default Header
