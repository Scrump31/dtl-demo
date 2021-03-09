import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import faker from 'faker'
import App from './App'

test('Form, given valid submitted values, displays "thanks" message', async () => {
  // Arrange
  render(<App />)
  const fakeName = faker.name.firstName()
  const fakeEmail = faker.internet.email()
  const fakeComment = faker.lorem.sentence()

  // Act
  user.type(screen.getByRole('textbox', { name: /name/i }), fakeName)
  user.type(screen.getByRole('textbox', { name: /email/i }), fakeEmail)
  user.type(screen.getByRole('textbox', { name: /comments/i }), fakeComment)
  user.click(screen.getByRole('button', { name: /submit/i }))

  // Assert
  const thanksMessage = await screen.findByRole('heading', {
    name: `Thanks for the feedback ${fakeName}!`
  })

  expect(thanksMessage).toBeInTheDocument()
})
