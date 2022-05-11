import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Top from "../top/top";
import {selectCompliteCards, selectNotCompliteCards} from "../../store/selectors/selectors";
import {ListType} from "../../constants/constants";
import List from "../list/list";
import {useAppSelector} from "../../hooks";
import Complete from "../complete/complete";

function MainPage(): JSX.Element {
  const {cards} = useAppSelector((state) => state.data);
  const completeCards = useAppSelector(selectCompliteCards);
  const processCards = useAppSelector(selectNotCompliteCards);

  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Top />
        <h1 className="visually-hidden">Чек-лист</h1>
        <section className="main__checklist checklist">
          <h2 className="checklist__title visually-hidden">Проект: maffin.pw</h2>
          {cards && !completeCards.length ? <Complete /> : ``}
          <List type={ListType.PROCESS} cards={processCards} />
          <List type={ListType.COMPLETE} cards={completeCards} />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default MainPage;
