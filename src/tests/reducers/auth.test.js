import authReducer from '../../reducers/auth';

test('should set uid on login', () => {
  const state = authReducer({}, { type: 'LOGIN', uid: '123' });
  expect(state.uid).toBe('123');
});

test('should set to empty object on logout', () => {
  const state = authReducer({ uid: 'anything' }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});