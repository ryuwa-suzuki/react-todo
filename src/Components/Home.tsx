import { Input, Flex, Button, Textarea } from '@mantine/core';
import React, { useState } from "react";
import List, { TodoListContext} from "./List";

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

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };


  const saveTodo = () => {
    const type = window.location.pathname.replace('/', '');

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

  const deleteTodo = (index: number) => {
    const list = [...todoList];
    list.splice(index, 1);

    setTodoList(list);
  };

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

      <Textarea
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
        <List onDelete={deleteTodo}/>
      </TodoListContext.Provider>
    </Flex>
  );
};
