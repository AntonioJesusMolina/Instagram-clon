import React, { useState } from "react";
import { FormGroup, makeStyles } from "@material-ui/core";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export const Register = () => {
  const classes = useStyles();

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

  const registrarUsuario = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Usuario registrado");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          Email: "",
          Password: "",
        }}
        onSubmit={(valores, { resetForm }) => {
          /*setEmail(valores.Email);
          setPassword(valores.Password);*/
          console.log(valores);
          console.log("--------------------------");
          registrarUsuario(valores.Email, valores.Password);
          resetForm({ valores: "" });
        }}
        validationSchema={formSchema}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit} className={classes.login___container}>
            <FormGroup>
              <Field
                className={classes.login___inputElement}
                name="Email"
                placeholder="Email"
                type="email"
                value={values.Email}
                onChange={handleChange}
                onBlur={handleBlur}
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
                name="Password"
                placeholder="Contraseña"
                type="password"
                value={values.Password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="Password"
                component="div"
                className="field-error text-danger"
              />
            </FormGroup>
            <Row>
              <Col lg={12} md={12}>
                <button className={classes.login___inputBoton} type="submit">
                  Acceder
                </button>
              </Col>
            </Row>
            <Link to="/">
              <button className={classes.login___inputBoton}>
                ¿Tienes cuenta?
              </button>
            </Link>
          </Form>
        )}
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
    marginLeft: "30%",
    marginRight: "30%",
  },
  login___input: {
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    objectFit: "contain",
    alignItems: "center",
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
    /*display: "flex",
    flexDirection: "row",
    objectFit: "contain",
    alignItems: "center",*/
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    paddingTop: "2rem",
    justifyContent: "center",
  },
  login__fotologin: {
    marginLeft: "20%",
    marginTop: "10%",
  },
  login__separador: {
    fontSize: "1rem",
    color: "#999999",
    position: "relative",
    marginBottom: "2.5rem",
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
  login__ul: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    marginRight: "1.6rem",
    color: "#003569",
  },
  login__li: {
    marginRight: "1.6rem",
    color: "#003569",
  },
}));
