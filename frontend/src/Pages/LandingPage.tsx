import { FC, memo } from "react";

type LandingPageProps = {};

const LandingPage: FC<LandingPageProps> = (props) => {
  return <div>
    <h1>lanfing pasge</h1>
  </div>
};

LandingPage.defaultProps = {};

export default memo(LandingPage);