import React, { useState } from "react";
import Link from 'next/link';
import LogoComponent from "@/Sections/LogoComponent/LogoComponent";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ProductDetails: React.FC = () => {
  const [view, setView] = useState("description"); // "description" or "form"
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add form submission logic here
  };


  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false); 

  const handleLogoClick = () => {
    console.log("Клик на логотип");
    setIsLogoModalOpen((prevState) => !prevState); 
  };

  return (
    <div className="product-details">
      {/* Блок с картинкой и содержимым */}
      <div className="product-details__image-wrapper">
      <img src="/images/3.png" alt="Background" className="header__background" />

      {/* Рамка */}
      <div className="product-details__border">

        
         {/* Кнопки сверху */}
         <div className="header-top">
            <button className="top-btn1">
                <img src="/Поделиться.png" alt="Поделиться" />
            </button>  


            <div className="top-btn2" onClick={handleLogoClick}>
                <img src="/лого.png" alt="Лого" />
            </div>
            
            {isLogoModalOpen && (
            <div className="modal-logo" onClick={handleLogoClick}>
                <div
                className="modal-logo__content"
                onClick={(e) => e.stopPropagation()}
                >
                <LogoComponent />
                </div>
            </div>
            )}              

            <button className="top-btn3">
                <Link href="/Info">
                    <img src="/Информация.png" alt="Информация" />
                </Link>
            </button>
          </div>       
        

        <div className="product-details__header">         
            <button
            className={`product-details__tab ${view === "description" ? "active" : ""}`}
            onClick={() => setView("description")}
            >
            Прайс
            </button>
            <button
            className={`product-details__tab ${view === "form" ? "active" : ""}`}
            onClick={() => setView("form")}
            >
            На заказ
            </button>
        </div>

        <div className="product-details__content">
            {view === "description" ? (
            <div className="product-details__description">
                <h2>Отбрось предрассудки, твори волшебство!</h2>
                <p>
                Настоящая фишка без компромиссов и изменений. Гораздо круче твоих фантазий, что создаёт пространств для лучших идей и эмоций.
                </p>
            </div>
            ) : (
            <form className="product-details__form" onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Введите ваше имя"
                    required
                    className="form-input"
                />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Введите ваш email"
                    required
                    className="form-input"
                />
                </div>
                <div className="form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Введите сообщение"
                    rows={4} // Corrected to a number
                    required
                    className="form-textarea"
                />
                </div>
                <button type="submit" className="form-submit">
                Отправить
                </button>
            </form>
            )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;