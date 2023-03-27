import PropTypes from 'prop-types';
import { Container, Title } from 'components/App/Feedback.styled';
export const Section = ({ title, children }) => {
  return (
    <section>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
