import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Top from "../top/top";
import {ListType} from "../../constants/constants";
import List from "../list/list";
import {useAppSelector} from "../../hooks";
import Complete from "../complete/complete";
import {selectCompleteCards, selectNotCompleteCards} from "../../store/selectors/selectors";

function MainPage(): JSX.Element {
  const {cards} = useAppSelector((state) => state.data);
  const completeCards = useAppSelector(selectCompleteCards);
  const processCards = useAppSelector(selectNotCompleteCards);

  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Top />
        <h1 className="visually-hidden">Чек-лист</h1>
        <section className="main__checklist checklist">
          <h2 className="checklist__title visually-hidden">Проект: maffin.pw</h2>
          {cards && !processCards.length ? <Complete /> : ``}
          <List type={ListType.PROCESS} cards={processCards} />
          <List type={ListType.COMPLETE} cards={completeCards} />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default MainPage;
