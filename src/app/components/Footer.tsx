import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <Container className="text-center mt-4">
      <footer>
        <p>&copy; {new Date().getFullYear()} Adivinha. Todos os direitos reservados.</p>
      </footer>
    </Container>
  );
};
export default Footer;