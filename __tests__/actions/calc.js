import * as Actions from '../../src/actions';

describe('actions', () => {
  it('should create an action to add', () => {
    const expectedAction = {
      type: Actions.ADD,
    }
    expect(Actions.add()).toEqual(expectedAction)
  })
})