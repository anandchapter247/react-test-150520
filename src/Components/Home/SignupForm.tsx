import React from "react";
import {
  TextField,
  Grid,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import SubmitButton from "../Common/SubmitButton";
import { ISignUpFormProps } from "../../interfaces";

const SignupFormComponent: React.FC<ISignUpFormProps> = (
  props: ISignUpFormProps
): JSX.Element => {
  return (
    
    <form className="form-section">
      <Grid
        container
        spacing={2}
        direction='row'
        justify='center'
        alignItems='center'>
        <Grid
          item
          md={12}
          justify='center'
          alignItems='center'
          spacing={3}
          direction='row'>
          <Typography
            variant='h4'
            className='text-center text-uppercase logo-heading'>
            <span className="bold-theme-text">cart</span>
            <span>&order</span>
          </Typography>
          <div className='admin-text text-center'>Admin</div>
        </Grid>
        <Grid item xs={12} md={6} className="grid-padding">
          <TextField fullWidth label={"First name"} className="custom-form" />
        </Grid>
        <Grid item xs={12} md={6} className="grid-padding">
          <TextField fullWidth label={"Last name"}  className="custom-form"/>
        </Grid>
        <Grid item xs={12} md={12} className="grid-padding">
          <TextField fullWidth label={"Username"}  className="custom-form"/>
        </Grid>
        <Grid item xs={12} md={6} className="grid-padding">
          <TextField fullWidth label={"Email"}  className="custom-form"/>
        </Grid>
        <Grid item xs={12} md={6} className="grid-padding">
          <TextField fullWidth label={"Phone Number"}  className="custom-form"/>
        </Grid>
        <Grid item xs={12} md={12} className="grid-padding">
          <TextField fullWidth label={"Full Address"}  className="custom-form"/>
        </Grid>
        <Grid item xs={12} md={12} className="grid-padding">
          <TextField fullWidth label={"Store Name"}  className="custom-form"/>
        </Grid>
        <Grid item xs={12} md={12} className="grid-padding">
          <TextField fullWidth label={"Store Type"}  className="custom-form"/>
        </Grid>
        <Grid item xs={12} md={6} className="grid-padding">
          <TextField type='password' fullWidth label={"Password"}  className="custom-form"/>
        </Grid>
        <Grid item xs={12} md={6} className="grid-padding">
          <TextField type='password' fullWidth label={"Confirm Password"}  className="custom-form"/>
        </Grid>
      </Grid>
    
      <FormControlLabel
        control={<Checkbox />}
        label={<>I agree with terms and conditions</>}
        className="custom-checkbox"
      />
      <div className={"text-center"}>
        <SubmitButton text={"Register"}  />
      </div>
      <div className={"text-center"}>
        <a href="#" className={" cursor-pointer form-link"} >
        Already have an account? Sign in.
        </a>
      </div>
      <div className={"text-center"}>
        <Typography >
          <a href="#"  className={" cursor-pointer form-link term-link"}>Term of use.</a>&nbsp;&nbsp;
          <a href="#"  className={" cursor-pointer form-link term-link"}>Privacy policy</a>
        </Typography>
      </div>
    </form>
   
  );
};

export default SignupFormComponent;
