import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, List, ListItem } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../../public/img/logo.png'; // Asegúrate de que la ruta del logo sea correcta

const NavBar = styled(AppBar)({
  backgroundColor: '#1a2a3a', 
  boxShadow: 'none',
});

const StyledLink = styled(Link)({
  color: '#fff',
  textDecoration: 'none',
  fontSize: '14px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#cfd8dc', 
  },
});

const NavList = styled(List)({
  display: 'flex',
  padding: 0,
});

const NavItem = styled(ListItem)({
  padding: 0,
});

const LogoLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
});

const LogoImage = styled('img')({
  height: '40px', // Ajusta la altura según sea necesario
  width: 'auto',
});

function Nav() {
  return (
    <NavBar position="static">
      <Toolbar>
        {/* Enlace con logo */}
        <LogoLink to="/">
          <LogoImage src={logo} alt="Logo" />
        </LogoLink>
        <NavList>
          <NavItem>
            <Button>
              <StyledLink to="/Barrios">Barrios</StyledLink>
            </Button>
          </NavItem>
          <NavItem>
            <Button>
              <StyledLink to="/Contact">Contactos</StyledLink>
            </Button>
          </NavItem>
          <NavItem>
            <Button>
              <StyledLink to="/Info">Información</StyledLink>
            </Button>
          </NavItem>
        </NavList>
      </Toolbar>
    </NavBar>
  );
}

export default Nav;
