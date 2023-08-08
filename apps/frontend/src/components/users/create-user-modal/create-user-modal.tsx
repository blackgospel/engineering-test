import { Button, Modal, ModalProps, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

type ICreateUserModalProps = Pick<ModalProps, 'opened' | 'onClose'>;

export const CreateUserModal: React.FC<ICreateUserModalProps> = ({
  opened,
  onClose,
}) => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Modal opened={opened} onClose={onClose} title="Create User">
      <form>
        <Stack spacing="lg">
          <TextInput
            label="Name"
            placeholder="Enter a name..."
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Enter an email..."
            {...form.getInputProps('email')}
          />
          <Button
            fullWidth
            type="submit"
            disabled={
              form.values.name.length < 4 && form.values.email.length < 5
            }
          >
            Save
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};
