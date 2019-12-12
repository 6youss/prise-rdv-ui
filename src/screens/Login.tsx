import React from "react";
import Input from "../styled/Input";
import FullScreenWrapper from "../styled/FullScreenWrapper";
import FormWrapper from "../styled/FormWrapper";
import Button from "../styled/Button";
import LoadingDots from "../styled/LoadingDots";
import H4 from "../styled/H4";
import RowWrapper from "../styled/RowWrapper";
import StyledLink from "../styled/StyledLink";

const Login: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  function handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
  function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }
  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
    <FullScreenWrapper>
      <FormWrapper>
        <Input placeholder="Nom d'utilisateur" value={username} type="text" onChange={handleUsername} />
        <Input placeholder="Mot de passe" value={password} type="password" onChange={handlePassword} />
        <RowWrapper justify={"space-between"}>
          <Button disabled={loading} type="submit" onClick={handleSubmit}>
            {!loading ? "Login" : <LoadingDots />}
          </Button>
          <StyledLink to="/signup"> Nouveau ? Inscrivez vous ! </StyledLink>
        </RowWrapper>
      </FormWrapper>
    </FullScreenWrapper>
  );
};

export default Login;
