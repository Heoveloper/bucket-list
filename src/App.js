import React, { useState } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme'
import Input from './components/Input';
import EventButton from './components/EventButton';
import Task from './components/Task'

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  /* width: ${({width}) => width - 40}px; */
  width: 95%;
  background-size: ${({width}) => width - 40}px;
  font-size: 40px;
  font-weight: 600;
  color: ${({theme}) => theme.text};
  background-color: ${({theme}) => theme.itemBackground};
  align-self: center;
  text-align: center;
  margin: 0px 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({width}) => width - 40}px;
`;

export default function App() {
  const [newTask, setNewTask] = useState('');
  const width = Dimensions.get('window').width;
  const [tasks, setTasks] = useState({});

  //항목 생성
  const _addTask = () => {
    console.log('생성');
    setNewTask('');
  };

  const _handleTextChange = text => {
    setNewTask(text);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>버킷 리스트</Title>
        <Input
          placeholder="+항목추가"
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
        />
        <List width={width}>
          {Object.values(tasks)
                 .reverse()
                 .map(item => {
                  <Task key={item.id} text={item.text}/>
          })}
        </List>
        <EventButton/>
      </Container>
    </ThemeProvider>
  );
}