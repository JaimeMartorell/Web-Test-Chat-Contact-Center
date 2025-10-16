import ZoomChatEmbed from '../components/ZoomChatEmbed';

const Home = () => {
  const handleChatClick = () => {
    const accionBtn = document.getElementById('ACCION');
    if (accionBtn) {
      accionBtn.click();
    }
  };

  return (
    <div>
      <h1>Home Page</h1>

      <button
        type="button"
        id="BOTON"
        name="BOTON"
        className="mr-2 btn-primary btn w-20"
        onClick={handleChatClick}
      >
        Iniciar Chat
      </button>

      <button
        type="submit"
        id="ACCION"
        name="ACCION"
        className="d-none btn-outline-primary mr-2 btn"
      >
        ACCION
        <div style={{ display: 'none' }}></div>
      </button>

      <ZoomChatEmbed />
    </div>
  );
};

export default Home;
