import React from 'react';

import logo from '../../assets/logo.png';
import { Container } from './styles';

export default function Header() {
    function handleLogout() {
        window.console.log('olá');
    }

    return (
        <Container>
            <img src={logo} alt="delivery-center" />

            <aside>
                <strong>Olá, Luiz</strong>
                <button type="button" onClick={handleLogout}>
                    Logout
                </button>
            </aside>
        </Container>
    );
}
