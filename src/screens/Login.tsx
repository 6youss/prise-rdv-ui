import React from "react";
import { toast } from "react-toastify";
import { fetchLogin } from "../api/userAPI";
import { useHistory } from "react-router";
import { FullScreenWrapper, FormWrapper, StyledInput, RowWrapper, LoadingDots, Button, StyledLink } from "../styled";
import { useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const {login} = useAuth();

  function handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
    setLoading(true);

    fetchLogin(username, password).then(
      data => {
        toast(data.message, {
          type: "success",
          hideProgressBar: true
        });
        login();
        history.push("/");
      },
      reason => {
        toast(reason.message, {
          type: "error",
          hideProgressBar: true
        });
        setLoading(false);
      }
    );
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
        <StyledInput placeholder="Nom d'utilisateur" value={username} type="text" onChange={handleUsername} />
        <StyledInput placeholder="Mot de passe" value={password} type="password" onChange={handlePassword} />
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
