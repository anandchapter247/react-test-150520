import React from "react";
import { TextField, Grid, Checkbox, FormControlLabel } from "@material-ui/core";
import SubmitButton from "../Common/SubmitButton";
import { ISignUpFormProps } from "../../interfaces";

const SignupFormComponent: React.FC<ISignUpFormProps> = (
  props: ISignUpFormProps
): JSX.Element => {
  return (
    <form>
      <Grid
        container
        spacing={3}
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
          <h1 className='text-center text-uppercase logo-heading'>
            <span>cart</span>
            <span>&order</span>
          </h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label={"First name"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label={"Last name"} />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField fullWidth label={"Username"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label={"Email"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label={"Phone number"} />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField fullWidth label={"Full address"} />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField fullWidth label={"Store name"} />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField fullWidth label={"Store type"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField type='password' fullWidth label={"Password"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField type='password' fullWidth label={"Confirm password"} />
        </Grid>
      </Grid>
      <br />
      <br />
      <FormControlLabel
        control={<Checkbox />}
        label={<>I agree with terms and conditions</>}
      />
      <div className={"text-center"}>
        <SubmitButton text={"Register"} />
      </div>
    </form>
  );
};

export default SignupFormComponent;
