import React from 'react';
import { Link } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import './styles.css'
export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça o cadastro, entre na plataforma e ajuda pessoas a encontrarem casos da sua ONG</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
            Voltar para o Logon</Link>
                </section>
                <form action="">
                    <input type="text" placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="WhatsApp" />

                    <div className="input-group">
                        <input type="text" placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}