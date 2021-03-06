function About() {
  return (
    <div className="text">
      <p>
        {" "}
        Одна из основных задач, решаемых сетью, – передача данных. Собственно,
        информационные сети часто так и называют – сети передачи данных, тем
        самым сужая перечень видов передаваемой информации. Помимо данных по
        современным сетям передают самую различную информацию: текстовую,
        графическую, голосовую и иную звуковую, видео и т.д.
      </p>

      <p>
        История развития технологий диалогового обмена сообщениями насчитывает
        почти столько же лет, сколько развиваются сами информационные сети.
        Необходимость передачи различных служебных сообщений между
        вычислительными устройствами возникла сразу же после возникновения
        первых сетевых систем в 1960-х годах. Ради справедливости нужно сказать,
        что первыми сетевыми сообщениями были вовсе не тексты: все началось с
        необходимости передачи сервисных оповещений внутри сети, например, о
        начале печати. И все же, появление первых способов сетевой пересылки
        текстов не заставило себя ждать.
      </p>

      <p>
        {" "}
        Студентом курса "Веб разработчик" Образовательного центра компьютерного
        проектирования и дизайна выполнена аттестационная выпусная работа,
        представляющая собой сервис обмена сообщениями "Вебпочтальон". Данный
        сервис позволяет создавать сообщение с передачей сгенерированной ссылки
        на это сообщение по сети. После прочтения сообщения адресатом запись
        будет удалена.
      </p>
    </div>
  );
}

export default About;
