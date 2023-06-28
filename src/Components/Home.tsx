import { Input, Flex, Button } from '@mantine/core';
import React, { useState} from "react";
import { useLocation } from "react-router-dom";
import { TodoListContext, List } from "./List";

export default function Home () {

  type List = {
    title: string,
    content: string,
    type: string
  }[];

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [todoList, setTodoList] = useState<List>([]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const type = useLocation().pathname;


  const saveTodo = () => {
    if (!title || !content) return;
    const list = [...todoList, {
        title: title,
        content: content,
        type: type
      }
    ];
    setTitle('');
    setContent('');

    setTodoList(list);
  }

  return (
    <Flex gap="xl" justify="center" align="left" direction="column">
      <Input
      type='text'
      placeholder="Title"
      radius="md"
      size="xs"
      value={title}
      onChange={handleTitleChange}
      />
      <Input
        type='text'
        placeholder="content"
        radius="md"
        size="md"
        value={content}
        onChange={handleContentChange}
      />
      <Flex style={{ fontSize: '100px' }} gap="md" justify="flex-end" align="center" wrap="wrap">
        <Button
          onClick={saveTodo}>
          Create
        </Button>
      </Flex>
      <TodoListContext.Provider value={todoList}>
        <List />
      </TodoListContext.Provider>
    </Flex>
  );
};
