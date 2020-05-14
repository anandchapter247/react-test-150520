import React from "react";
import { Grid } from "@material-ui/core";
import { IHomeContainerProps } from "../../interfaces";

const LeftSection = React.lazy(() =>
  import("./../../Components/Home/LeftSection")
);
const SignupForm = React.lazy(() =>
  import("./../../Components/Home/SignupForm")
);

const HomeContainer: React.FC<IHomeContainerProps> = (
  props: IHomeContainerProps
): JSX.Element => {
  return (
    <Grid
      container
      spacing={3}
      direction='row'
      justify='center'
      alignItems='center'>
      <Grid item xs={12} md={6}>
        <React.Suspense fallback={"Loading.."}>
          <LeftSection />
        </React.Suspense>
      </Grid>
      <Grid item xs={12} md={2} />
      <Grid item xs={12} md={4}>
        <React.Suspense fallback={"Loading.."}>
          <SignupForm />
        </React.Suspense>
      </Grid>
    </Grid>
  );
};

export default HomeContainer;
