import './login.css'
import {Button, Card, TextField} from "@material-ui/core";

const Login = () => {
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>Login</h1>
             
                <TextField label="Email"
                           type="search"
                           variant="outlined"/>
                <TextField label="Mot de passe"
                           type="search"
                           variant="outlined"/>
                <Button variant="contained" color="primary">
                    Envoyer
                </Button>
                <Button variant="contained" color="primary">
                    Register
                </Button>

            </Card>
        </div>
    )
}
export default Login 