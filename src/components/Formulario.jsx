import { useForm } from "react-hook-form"
import { edadValidator } from "../scripts/Validators";


const Formulario = () => {

    const {register, formState: {errors}, watch, handleSubmit} = useForm({
        defaultValues: {
            nombre: 'Andres',
            apellido: 'Suarez',
            edad: 19,
            email: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data.nombre)
        console.log(data.apellido)
        console.log(data.edad)
        console.log(data.email)
        console.log(data.telefono)
        console.log(data.pais)
        console.log(data)
    }

    const incluirTelefono = watch('incluirTelefono')

  return (
    <div className="contenedor-formulario">
        <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
            <div className="formulario-campo">
                <label>Nombre</label>
                <input className="campo" type="text" name="nombre" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })} />
                {errors.nombre?.type === 'required' && <p>El campo es obligatorio</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo debe tener máximo 10 caracteres</p>}
            </div>

            <div className="formulario-campo">
                <label>Apellido</label>
                <input className="campo" type="text" name="apellido" {...register('apellido', {
                    required: true
                })} />
            </div>

            <div className="formulario-campo">
                <label>Edad</label>
                <input className="campo" type="number" name="edad" {...register('edad' ,{
                    required: true,
                    validate: edadValidator
                })} />
                {errors.edad?.type === 'validate' && <p>El rango de edad es de 18 y 70 años</p>}
            </div>

            <div className="formulario-campo">
                <label>Email</label>
                <input className="campo" type="email" name="email" {...register('email', {
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
                })} />
                {errors.email?.type === 'required' && <p>El campo es obligatorio</p>}
                {errors.email?.type === 'pattern' && <p>El email no es válido</p>}
            </div>

            <div className="formulario-checkBox">
                <label>Agregar Telefono</label>
                <input className="campo" type="checkbox" name="" id="" {...register('incluirTelefono')} />
            </div>

            {incluirTelefono && (
                <div className="formulario-campo">
                    <label>Teléfono</label>
                    <input className="campo" type="tel" name="telefono" {...register('telefono')} />
                </div>
            )}

            <div className="formulario-campo">
                <label>Pais</label>
                <select className="campo-select" name="" id="" {...register('pais', {
                    required: true
                })}>
                    <option value="COL">Colombia</option>
                    <option value="ES">España</option>
                    <option value="EEUU">Estados Unidos</option>
                </select>
            </div>
            <input className="button" type="submit" value="Enviar" />
        </form>

        <div>
            <p className="informacion">Nombre: {watch('nombre')}</p>
            <p className="informacion">Apellido: {watch('apellido')}</p>
            <p className="informacion">Edad: {watch('edad')}</p>
            <p className="informacion">Email: {watch('email')}</p>
            {incluirTelefono && <p className="informacion">Teléfono: {watch('telefono')}</p>}
            <p className="informacion">País: {watch('pais')}</p>
        </div>
    </div>
  )
}

export default Formulario