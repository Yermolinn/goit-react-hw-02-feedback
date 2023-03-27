import styled from '@emotion/styled';

const Container = styled.div`
  width: 400px;
  padding: 20px 20px;
  margin: 0 auto;
`;

const Title = styled.div`
  margin-bottom: 16px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const FeedbackButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: green;
    color: white;
  }
`;

const Text = styled.p`
  text-align: center;
`;

const FeedbackText = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;


export {
  Container,
  Title,
  Button,
  FeedbackButton,
  Text,
  FeedbackText,
};