import React, {useState} from 'react';
import useFirebase from "../../Hooks/useFirebase";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/CartContext';

const Input = ({
  className,
  type,
  name,
  value,
  inputClassName,
  onChange,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={(e) => onBlur(e)}
        className={inputClassName}
        placeholder={placeholder}
      />
      {error.nombre && (
        <h6 className="text-danger my-2 text-uppercase">{error.nombre}</h6>
      )}
    </div>
  );
};

const Formulario = ({total, cart}) => {
 
  const {clear} = GlobalContext ();
  const {fetchGenerateTicket} = useFirebase();

  const [formulario, setFormulario] = useState ({
    buyer:{
      email:"",
      nombre: "",
      apellido: "",
      telefono:"",
    },
    total: total,
    cart: cart,
  });

  const validation = (campos) => {
    return campos.some((campo) => campo === "")
  }

  const [error,  setError] = useState ({});

  const {buyer: {email, nombre, apellido, telefono}} = formulario;

  const onSubmit = (e) => {
    e.preventDefault();
    if (validation([email, nombre, apellido, telefono])) {
      Swal.fire({
        title:"Oops!",
        text: "Faltan campos por completar",
        icon:"error"
      });
      return;
    }
    Swal.fire({
      title:"Genial!",
      text: "Su orden de compra se generó correctamente",
      icon:"success",
    });

    fetchGenerateTicket({datos: formulario});
    clear();
  };

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormulario ({
      ...formulario,
      buyer:{
        ...formulario.buyer,
        [name]:value,
      },
    });
  };

  const handleBlur = (e) => {
    const {value, name} = e.target;
    if (value === "") {
      setError ({...error, [name]: "Este campo es obligatorio"});
      return;
    }
    setError ({})
  };

  return (
    <form onSubmit={onSubmit}>
      <h3 className='text-center my-4'>Datos</h3>
      {Object.keys(formulario.buyer).map((key,index)=> (
        <Input
        key={index}
        className="mb-3"
        type="text"
        name={`${key}`}
        value={key.value}
        onChange={handleChange}
        onBlur={handleBlur}
        inputClassName={`form-control ${error[key] && "is-invalid"}`}
        placeholder={`${key}`}
        error={error}
        />
      ))}

      <Input
        className="mb-3"
        type="text"
        name="nombre"
        value={nombre}
        onChange={handleChange}
        onBlur={handleBlur}
        inputClassName={`form-control ${error.nombre && "is-invalid"}`}
        placeholder={"Ej: Sofía"}
        error={error}
      />

      <div className='mb-3'>
        <Input
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleChange}
          onBlur={(e)=>handleBlur(e)}
          className={`form-control ${error.nombre && "is-invalid"}`}
          placeholder={"Ej: Sofía"}
        />
        {error.nombre && (
          <h6 className='text-danger my-2 text-uppercase'>{error.nombre}</h6>
        )}
      </div>

      <div className='mb-3'>
        <Input
          type="text"
          name="apellido"
          value={apellido}
          onChange={handleChange}
          onBlur={(e)=>handleBlur(e)}
          className={`form-control ${error.apellido && "is-invalid"}`}
          placeholder={"Ej: Vocos Domene"}
        />
        {error.apellido && (
          <h6 className='text-danger my-2 text-uppercase'>{error.apellido}</h6>
        )}
      </div>

      <div className='mb-3'>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          onBlur={(e)=>handleBlur(e)}
          className={`form-control ${error.email && "is-invalid"}`}
          placeholder={"Ej: vocosdomenesofia@gmail.com"}
        />
        {error.email && (
          <h6 className='text-danger my-2 text-uppercase'>{error.email}</h6>
        )}
      </div>

      <div className='mb-3'>
        <Input
          type="text"
          name="telefono"
          value={telefono}
          onChange={handleChange}
          onBlur={(e)=>handleBlur(e)}
          className={`form-control ${error.email && "is-invalid"}`}
          placeholder={"Ej: 3513456789"}
        />
        {error.telefono && (
          <h6 className='text-danger my-2 text-uppercase'>{error.telefono}</h6>
        )}
      </div>

      <div className='border row d-flex px-2'>
        <div className='col-12 col-lg-9'>
          <p className='fs-4 text-uppercase'>total</p>
        </div>
        <div className="col-12 col-lg-3">
          <p className="fs-4">${total}</p>
        </div>
        <button type="submit" className="btn btn-primary text-uppercase w-100 my-4">
          finalizar compra
        </button>
      </div>

      <div className="mt-5 text-center">
        <Link to={`/ItemListContainer`}>Volver a la tienda</Link>
      </div>
    </form>
  )
}

export default Formulario