import { useState } from 'react';
import '../style/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('test')

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>
                Laissez-nous votre mail :
                <input
                    type='email'
                    onBlur={(e)=>verifValeur(e.target.value)}
                />

            </div>
        </footer>
    )
}

function verifValeur(email){
    const arobas = email.indexOf('@');
    if (arobas === -1)
        alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
}

export default Footer