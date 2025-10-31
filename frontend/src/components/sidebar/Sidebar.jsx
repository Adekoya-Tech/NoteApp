import { Link } from "react-router-dom";
import * as Styles from './SidebarStyles'
import {FaTimes} from 'react-icons/fa'

const Sidebar = ({ setOpenSidebar }) => {
	return (
		<Styles.SidebarContainer>
			<Styles.CloseBtn>
				<FaTimes onClick={()=> setOpenSidebar(false)} />
			</Styles.CloseBtn>
			<Styles.SidebarWrapper>
				<Link>
					<button>Sign In</button>
				</Link>

				<Link>
					<button>Sign Up</button>
				</Link>
			</Styles.SidebarWrapper>
		</Styles.SidebarContainer>
	);
};

export default Sidebar