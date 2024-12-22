import React, { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Link from 'next/link';
import SecondComponent from "@/Sections/SecondComponent/SecondComponent";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  

  return (
    <header className={`header ${isModalOpen ? "modal-open" : ""}`}>
      {/* Блок с картинкой и содержимым */}
      <div className="header__image-wrapper">
        <img src="/1.png" alt="Background" className="header__background" />

        {/* Рамка */}
        <div className="header__border">
          {/* Кнопки сверху */}
          <div className="header-top">
            <button className="top-btn1">
                <img src="/Поделиться.png" alt="Поделиться" />
            </button>
            <button className="top-btn2">
                <img src="/лого.png" alt="Лого" />
            </button>
            <button className="top-btn3">
                <img src="/Информация.png" alt="Информация" />
            </button>
          </div>


          {/* Центральные кнопки */}
          <div className="header-main">
            <div className="button-with-dot1">
              <GoDotFill className="side-btn__dot1" />
              <button className="side-btn1">
                <div className="side-btn__header">
                  <div className="side-btn__title-wrapper">
                    <span className="side-btn__title">Фишка страдательная</span> 
                    <BiDownArrow className="side-btn__icon" />
                  </div>
                  <span className="side-btn__price">100 ₽</span>
                </div>
                <p className="side-btn__description">Помогает страдать. Фильтры делают страдание эстетичным.</p>
              </button>
            </div>

            <div className="button-with-dot2">
              <GoDotFill className="side-btn__dot2" />
              <button className="side-btn2">
                <div className="side-btn__header">
                  <div className="side-btn__title-wrapper">
                    <span className="side-btn__title">Фишка независимая</span>
                    <BiDownArrow className="side-btn__icon" />
                  </div>
                  <span className="side-btn__price">100 ₽</span>
                </div>
                <p className="side-btn__description">Помогает отделяться на орбиты, помещаться.</p>
              </button>
            </div>

            <div className="button-with-dot3">
              <GoDotFill className="side-btn__dot3" />
              <button className="side-btn3">
                <div className="side-btn__header">
                  <div className="side-btn__title-wrapper">
                    <span className="side-btn__title">Фишка от одиночества</span>
                    <BiDownArrow className="side-btn__icon" />
                  </div>
                  <span className="side-btn__price">100 ₽</span>
                </div>
                <p className="side-btn__description">Мотивирующее на действия. Помогает задуматься.</p>
              </button>
            </div>

            <div className="button-with-dot4">
              <GoDotFill className="side-btn__dot4" />
              <button className="side-btn4">
                <div className="side-btn__header">
                  <div className="side-btn__title-wrapper">
                    <span className="side-btn__title">Фишка с рюкзаками</span>
                    <BiDownArrow className="side-btn__icon" />
                  </div>
                  <span className="side-btn__price">100 ₽</span>
                </div>
                <p className="side-btn__description">Констатация независимого положения. Позволяет отказаться.</p>
              </button>
            </div>

            <div className="button-with-dot5">
              <GoDotFill className="side-btn__dot5" />
              <button className="side-btn5">
                <div className="side-btn__header">
                  <div className="side-btn__title-wrapper">
                    <span className="side-btn__title">Фишка с монстрами</span>
                    <BiDownArrow className="side-btn__icon" />
                  </div>
                  <span className="side-btn__price">100 ₽</span>
                </div>
                <p className="side-btn__description">Помогает справляться со своими монстрами.</p>
              </button>
            </div>

            <div className="button-with-dot6">
              <GoDotFill className="side-btn__dot6" />
              <button className="side-btn6">
                <div className="side-btn__header">
                  <div className="side-btn__title-wrapper">
                    <span className="side-btn__title">Фишка мотивирующая</span>
                    <BiDownArrow className="side-btn__icon" />
                  </div>
                  <span className="side-btn__price">100 ₽</span>
                </div>
                <p className="side-btn__description">Обозначает «так себе ситуацию». Служит как точка опоры для развития.</p>
              </button>
            </div>
          </div>


           {/* Кнопка сбоку справа */}
           <div className="button-right" onClick={handleToggleModal}>
              <IoIosArrowBack className="button-right__icon" />
            </div>
            {/* Модальное окно с SecondComponent */}
            {isModalOpen && (
              <div className="modal" onClick={handleToggleModal}>
                <div
                  className="modal__content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <SecondComponent />
                </div>
              </div>
            )}


          {/* Кнопка снизу */}
          <div className="header-bottom">
            <button className="bottom-btn">
                <img src="/стрелка.png" alt="Стрелка" className="bottom-btn__icon" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;

