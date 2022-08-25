import React from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme'
import Input from './components/Input';
import EventButton from './components/EventButton';

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  /* width: ${({width}) => width - 40}px; */
  width: 90%;
  background-size: ${({width}) => width - 40}px;
  font-size: 40px;
  font-weight: 600;
  color: ${({theme}) => theme.text};
  background-color: ${({theme}) => theme.itemBackground};
  align-self: center;
  text-align: center;
  margin: 0px 20px;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>버킷 리스트</Title>
        <Input placeholder="+항목추가"/>
        <EventButton/>
      </Container>
    </ThemeProvider>
  );
}