import React from "react";
import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import validator from "validator";
import ButtonLink from "../../ButtonLink";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log({errors})

  const onSubmit = (data) => {
    console.log(data)
  
  };

  
    return (
    <form onSubmit={handleSubmit(onSubmit())}  action="/">
      <div className={styles.formulario}>
        <div className={styles.inputs}>
          <label>Email</label>
          <input
            // className={styles.erro}
            type="email"
            placeholder="Insira seu email"
            {...register("email", {
              required: true,
              validate: (value) => validator.isEmail(value),
            })}
          />
          {errors?.email?.type === "required" && <p>Email obrigatório</p>}

          {errors?.email?.type === "validate" && <p>Email invalido</p>}
        </div>
        <div className={styles.inputs}>
          <label>Senha</label>
          <input
            // className={errors?.password && styles.erro}
            type="password"
            placeholder="Insira sua senha"
            autoComplete="on"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors?.password?.type === "required" && <p>Senha é obrigatório</p>}
          {errors?.password?.type === "minLength" && (
            <p>Senha precisa ter pelo menos 6 caracteres</p>
          )}
        </div>

        <Link className={styles.link}>Esqueci minha senha.</Link>

        <div>
          <ButtonLink url={'/Home'}>
          <button
            type="submit"
            
            className={styles.button}
            onClick={() => handleSubmit(onSubmit)}
          >
            Entrar
          </button>
          </ButtonLink>
        </div>
      </div>
    </form>
  );
}
