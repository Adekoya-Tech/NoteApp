import { Link } from 'react-router-dom';
import { images } from '../../components/images';
import * as Styles from './HomeStyles';

const Home = () => {
	return (
		<Styles.HomeContainer>
			<Styles.HomeWrapper>
				<Styles.HomeTextContainer>
					<h1>
						You can't really manage time,
						but you can take small steps that
						counts on a long run.
					</h1>
					<ul>
						<li>
							<img src={images.arrowIcon} alt='' />
							<span>Track your daily activites</span>
						</li>
						<li>
							<img src={images.arrowIcon} alt='' />
							<span>
								Save important notes or code snippets
								you've likely to reuse
							</span>
						</li>
						<li>
							<img src={images.arrowIcon} alt='' />
							<span>Keep a diary of your activities</span>
						</li>
					</ul>

					<button>
						<Link>Get started</Link>
					</button>
				</Styles.HomeTextContainer>
				<Styles.HomeGalleryContainer>
					<Styles.HomePixBox>
						<Styles.HomePixBGBox first />
						<Styles.HomePix>
							<img src={images.computer} alt='' />
						</Styles.HomePix>
						<p>Track your todos status</p>
					</Styles.HomePixBox>

					<Styles.HomePixBoxWrapper>
						<Styles.HomePixBox>
							<Styles.HomePixBGBox first />
							<Styles.HomePix>
								<img src={images.code} alt='' />
							</Styles.HomePix>
							<p>Jot down reuseable code snippet</p>
						</Styles.HomePixBox>

						<Styles.HomePixBox>
							<Styles.HomePixBGBox second />
							<Styles.HomePix>
								<img src={images.pix} alt='' />
							</Styles.HomePix>
							<p>Jot down your daily activities</p>
						</Styles.HomePixBox>
					</Styles.HomePixBoxWrapper>
				</Styles.HomeGalleryContainer>
			</Styles.HomeWrapper>
		</Styles.HomeContainer>
	);
};

export default Home;
