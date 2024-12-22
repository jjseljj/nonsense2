import React from 'react';
import { RxShare2 } from "react-icons/rx";

export default function SecondComponent() {
  return (
    <div className="second-component">
      <div className="second-component__wrapper">
        <p className="second-component__text">
          Настоящая фигня. Без красителей и заменителей. Гораздо круче той
          фигни, что вокруг продаётся и фигнёю зовётся. Экологически чистая - не
          портит воздух, не загрязняет воду, её не повезёт вонючий грузовик,
          для неё не выпилят зелёный лес. Годится как экологический подарок
          вместо любой другой фигни. Хотите потратить деньги на очередную
          пластмассовую фигню - покупайте лучше здесь! Дарите чистый воздух,
          зелёные леса, цветочные луга!
          <br />
          <br />
          Отлично подходит в ситуации, когда всё не так, пора менять. Позволяет
          закинуть, задвинуть, затоптать, уничтожить, разобраться, посмеяться,
          обновиться, раскрутиться, начать сначала и всего остального.
          <br />
          <br />
          Ассортимент постоянно пополняется, если чего-то не хватает, есть
          замечательный раздел "На заказ"** - пиши чего хочешь, плати сколько
          влезет. Уплочено - значит твоё. Для наилучшего результата имеет смысл
          повторить. И не забудь поделиться ссылкой***.
          <br />
          <br />
          Берегите чеки, остерегайтесь подделок!
          <br />
          <br />
          Администратор
        </p>
        <div className="second-component__actions">
          <button className="second-component__button">
            <RxShare2 className="second-component__icon" />
          </button>
        </div>

      </div>
    </div>
  );
}