import { screen } from '@testing-library/dom'
import user from '@testing-library/user-event'
import faker from 'faker'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import App from './App'

test('Form, given valid submitted values, displays "thanks" message', async () => {
  // Arrange
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  document.body.appendChild(div)
  const fakeName = faker.name.firstName()
  const fakeEmail = faker.internet.email()
  const fakeComment = faker.lorem.sentence()

  // Act
  user.type(screen.getByPlaceholderText(/name/i), fakeName)
  user.type(screen.getByPlaceholderText(/email/i), fakeEmail)
  user.type(screen.getByPlaceholderText(/comments/i), fakeComment)
  user.click(screen.getByText(/submit/i))

  // Assert
  let thanksMessage
  await act(async () => {
    thanksMessage = await screen.findByRole('heading', {
      name: `Thanks for the feedback ${fakeName}!`
    })
  })
  expect(thanksMessage).toBeInTheDocument()

  // Cleanup
  document.body.removeChild(div)
})
