!function() {
  const item = {};
  item.tmpl = task => `
    <li class="task item">
      <div class="options">
        <button type="button" class="edit">수정</button>
        <button type="button" class="done">완료</button>
      </div>
      <div class="body">
        <h4 class="name">${task.name}</h4>
        <em class="user_name">${task.user_name}</em>
        <div class="description">${task.description}</div>
      </div>
    </li>
  `;

  const init = pipe(
    $.on('click', '.create', e => go(
      undefined,
      Task.editor.show,
      pipe.isTruthy(
        item.tmpl,
        $.el,
        $.append(go(e.delegateTarget, $.find('.task_list'))))
    )),
    $.on('click', '.task.item .edit', e => {
      const taskEl = $.closest('.task.item', e.currentTarget);
      go(
        $.toJSON(
          taskEl,
          '.body > *',
          el => ({ [$.attr('class', el)]: el.textContent })),
        Task.editor.show,
        pipe.isTruthy(
          item.tmpl,
          $.outerHTML(taskEl)));
    }),
    $.on('click', '.task.item .done', e => go(
      e.currentTarget,
      $.closest('.task.item'),
      $.remove
    ))
  );

  Task.list = {
    init
  };
} ();

