import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css"

function Home() {
  // Definiendo los datos en un objeto para ser pasados como props al componente Main
  const datos = {
    nombre: "Emir",
    apellido: "Jorge",
    descripcion: "Estudiante de programación en la facultad regional Tucumán. Manejo Java, JavaScript y C#.",
    imagen: "https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.6435-9/74634669_2549999808424534_578001975547789312_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF18Uu6HBsW6xo-JR5hD0sJ_963UAYtNnv_3rdQBi02e-rtCTOQeHXvrUf1fjcSEFuxqHSumFsMnwmNO0xVEWcQ&_nc_ohc=BtUcPiehhhoQ7kNvwE3eXBW&_nc_oc=AdnY532pF1SqCWwSO9orZWE57XhCsWHN1JFBfh03IQmAbOMCdF0Pu8dEclwjM27U1hw&_nc_zt=23&_nc_ht=scontent.ftuc1-1.fna&_nc_gid=-6-UBfXO8T4I7p4tpGB16g&oh=00_AfGQHgzO-7hcEgRA7o_BG7HQ2aqNmMckoFuhwut_t8l-bA&oe=68360A01" // Cambia esta URL por tu imagen o mascota
  };

  return (
    <div>
      {/* Componente Header */}
      <Header />

      {/* Componente Main, pasamos los datos como props */}
      <Main datos={datos} />

      {/* Componente Footer */}
      <Footer />
    </div>
  );
}

export default Home;

