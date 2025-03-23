import { FC, memo } from "react";
import Signup from "../components/signup";

type SignUpPageProps = {};

const SignUpPage: FC<SignUpPageProps> = (props) => {
  return <div>
    <Signup />
  </div>;
};

SignUpPage.defaultProps = {};

export default memo(SignUpPage);