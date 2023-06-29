import { Card, Grid, Text, Badge, Button, Flex, Space} from '@mantine/core';
import { createContext, useContext } from 'react';

type todoList = {
  title: string,
  content: string,
  type: string
}[];

interface ListProps {
  onDelete: (data: any) => void;
}

export const TodoListContext = createContext<todoList>([]);

const List: React.FC<ListProps> = ({onDelete}) => {
  const todoList = useContext(TodoListContext);
  let badgeColor = ''

  const handleDelete = (index: number) => {
    onDelete(index);
  };

  const lists = todoList.map((item, index) => {
    switch (item.type) {
      case 'todo':
        badgeColor = 'red';
        break;
      case 'in-progress':
        badgeColor= 'indigo';
        break;
      case 'complete':
        badgeColor = 'green';
        break;
      default:
        badgeColor = 'cyan';
    }
    return(
      <Grid.Col key={index} span={12} xs={4}>
        <Card shadow="sm" padding="xl" component="a">
          <Badge color={badgeColor} size="lg">{item.type}</Badge>
          <Text weight={500} size="lg" mt="md">
            {item.title}
          </Text>

          <Text mt="xs" color="dimmed" size="sm">
            {item.content}
          </Text>
          <Space h="md" />
          <Flex
            justify="flex-end"
            align="flex-end">
            <Button color="red" onClick={() => handleDelete(index)}>
              削除
            </Button>
          </Flex>
        </Card>
      </Grid.Col>
    );
  });

  return (
    <Grid>
      {lists}
    </Grid>
  );
}

export default List;
