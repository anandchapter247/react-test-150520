import React from "react";
import { Button } from "@material-ui/core";
import { ISubmitButtonProps } from "../../interfaces";

const SubmitButton: React.FC<ISubmitButtonProps> = ({
  text,
  onClick,
  isLoading,
}: ISubmitButtonProps): JSX.Element => (
  <Button
    size='large'
    variant='contained'
    onClick={onClick}
    disabled={isLoading}
    className="submit-btn"
    >
    {isLoading ? "Please wait..." : text}
  </Button>
);

export default SubmitButton;
