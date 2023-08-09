import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { CreateUserModal } from './create-user-modal';

describe('Create User Modal', () => {
  test('Modal shows the children', () => {
    const handleClose = jest.fn();
    const newUser = {
      name: 'John Doe',
      email: 'john@doe.com',
    };

    render(<CreateUserModal opened={true} onClose={handleClose} />);

    const nameInput = screen.getByLabelText(
      'new-user-name'
    ) as HTMLInputElement;
    const emailInput = screen.getByLabelText(
      'new-user-email'
    ) as HTMLInputElement;

    expect(getByText('Create User')).toBeTruthy();

    fireEvent.change(nameInput, { target: { value: newUser.name } });
    fireEvent.change(emailInput, { target: { value: newUser.email } });

    expect(nameInput.value).toBe(newUser.name);
    expect(emailInput.value).toBe(newUser.email);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
