import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import App from './App';
import Header from './Component/Header';
import BookingForm from './Component/BookingForm';

test('renders learn react link', () => {

  const date= '2023-06-15';
  const time = '17:00';
  const guest = 2;
  const occasion = 'Birthday';
  const handleSubmit = jest.fn();
  render(<BookingForm  onSubmit={handleSubmit}/>);

  const dateInput = screen.getByLabelText(/Choose Date:/);
  fireEvent.change( dateInput, {target: {value: date}});

  const timeInput = screen.getByLabelText(/Choose Time:/);
  fireEvent.change (timeInput, {target: {value: time}});

  const guestInput = screen.getByLabelText(/Number of Guest:/);
  fireEvent.change (guestInput, {target: {value: guest}});

  const occasionInput = screen.getByLabelText(/Occasion:/);
  fireEvent.change (occasionInput, {target: {value: occasion}});

  const submitBtn = screen.getByRole("button");
  fireEvent.click(submitBtn);

  expect(handleSubmit).toHaveBeenCalledWith({
    date,
    time,
    guest,
    occasion,
  })

  expect(submitBtn).not.toHaveAttribute('disabled');

});
