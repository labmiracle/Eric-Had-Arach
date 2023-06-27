import { useState} from 'react';

function Log() {
    const [isLogged, setIsLogged] = useState(true);

    function handleLogIn() {
        setIsLogged(true);
    }

    function handleLogOut() {
        setIsLogged(false);
    }
  
    if (isLogged) {
        return (
            <>
                <p>Esta página solo puedo verla por que estoy logueado</p>
                <button onClick={handleLogOut}>Cerrar sesión</button>
            </>
            
        );
    }else {
        return (
            <>
                <p>Inicia sesión para ver contenido privado</p>
                <button onClick={handleLogIn}>Ingresar</button>
            </>
        );
    }
}

export default function App() {
    return <Log />;
}
