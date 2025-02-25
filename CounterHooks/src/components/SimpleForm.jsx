import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Dilthryx',
    email: 'emejia11193@gmail.com',
    matricula: 'A01412143',
    apellidos: 'Mejia',
    Edad: '21',
    Universidad: 'ITESM',
    Carrera: 'ITC'
    
  });

  const { username, email, matricula, apellidos, Edad, Universidad, Carrera } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({...formState, [name]: value
    });
  };

  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  useEffect(() => {
    // console.log('formState changed!');
  }, [formState]);

  useEffect(() => {
    // console.log('email changed!');
  }, [email]);

const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
};

return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input 
            type="text" 
            className="form-control" 
            placeholder="Username" 
            name="username"
            value={username}
            onChange={onInputChange}
        />
        <input 
            type="email" 
            className="form-control mt-2" 
            placeholder="example@gmail.com" 
            name="email"
            value={email}
            onChange={onInputChange}
        />
        <input 
            type="text" 
            className="form-control" 
            placeholder="Matricula" 
            name="matricula"
            value={matricula}
            onChange={onInputChange}
        />
        <input 
            type="text" 
            className="form-control" 
            placeholder="Apellidos" 
            name="apellidos"
            value={apellidos}
            onChange={onInputChange}
        />
        <input 
            type="text" 
            className="form-control" 
            placeholder="Edad" 
            name="Edad"
            value={Edad}
            onChange={onInputChange}
        />
        <input 
            type="text" 
            className="form-control" 
            placeholder="Universidad" 
            name="Universidad"
            value={Universidad}
            onChange={onInputChange}
        />
        <input 
            type="text" 
            className="form-control" 
            placeholder="Carrera" 
            name="Carrera"
            value={Carrera}
            onChange={onInputChange}
        />

        {username === 'Dilthryx' && <Message />}

        <button className="btn btn-primary mt-2" onClick={onSubmit}>Submit</button>
    </>
);
};