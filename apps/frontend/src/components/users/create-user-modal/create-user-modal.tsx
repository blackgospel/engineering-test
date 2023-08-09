import { ICreateUserSchema } from '@eurocamp/schema';
import { useCreateUserMutation } from '@eurocamp/store';
import { Button, Modal, ModalProps, Stack, TextInput } from '@mantine/core';
import { hasLength, isEmail, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

type ICreateUserModalProps = Pick<ModalProps, 'opened' | 'onClose'>;

export const CreateUserModal: React.FC<ICreateUserModalProps> = ({
  opened,
  onClose,
}) => {
  const [createUser, { isLoading }] = useCreateUserMutation();

  const form = useForm({
    initialValues: {
      name: 'Test',
      email: 'test@test.com',
    },
    validate: {
      email: isEmail('Invalid email'),
      name: hasLength({ min: 2, max: 30 }, 'Name must be 2-10 characters long'),
    },
  });

  const handleClose = () => {
    onClose();
    form.reset();
  };

  const handleSubmit = (values: ICreateUserSchema) => {
    createUser(values)
      .unwrap()
      .then(() => {
        notifications.show({
          title: 'Success',
          message: 'Created user',
          color: 'green',
        });
      })
      .catch(() => {
        notifications.show({
          title: 'Error',
          message: 'Could not create user',
          color: 'red',
        });
      })
      .finally(handleClose);
  };

  return (
    <Modal opened={opened} onClose={handleClose} title="Create User">
      <form noValidate onSubmit={form.onSubmit(handleSubmit)}>
        <Stack spacing="lg">
          <TextInput
            label="Name"
            placeholder="Enter a name..."
            aria-label="new-user-name"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Enter an email..."
            aria-label="new-user-email"
            {...form.getInputProps('email')}
          />
          <Button
            fullWidth
            type="submit"
            disabled={
              form.values.name.length < 4 && form.values.email.length < 5
            }
            aria-label="new-user-submit"
            loading={isLoading}
          >
            Save
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};
