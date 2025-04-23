
const Header = () => {

  const theme = 'light';

  return (
    <div style={{ padding: '1rem', background: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#333' : '#f0f0f0' }}>
      <h1>Context API Theme & CRUD functionality practice</h1>

      <button>Toggle Theme</button>
    </div>
  )
}

export default Header;
