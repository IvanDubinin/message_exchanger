function Main() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="text">
          <ul className="row button-list">
            <li className="col-6">
              <a href="/create" type=" button" className="btn btn-secondary">
                Создать запись
              </a>
            </li>
            <li className="col-6">
              <a href="/note" type=" button" className="btn btn-secondary">
                Просмотреть запись
              </a>
            </li>
          </ul>
        </div>

        <div className="text">
          <p>
            <b>Вебпочтальон</b> – сервис для обмена собщениями (записями).
            Создайте запись, отправьте ссылку на запись и ваш друг сможет ее
            просмотреть.
          </p>
          <p>Как сделать запись? </p>
          <ul>
            <li>Нажмите на кнопку "Создать запись"</li>
            <li>Добавьте текст и нажмите "Создать"</li>
            <li>Отправьте сгенерированный адрес адресату</li>
          </ul>
          <p>
            Как прочитать запись? Перейдите по присланному URL.{" "}
            <p>Внимание! Посмотреть запись можно один раз!</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
//
