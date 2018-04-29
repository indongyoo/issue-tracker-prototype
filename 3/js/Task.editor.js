!function() {
  const { go } = Functional;

  const tmpl = task => `
    <div class="page editor">
      <div class="container">
        <div class="header">
          <div class="options">
            <button type="button" class="cancel">취소</button>
            <button type="button" class="save">저장</button>
          </div>
        </div>
        <div class="body">
          <div class="user_name"><input type="text" name="user_name" value="${task.user_name}"></div>
          <div class="name"><input type="text" name="name" value="${task.name}"></div>
          <div class="description"><textarea name="description">${task.description}</textarea></div>
        </div>
      </div>
    </div>
  `;

  const emptyTask = _ => ({ user_name: '', name: '', description: '' });

  const show = (task = emptyTask()) => new Promise(resolve => go(
    task,
    tmpl,
    $.el,
    $.append($('#app')),
    $.on('click', '.options .save', e => go(
      e.delegateTarget,
      $.formToJSON,
      resolve,
      _ => e.delegateTarget,
      $.remove
    )),
    $.on('click', '.options .cancel', e => go(
      e.delegateTarget,
      $.remove,
      _ => resolve()
    ))
  ));

  Task.editor = {
    show
  };
} ();