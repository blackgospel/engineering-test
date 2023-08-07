import {
  ActionIcon,
  AppShell,
  Burger,
  Footer,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { IconMoonStars, IconSun, IconUser } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const data = [
  {
    icon: <IconUser size="1rem" />,
    color: 'blue',
    label: 'Users',
    path: 'users',
  },
  // {
  //   icon: <IconAlertCircle size="1rem" />,
  //   color: 'teal',
  //   label: 'Open Issues',
  // },
  // { icon: <IconMessages size="1rem" />, color: 'violet', label: 'Discussions' },
];

export const DashboardLayout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/users');
    }
  }, [navigate, pathname]);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          {data.map(({ icon, color, label }) => {
            return (
              <UnstyledButton
                key={label}
                sx={(theme) => ({
                  display: 'block',
                  width: '100%',
                  padding: theme.spacing.xs,
                  borderRadius: theme.radius.sm,
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[0]
                      : theme.black,

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                  },
                })}
              >
                <Group>
                  <ThemeIcon color={color} variant="light">
                    {icon}
                  </ThemeIcon>

                  <Text size="sm">{label}</Text>
                </Group>
              </UnstyledButton>
            );
          })}
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 70 }} p="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Group sx={{ height: '100%' }} px={20} position="apart">
              <Text>Engineering Test</Text>
              <ActionIcon
                variant="default"
                onClick={() => toggleColorScheme()}
                size={30}
              >
                {colorScheme === 'dark' ? (
                  <IconSun size="1rem" />
                ) : (
                  <IconMoonStars size="1rem" />
                )}
              </ActionIcon>
            </Group>
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
};
