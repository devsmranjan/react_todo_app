import { expect } from 'chai';
import { getCompletedTodos } from '../selectors';

describe('The getCompletedTodo selector', () => {
    it('Returns only completed todos', () => {
        const fakeTodos = [
            {
                text: 'Say Hello!',
                isCompleted: true,
            },
            {
                text: 'Say Goodbye!',
                isCompleted: false,
            },
            {
                text: 'Do cycling!',
                isCompleted: false,
            },
        ];

        const expected = [
            {
                text: 'Say Hello!',
                isCompleted: true,
            },
        ];

        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    });
});
