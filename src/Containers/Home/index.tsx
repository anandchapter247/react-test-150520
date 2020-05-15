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
          direction='row'
          justify='center'
          alignItems='center'
          className='login-section '
          
      >
        <Grid
          container
          spacing={3}
          direction="row-reverse"
          justify='center'
          alignItems='stretch'
          className="login-wrap"
      >
          
          <Grid item xs={12} md={6} className="login-form">
            <React.Suspense fallback={"Loading.."}>
              <SignupForm />
            </React.Suspense>
          </Grid>
          <Grid item xs={12} md={6} className="login-banner">
            <React.Suspense fallback={"Loading.."}>
              <LeftSection />
            </React.Suspense>
          </Grid>
          
        </Grid>
      </Grid>
     
        
      
      
    
    
  );
};

export default HomeContainer;
