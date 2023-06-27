import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Drawer, Flex, rem, px, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";


const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

export default function HeaderSimple({ links }: HeaderSimpleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map(link => (
    <Link
      to={link.link}
      key={link.label}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <BrowserRouter>
      <Header height={60} mb={120}>
        <Container className={classes.header}>
          <img src="/images/robo.png" alt="" width={px(60)}/>


          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" aria-label="Open navigation"/>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>

          <Drawer opened={opened} onClose={toggle} position="right" padding="xl" size="md">
            <Flex style={{ fontSize: '0px' }} gap="md" justify="center" align="center" direction="column" wrap="wrap">
              {items}
            </Flex>
          </Drawer>
        </Container>
      </Header>
    </BrowserRouter>
  );
}
