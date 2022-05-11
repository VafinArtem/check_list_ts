const Top = function (): JSX.Element {
  return (
    <header className="main__top top">
      <h2 className="visually-hidden">Фильтры</h2>
      <section className="top__filters filters">
        <form className="filters__form">
          <div className="item__select select">
            <h3 className="select__title">Выберите проект:</h3>
            <div className="select__wrapper">
              <div className="select__inner">
                <p className="select__input" aria-label="Выберите проект" tabIndex={0}>По умолчанию</p>
                <ul className="select__list">
                  <li className="select__item select__item--active" tabIndex={0} data-value="по умолчанию">
                    По умолчанию
                  </li>
                  <li className="select__item" tabIndex={0} data-value="maffin.pw">
                    maffin.pw
                  </li>
                  <li className="select__item" tabIndex={0} data-value="amrita-dent">
                    amrita-dent
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="item__select select">
            <div className="select__wrapper">
              <div className="select__inner">
                <p className="select__input" aria-label="Выберите проект" tabIndex={0}>Категория</p>
                <ul className="select__list">
                  <li className="select__item select__item--active" tabIndex={0} data-value="Категория">
                    Категория
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="item__select select">
            <div className="select__wrapper">
              <div className="select__inner">
                <p className="select__input" aria-label="Выберите проект" tabIndex={0}>Показать все</p>
                <ul className="select__list">
                  <li className="select__item select__item--active" tabIndex={0} data-value="Выполненные">
                    Показать все
                  </li>
                  <li className="select__item" tabIndex={0} data-value="Выполненные">
                    Выполненные
                  </li>
                  <li className="select__item" tabIndex={0} data-value="Выполненные">
                    Не выполненные
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </section>
      <section className="top__add-items add-items">
        <h2 className="visually-hidden">Добавление элементов</h2>
        <div className="add-items__item">
          <button className="add-items__button button button--menu">
            <svg className="button__icon" width="20" height="17">
              <use xlinkHref="img/sprite.svg#icon-add"></use>
            </svg>
            <span className="button__text">Проект</span>
          </button>
          <form action="/" className="add-items__input-box input-box">
            <input type="text" className="input-box__input" name="new_project" placeholder="Новый проект" />
            <button type="submit" className="input-box__confirm" aria-label="Подтвердить"></button>
          </form>
        </div>
        <div className="add-items__item">
          <button className="add-items__button button button--menu">
            <svg className="button__icon" width="20" height="17">
              <use xlinkHref="img/sprite.svg#icon-add"></use>
            </svg>
            <span className="button__text">Категория</span>
          </button>
          <form action="/" className="add-items__input-box input-box input-box--showed">
            <input type="text" className="input-box__input" name="new_category" placeholder="Новая категория" />
            <button type="submit" className="input-box__confirm" aria-label="Подтвердить"></button>
          </form>
        </div>
        <div className="add-items__item">
          <button className="add-items__button button button--menu">
            <svg className="button__icon" width="20" height="17">
              <use xlinkHref="img/sprite.svg#icon-add"></use>
            </svg>
            <span className="button__text">
                Карточка
              </span>
          </button>
        </div>
      </section>
    </header>
  );
};

export default Top;
