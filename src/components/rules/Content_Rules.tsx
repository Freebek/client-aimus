import React from "react";

const Content_Rules = () => {
  return (
    <>
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Общие правила</h1>
        <p className="text-xs text-[#f7f7f7]">
          Подключаясь к нашим серверам или посещая официальный сайт проекта, вы
          автоматически соглашаетесь с приведёнными ниже правилами и обязуетесь
          их соблюдать.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold">1. Читы и конфигурации</h2>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">1.1</span> Запрещено
            использовать или хранить любые читы, конфигурации, установщики,
            skinchanger’ы, скрипты AHK и другие программы, дающие преимущество.
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: Перманентный бан аккаунта.]
          </span>
        </div>
        <p className="text-xs">
          * Если у вас установлены читы или конфиги от CS:GO, неработающие в
          CS2, — бан не будет выдан. Однако дата последнего изменения файла не
          должна быть позднее 26.09.2023.
        </p>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">1.2</span>{" "}
            Администратор имеет право вызвать игрока на проверку в случае
            подозрения на читы. Игрок обязан подчиниться.
          </p>
          <span className="text-red-500 text-sm">
            [Отказ от проверки: Первый отказ — бан на 30 дней. Второй отказ —
            перманентный бан]
          </span>
        </div>
        <p className="text-xs">
          Троллинг/неадекват во время проверки: бан на 3 дня
        </p>
        <p className="text-xs">Задержка подтверждения: бан на 30 дней</p>
        <p className="text-xs">Тайминги проверки:</p>
        <p className="text-xs">Отправка ника Discord: 5 минут</p>
        <p className="text-xs">Отправка ID AnyDesk: 5 минут</p>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">1.3</span> Запрещены
            конфликты и споры с администрацией без доказательств. Жалобы
            подаются через: t.me/aimus_administration
          </p>

          <span className="text-red-500 text-sm">
            [Наказание: мут/гаг от 30 минут до бессрочного]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">1.4</span> Запрещено
            обсуждать личную жизнь модераторов и администраторов.
          </p>

          <span className="text-red-500 text-sm">
            [Наказание: мут/гаг от 30 минут до бессрочного]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">1.5</span>
            Если Steam-аккаунт игрока получил бан на FACEIT за читы или был
            замечен Ban Patrol, он автоматически блокируется на сервере.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <h2 className="font-bold">2. Голосовой и текстовый чат</h2>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.1</span>
            Запрещены: оскорбления, крики, провокации, токсичность, игра музыки
            через микрофон, флейм, ответные оскорбления и т.п.
          </p>

          <span className="text-red-500 text-sm">
            [Наказание: мут/гаг от 30 минут до бессрочного]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.2</span>
            Запрещены оскорбления администрации.
          </p>

          <span className="text-red-500 text-sm">
            [Наказание: мут/гаг от 30 минут до бессрочного]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.3</span>
            Оскорбления родственников и членов семьи — строго запрещены.
          </p>

          <span className="text-red-500 text-sm">
            [Наказание: мут/гаг от 360 минут до бессрочного]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.4</span>
            Запрещено разжигание этнической розни и обсуждение политики.
          </p>

          <span className="text-red-500 text-sm">
            [Наказание: мут/гаг на 180 минут]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.5</span>
            Использование багов на сервере запрещено.
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: от 1 дня до 1 месяца бана]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.6</span>
            Флуд — отправка более 5 сообщений за 10 секунд.
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: бан чата на 60 минут]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.7</span>
            Запрещена реклама любых Discord/Telegram/сайтов/серверов, кроме
            официальных: aimus.uz, t.me/aimus_chat, discord.gg/aimus
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: бан аккаунта на 30 дней]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.8</span>
            Запрещено передавать информацию о других игроках, полученную после
            смерти (мониторинг).
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: мут/гаг на 180 мин + бан на 30 дней]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.9</span>
            Запрещено выдавать себя за администрацию, если вы таковой не
            являетесь.
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: бан на 3–7 дней]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.10</span>
            Оскорбления проекта AIMUS строго запрещены.
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: перманентный бан]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.11</span>
            Использование репортов для обхода гага или троллинга администрации
            запрещено.
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: бан на 120 минут]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.12</span>
            Использование программ для изменения голоса запрещено.
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: бан на 30–90 минут]
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <h2 className="font-bold">3. Игровой процесс</h2>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">3.1</span>
            Запрещено использовать баги, эксплойты и лазейки на карте.
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: бан на 3 дня]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">3.2</span>
            Игра с другого аккаунта после блокировки основного запрещена.
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: перманентный бан всех аккаунтов]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">3.3</span>
            Запрещено голосовать (!vk, !vb, !vm) против новых игроков без причины.
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: бан на 360 минут]
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <h2 className="font-bold">4. Имена игроков (ники)</h2>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">4.1</span>
            Запрещены оскорбительные ники и теги. Администратор обязан выдать предупреждение, и если за 5 минут ник не изменён — применяется наказание.
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: бан на 60–360 минут]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">4.2</span>
            Запрещены ники с рекламой.
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: бан на 2 дня]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">4.3</span>
            Запрещены фейковые теги, например: Admin, Moderator, Creator и т.п.
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: бан на 2 дня]
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">4.4</span>
            Ники должны быть написаны кириллицей или латиницей (A-Z, А-Я), допустимы цифры 0–12.
          </p>
          <span className="text-red-500 text-sm">
            [Наказание: бан на 1 день]
          </span>
        </div>
      </div>
    </>
  );
};

export default Content_Rules;
