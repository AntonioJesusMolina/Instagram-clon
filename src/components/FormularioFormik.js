import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { FormGroup, makeStyles } from "@material-ui/core";
import { Button, Row, Col } from "reactstrap";
import * as Yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { fir } from "../config/firebase";
import { getValue } from "@testing-library/user-event/dist/utils";
import { Link } from "react-router-dom";

export const FormularioFormik = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [currentValues, setCurrentValues] = useState();

  const formSchema = Yup.object().shape({
    Email: Yup.string()
      .required("Campo requerido")
      .max(255, `Maximo 255 caracteres`)
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "Correo escrito erroneamente"
      ),
    Password: Yup.string()
      .required("Campo requerido")
      .min(6, `Mínimo 8 caracteres`),
  });

  const login = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        alert("Usuario correcto");

        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("El usuario o la contraseña son invalidos");
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          Email: "",
          Password: "",
        }}
        validationSchema={formSchema}
      >
        <Form>
          <FormGroup>
            <Field
              className={classes.login___inputElement}
              //onChange={() => setEmail(getValue)}
              name="Email"
              placeholder="Email"
              type="email"
            />
            <ErrorMessage
              name="Email"
              component="div"
              className="field-error text-danger"
            />
          </FormGroup>
          <FormGroup>
            <Field
              className={classes.login___inputElement}
              //onChange={(event) => setPassword(getValue)}
              name="Password"
              placeholder="Contraseña"
              type="password"
            />
            <ErrorMessage
              name="Password"
              component="div"
              className="field-error text-danger"
            />
          </FormGroup>
          <Row>
            <Col lg={12} md={12}>
              <Button
                className={classes.login___inputBoton}
                type="submit"
                onClick={login}
              >
                Acceder
              </Button>
            </Col>
          </Row>
        </Form>
      </Formik>
      
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  login___container: {
    border: "1px solid #d3d3d3",
    padding: "50px",
    display: "center",
    marginTop: "10%",
    marginLeft: "0%",
    marginRight: "10%",
    marginBottom: "0%",
  },
  login___inputElement: {
    width: "100%",
    fontSize: "0.65rem",
    background: "#EAEAEA",
    marginTop: "10px",
    padding: "0.8rem",
    marginBottom: "0.5rem",
    border: "1px solid black",
    borderRadius: "0.4rem",
  },
  login___inputBoton: {
    width: "99%",
    objectFit: "contain",
    marginTop: "10px",
    marginBottom: "10px",
    height: "1.5rem",
    backgroundColor: "#3897f0",
    fontSize: "0.8rem",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "0.4rem",
    cursor: "pointer",
  },
  login__distribucion: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    paddingTop: "2rem",
    justifyContent: "center",
  },
  container: {
    padding: "5rem 0",
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "1.3rem",
    flexWrap: "wrap",
    marginTop: "0",
  },
}));
