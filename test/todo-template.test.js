const test = QUnit.test;

QUnit.module('todo');

function template(todos) {
    let checked = '';

    if(todos.completed) {
        checked = 'checked';
    }
    return /*html*/ `
    <label for="${todos.label}">
        <input ${checked} value="${todos.label}" type="checkbox"> ${todos.task}
    </label>
    `;
}

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