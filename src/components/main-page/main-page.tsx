import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Top from "../top/top";
import Complete from "../complete/complete";
import List from "../list/list";
import {ListType} from "../../constants/constants";
import {useAppSelector} from "../../hooks";

function MainPage(): JSX.Element {
  const {cards} = useAppSelector(({data}) => data);
  const completeCards = cards.filter((card) => card.isComplete);
  const processCards = cards.filter((card) => !card.isComplete);

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
