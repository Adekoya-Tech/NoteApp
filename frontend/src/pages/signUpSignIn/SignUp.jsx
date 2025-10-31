import Home from "../home/Home";
import { images } from "../../components/images";
import Overlay from "../../components/Overlay";
import * as Styles from "./SignUpSignInStyles";
import { Modal } from "../../components/modal/Modal";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { userSignUp } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/");
  };
//   const [userData, setUserData] = useState({
// 	firstName:'',
// 	lastName:'',
// 	email:'',
// 	password:'',
//   })

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
dispatch(userSignUp({ firstName, lastName, email, password }));
  };
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
            <img src={images.logo} alt="" />
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
            <img src={images.googleIcon} alt="" />
            <span>Sign up with Google</span>
          </Styles.SignUpSignInGoogleBox>

          <Styles.SignUpSignInOrBox>
            <img src={images.line} alt="" />
            <span>or</span>
            <img src={images.line} alt="" />
          </Styles.SignUpSignInOrBox>

          <Styles.Form onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Firstname"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Lastname"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button>Sign Up</button>
          </Styles.Form>

          <Styles.SignUpSignInSmall>
            Already have an account? <Link to="/signin"> Sign in here</Link>
          </Styles.SignUpSignInSmall>
        </Modal>
      </Styles.SignUpSignInContainer>
    </>
  );
};

export default SignUp;
