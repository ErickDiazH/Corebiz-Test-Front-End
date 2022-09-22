import React, { useState } from "react";
import Button from "@/components/buttons/Button.jsx";
import Input from "@/components/inputs/Input.jsx";
import { sendNewsletterService } from "@/services/newsletterServices";
import "./newsletter.css";

function Newsletter() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});

  /**
   * Si no hay errores en el formulario, hace la petición y muestra una alerta si se hizo correctamente
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(await validate(formValues));
    if (
      Object.keys(formErrors).length === 0 &&
      formValues.name &&
      formValues.email
    ) {
      const { data } = await sendNewsletterService(formValues);
      alert(data.message);
      setFormValues({
        name: "",
        email: "",
      });
    }
  };
  /**
   * Enlace del formulario con el objeto reactivo useState
   */
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    const newValues = {
      ...formValues,
      [name]: value,
    };
    setFormValues(newValues);
  };
  /**
   * Validaciones para el formulario
   */
  const validate = async (form) => {
    const errors = {};
    const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

    if (!form.name) {
      errors.name = "El campo nombre es requerido.";
    }
    if (!form.email) {
      errors.email = "El campo mail es requerido.";
    }
    if (!regexEmail.test(formValues.email)) {
      errors.email = "El campo email no tiene un formato valido.";
    }

    return errors;
  };

  return (
    <section className="newsletter-container">
      <h2 className="newsletter-title">
        ¡Únete a nuestras novedades y promociones!
      </h2>
      <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <Input
            type="text"
            placeholder="Ingresa tu nombre"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <span>{formErrors.name}</span>
        </div>
        <div className="form-group">
          <Input
            type="email"
            placeholder="Ingresa tu mail"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <span>{formErrors.email}</span>
        </div>
        <Button type="submit" text="Suscribirme"></Button>
      </form>
    </section>
  );
}

export default Newsletter;
