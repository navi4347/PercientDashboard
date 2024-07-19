import bg from '../assets/bg.png';

function Background() {
  const styles = {
    backgroundColor: 'transparent',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={styles}>
    </div>
  );
}

export default Background;
