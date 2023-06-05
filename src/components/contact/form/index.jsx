import React from 'react';

import { send } from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";
import './style.scss';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        send(
            "service_uveqt1j",
            "template_y4d7c8q",
            data,
            "swjMz2Luqn5v8bdci"
        ).then(response => {
            console.log("SUCCESS", response.status, response.text);
            formSuccess();
        }).catch(err => {
            console.log("FAIL", err);
        });
    };

    const formSuccess = () => {
        toast("Obrigado pelo contato!");
        document.getElementById("queryForm").reset();
    };

    return (
        <div className='query-form'>
            <ToastContainer />
            <form id="queryForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-field">
                    <input
                        type="text"
                        name="from_name"
                        placeholder='Nome'
                        {...register("from_name", {
                            required: "Nome é obrigatório!"
                        })}
                    />
                    {errors.from_name?.message && <p className="error">{errors.from_name?.message}</p>}
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        name="reply_to"
                        placeholder='Email'
                        {...register("reply_to", {
                            required: "Email é obrigatório!",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address!"
                            }
                        })}
                    />
                    {errors.reply_to?.message && <p className="error">{errors.reply_to?.message}</p>}
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        name="phone_number"
                        placeholder='Celular'
                        {...register("phone_number", {
                            required: "Celular é obrigatório!",
                            minLength: {
                                value: 8,
                                message: "Phone is not valid!"
                            }
                        })}
                    />
                    {errors.phone_number?.message && <p className="error">{errors.phone_number?.message}</p>}
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        name="subject"
                        placeholder='Assunto'
                        {...register("subject", {
                            required: "Assunto é obrigatório!",
                            minLength: {
                                value: 5,
                                message: "Minimum 5 characters rquired!"
                            }
                        })}
                    />
                    {errors.subject?.message && <p className="error">{errors.subject?.message}</p>}
                </div>

                <div className="input-field full-width">
                    <textarea
                        name="message"
                        className='textarea'
                        placeholder='Sua mensagem'
                        {...register("message", {
                            required: "Mensagem é obrigatório!",
                            minLength: {
                                value: 10,
                                message: "Minimum 10 characters rquired!"
                            },
                            maxLength: {
                                value: 500,
                                message: "Maximum 500 characters allowed!"
                            }
                        })}
                    />
                    {errors.message?.message && <p className="error">{errors.message?.message}</p>}
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Form;
