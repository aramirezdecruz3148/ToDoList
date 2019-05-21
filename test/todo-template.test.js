import template from '../src/todo-template.js';
const test = QUnit.test;

QUnit.module('todo');

test('todo template', function(assert) {
    //Arrange
    const todos = {
        task: 'Wash dog',
        label: 'wash-dog',
        completed: true
    };

    const expected = /*html*/`
    <label for="wash-dog">
        <input checked value="wash-dog" type="checkbox"> Wash dog
    </label>
    `;

    //Act 
    const html = template(todos);
    //Assert
    assert.htmlEqual(html, expected);
});

test('todo template completed = true', function(assert) {
    //Arrange
    const todos = {
        task: 'Wash dog',
        label: 'wash-dog',
        completed: true
    };

    const expected = /*html*/`
    <label for="wash-dog">
        <input checked value="wash-dog" type="checkbox"> Wash dog
    </label>
    `;

    //Act 
    const html = template(todos);
    //Assert
    assert.htmlEqual(html, expected);
});

test('todo template completed = false', function(assert) {
    //Arrange
    const todos = {
        task: 'Clean house',
        label: 'clean-house',
        completed: false
    };

    const expected = /*html*/`
    <label for="clean-house">
        <input value="clean-house" type="checkbox"> Clean house
    </label>
    `;

    //Act 
    const html = template(todos);
    //Assert
    assert.htmlEqual(html, expected);
});