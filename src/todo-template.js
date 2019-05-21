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

export default template;