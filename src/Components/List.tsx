import { Card, Grid, Text } from '@mantine/core';
import { createContext, useContext } from 'react';

type todoList = {
  title: string,
  content: string,
  type: string
}[];

export const TodoListContext = createContext<todoList>([]);

export function List() {
  const todoList = useContext(TodoListContext);
  const lists = todoList.map((item, index) => (
    <Grid.Col key={index} span={12} xs={4}>
      <Card shadow="sm" padding="xl" component="a">
        <Text weight={500} size="lg" mt="md">
          {item.title}
        </Text>

        <Text mt="xs" color="dimmed" size="sm">
          {item.content}
        </Text>
      </Card>
    </Grid.Col>
  ))
  return (
    <Grid>
      {lists}
    </Grid>
  );
}
