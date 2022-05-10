import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Top from "../top/top";

function MainPage(): JSX.Element {
  return (
    <React.Fragment>
      <Header/>
      <main className="main">
        <Top/>
        <h1 className="visually-hidden">Чек-лист</h1>
        <section className="main__checklist checklist">
          <h2 className="checklist__title visually-hidden">Проект: maffin.pw</h2>
          <div className="checklist__complete">
            <svg className="checklist__complete-icon" width="200" height="200">
              <use xlinkHref="img/sprite.svg#icon-complete"></use>
            </svg>
          </div>
          <div className="checklist__container">
            <h3 className="checklist__subtitle subtitle subtitle--in-process">В процессе</h3>
            <ul className="checklist__list">
              <li className="checklist__item">
                <div className="checklist__inner">
                  <div className="checklist__controls">
                    <button className="checklist__control checklist__control--edit" aria-label="Редактировать"></button>
                    <button className="checklist__control checklist__control--delete" aria-label="Удалить"></button>
                  </div>
                  <label className="checklist__box">
                    <input type="checkbox" name="check-1" className="checklist__checkbox visually-hidden"/>
                    <span className="checklist__check-box"></span>
                    <span className="checklist__name">Документ проходит проверку на валидность https://validator.w3.org/nu/</span>
                  </label>
                </div>
              </li>
              <li className="checklist__item">
                <div className="checklist__inner">
                  <div className="checklist__controls">
                    <button className="checklist__control checklist__control--edit" aria-label="Редактировать"></button>
                    <button className="checklist__control checklist__control--delete" aria-label="Удалить"></button>
                  </div>
                  <label className="checklist__box">
                    <input type="checkbox" name="check-2" className="checklist__checkbox visually-hidden"/>
                    <span className="checklist__check-box"></span>
                    <span className="checklist__name">В разметке отсутствует дублирование кода для одного и того же элемента, с помощью которого элемент
                    отображается в разных местах страницы на разных версиях: мобильной, десктопной, планшетной
                  </span>
                  </label>
                  <button className="checklist__show-button checklist__show-button--showed"
                          aria-label="Скрыть"></button>
                </div>
              </li>
              <li className="checklist__item">
                <div className="checklist__inner">
                  <div className="checklist__controls">
                    <button className="checklist__control checklist__control--save" aria-label="Сохранить"></button>
                    <button className="checklist__control checklist__control--delete" aria-label="Удалить"></button>
                  </div>
                  <label className="checklist__box checklist__box--edit">
                    <span className="visually-hidden">Редактировать текст</span>
                    <textarea name="card_text"
                              className="checklist__edit"
                              defaultValue={`Подключены правильные шрифты, их размеры, цвет и толщина равны соответствующим параметрам в макетах и техническом задании.`}/>
                  </label>
                </div>
              </li>
              <li className="checklist__item">
                <div className="checklist__inner">
                  <div className="checklist__controls">
                    <button className="checklist__control checklist__control--edit" aria-label="Редактировать"></button>
                    <button className="checklist__control checklist__control--delete" aria-label="Удалить"></button>
                  </div>
                  <label className="checklist__box">
                    <input type="checkbox" name="check-4" className="checklist__checkbox visually-hidden"/>
                    <span className="checklist__check-box"></span>
                    <span className="checklist__name">Единообразное написание и форматирование кода в HTML, файлах CSS-препроцессора и
                    JavaScript (включая файлы автоматизации).
                  </span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="checklist__container">
            <h3 className="checklist__subtitle subtitle subtitle--ready">Готово</h3>
            <ul className="checklist__list">
              <li className="checklist__item checklist__item--complete">
                <div className="checklist__inner checklist__inner--complete">
                  <div className="checklist__controls">
                    <button className="checklist__control checklist__control--edit" aria-label="Редактировать"></button>
                    <button className="checklist__control checklist__control--delete" aria-label="Удалить"></button>
                  </div>
                  <label className="checklist__box">
                    <input type="checkbox" name="check-5" className="checklist__checkbox visually-hidden"
                           defaultChecked/>
                    <span className="checklist__check-box"></span>
                    <span className="checklist__name">Документ проходит проверку на валидность https://validator.w3.org/nu/</span>
                  </label>
                </div>
              </li>
              <li className="checklist__item checklist__item--complite">
                <div className="checklist__inner checklist__inner--complite">
                  <div className="checklist__controls">
                    <button className="checklist__control checklist__control--edit" aria-label="Редактировать"></button>
                    <button className="checklist__control checklist__control--delete" aria-label="Удалить"></button>
                  </div>
                  <label className="checklist__box">
                    <input type="checkbox" name="check-6" className="checklist__checkbox visually-hidden"
                           defaultChecked/>
                    <span className="checklist__check-box"></span>
                    <span className="checklist__name">В разметке есть правильный вьюпорт тег
                    <code>{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}</code></span>
                  </label>
                </div>
              </li>
              <li className="checklist__item checklist__item--complete">
                <div className="checklist__inner checklist__inner--complete">
                  <div className="checklist__controls">
                    <button className="checklist__control checklist__control--edit" aria-label="Редактировать"></button>
                    <button className="checklist__control checklist__control--delete" aria-label="Удалить"></button>
                  </div>
                  <label className="checklist__box">
                    <input type="checkbox" name="check-7" className="checklist__checkbox visually-hidden"
                           defaultChecked/>
                    <span className="checklist__check-box"></span>
                    <span className="checklist__name">Для блока, у которого есть фоновое изображение, прописан фоновый цвет, который соответствует
                    преобладающему...
                  </span>
                  </label>
                  <button className="checklist__show-button" aria-label="Показать весь текст"></button>
                </div>
              </li>
              <li className="checklist__item checklist__item--complete">
                <div className="checklist__inner checklist__inner--complete">
                  <div className="checklist__controls">
                    <button className="checklist__control checklist__control--edit" aria-label="Редактировать"></button>
                    <button className="checklist__control checklist__control--delete" aria-label="Удалить"></button>
                  </div>
                  <label className="checklist__box">
                    <input type="checkbox" name="check-8" className="checklist__checkbox visually-hidden"
                           defaultChecked/>
                    <span className="checklist__check-box"></span>
                    <span className="checklist__name">Критическая функциональность сайта работоспособна без JavaScript (использовано прогрессивное
                    улучшение).
                  </span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default MainPage;
