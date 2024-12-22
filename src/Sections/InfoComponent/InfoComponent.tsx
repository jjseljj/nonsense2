import React from "react";
import Link from "next/link";


const InfoComponent = () => {
  return (
    <div className="info-component">
      {/* Блок с картинкой и содержимым */}
      <div className="info-component__image-wrapper">
        <img src="/images/info.png" alt="Background" className="info-component__background" />
      
        {/* Рамка */}
        <div className="info-component__border">
          {/* Кнопки сверху */}
          <div className="info-component__top-buttons">
            <button className="info-top-btn1">
              <img src="/Поделиться.png" alt="Поделиться" />
            </button>
            <div className="info-top-btn2">
              <Link href="/LogoPage">
                <img src="/лого.png" alt="Лого" />
              </Link>
            </div>
            <button className="info-top-btn3">
              <img src="/Информация.png" alt="Информация" />
            </button>
          </div>

          {/* Первый div с двумя вложенными div'ами */}
          <div className="info-component__content">
            <div className="info-content__block1">
              <div className="info-block1__child1">
                <p>Прайс</p>
              </div>
              <div className="info-block1__child2">
                <p>На заказ</p>
              </div>
            </div>

            {/* Второй div */}
            <div className="info-content__block2">
              <p>Отбрось предрассудки, твори волшебство!</p>
            </div>

            {/* Третий div с текстом */}
            <div className="info-content__block3">
              <p>
                Настоящая фигня. Без красителей и заменителей. Гораздо круче той фигни, что вокруг
                продаётся и фигнёю зовётся. Экологически чистая - не портит воздух, не загрязняет
                воду, её не повезёт вонючий грузовик, для неё не выпилят зелёный лес. Годится как
                экологический подарок вместо любой другой фигни. Хотите потратить деньги на
                очередную пластмассовую фигню - покупайте лучше здесь! Дарите чистый воздух,
                зелёные леса, цветочные луга!
              </p>
              <br />              
              <p>
                Отлично подходит в ситуации, когда всё не так, пора менять. Позволяет закинуть,
                задвинуть, затоптать, уничтожить, разобраться, посмеяться, обновиться,
                раскрутиться, начать сначала и всего остального.
              </p>
              <p>
                Ассортимент постоянно пополняется, если чего-то не хватает, есть замечательный
                раздел "На заказ"** - пиши чего хочешь, плати сколько влезет. Уплочено - значит
                твоё. Для наилучшего результата имеет смысл повторить. И не забудь поделиться
                ссылкой***.
              </p>
              <br />              
              <p>Берегите чеки, остерегайтесь подделок!</p>
              <br />              
              <p>Администратор</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
