import React from "react";
import styles from "./RegisterForm.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import validator from "validator";
import ButtonLink from "../../ButtonLink";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchPassowrd = watch("password")

  const onSubmit = (data) => {
    console.log(data)
    if(data === null){
        alert("Preencha todos os campos")
    }
  };
  return (
    <main>
      <form action="/" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formulario}>
          <div className={styles.inputs}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Escolha seu melhor email"
              {...register("email", {
                required: true,
                validate: (value) => validator.isEmail(value),
              })}
            />
            {errors?.email?.type === "required" && <p>Email obrigatório</p>}

            {errors?.email?.type === "validate" && <p>Email invalido</p>}
          </div>

          <div className={styles.inputs}>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome completo"
              {...register("name", { require: true })}
            />
            {errors?.name?.type === "require" && <p>Nome obrigatório</p>}
          </div>

          <div className={styles.inputs}>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Insira sua senha"
              autoComplete="on"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors?.password?.type === "required" && (
              <p>Senha é obrigatório</p>
            )}

            {errors?.password?.type === "minLength" && (
              <p>Senha precisa ter pelo menos 6 caracteres</p>
            )}
          </div>

          <div className={styles.inputs}>
            <label>Confirme sua senha</label>
            <input
              type="password"
              placeholder="Insira sua senha novamente"
              autoComplete="on"
              {...register("passwordConfirmation", { required: true, 
             validate: (value) => value === watchPassowrd})}
            />
            {errors?.passwordConfirmation?.type === "required" && (
              <p>Senha é obrigatório</p>
            )}

            {errors?.passwordConfirmation?.type === "validate" && (
              <p>As senhas não correspondem.</p>
        )}
          </div>

          <Link className={styles.link}>Esqueci minha senha.</Link>

          <div>
            <ButtonLink url={'/Home'}>  
            <button
              className={styles.button}
            //   onClick={() => handleSubmit(onSubmit)()}
            >
              Entrar
            </button>
            </ButtonLink>
          </div>
        </div>
      </form>
    </main>
  );
}
