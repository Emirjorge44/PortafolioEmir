import "./Main.css"
function Main(props) {
    const { nombre, apellido, descripcion, imagen } = props.datos;
  
    return (
        <div className="Main">
         <div className="card">
        <img
          src={imagen}
          alt="Foto de perfil"
          className="profile-image"
        />
        <h2>{nombre} {apellido}</h2>
        <p>{descripcion}</p>
      </div>
        </div>
    );


  }
  
  export default Main;
  