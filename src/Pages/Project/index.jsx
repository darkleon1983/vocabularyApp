import React from "react";
import cn from "classnames";
import MailTo from "../../Components/MailTo";

const Project = () => {
  return (
    <div className={cn("w-10/12 container")}>
      <div className={cn("grid justify-end")}>
        <h1 className="text-5xl text-center"> Английский для программиста.</h1>
        <p className="text-2xl mt-4 text-justify">
          <span className="ml-4">Этот</span> проект создан для начинающих
          web-разработчиков, как инструмент для изучения английского языка. На
          начальном этапе развития программиста ему не нужно говорить на
          английском, но ему гораздо облегчит жизнь способность на нем читать.
        </p>
        <p className="text-2xl mt-4 text-justify">
          <span className="ml-4">Сколько</span> слов нужно знать начинающему
          web-разработчику, чтобы читать документацию по языку или литературу по
          используемым технологиям?
        </p>
        <p className="text-2xl mt-4 text-justify">
          <span className="ml-4">На</span> разных ресурсах указываются разные
          цифры, на одном авторитетном сервисе для русскоязычных программистов я
          нашел цифру 3000-4000 слов, но на юТубКанале одного программиста из
          России, который работает в Европе я услышал очень оптимистичную цифру
          - 700 слов. И мне это количество слов кажется более правдоподобным.
          Важно понимать, что вам нужно знать 700 специальных слов, часть из
          которых термины или слова из математики и т.д. Имеется в виду, что
          человеку, хорошо освоившему школьную программу по английскому плюсом
          нужно выучить 700 слов и он сможет очень сносно понимать, что написано
          в литературе по вашему языку программирования.
        </p>{" "}
        <p className="text-2xl mt-4 text-justify">
          <span className="ml-4">Как</span> выучить эти слова, а главное, как
          узнать, какие слова нужно учить? Могу вам предложить свою методику,
          она называется "берешь книгу и читаешь"! В процессе чтения пишешь
          перевод незнакомых слов прямо между строчек. Если вы читаете с экрана,
          тогда придется вести таблицу в экселе.
          <p>
            При заучивании слов важно регулярная практика, будь то ежедневное
            повторение или упражнение на этом тренажере. Но, как вы понимаете,
            лучшей практикой является чтение на английском.
          </p>
          <p>
            Вы уже наверняка гуглили "как учить слова на английском" или что-то
            подобное. Советую почитать статьи или книги Вячеслава Дубынина, он
            объясняет, как работает память, но если вм лень еще что-то читать,
            дам совет от себя: повторяйте заученные слова через 20 минут потом
            через 8, а в следующий раз через 20 часов, это увеличит вероятность
            перехода информации из краткосрочной в долговременную память.
          </p>
          <p>Удачи вам и спасибо, что пользуетесь моим сайтом!</p>
          <p>Почта для фидбэка:</p>
          <MailTo
            label="Опишите ваши пожелания!"
            mailto="mailto: mts9832899777@yandex.ru"
          />
        </p>
      </div>
    </div>
  );
};

export default Project;
