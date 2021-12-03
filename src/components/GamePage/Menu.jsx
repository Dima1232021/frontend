import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { leaveTheGame } from "../../actions/Game";
import MenuBlock from "../menuBlock/MenuBlock";
import UsersBlock from "../usersBlock/UsersBlock";

export default function Menu({ active, setActive }) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  console.log(game);

  const [players, setPlayers] = useState("Гравці");

  function leave() {
    dispatch(leaveTheGame(game));
  }

  function deleteUser(user) {
    console.log(user);
  }

  return (
    <div className="game__menu menu">
      <div className="menu__column">
        <button
          className="menu__btn-active"
          onClick={() => setActive((val) => !val)}
        >
          {active ? ">>" : "<<"}
        </button>
      </div>

      <div className="menu__column">
        <div className="menu__row">
          <h2 className="menu__title">Menu</h2>
          <button onClick={leave} className="menu__btn-leave">
            Вийти
          </button>
        </div>

        <div className="menu__row">
          <div className="menu__invited-users">
            <MenuBlock
              btn1="Гравці"
              btn2="Запросити"
              value={players}
              setValue={setPlayers}
            />
            {players === "Гравці" ? (
              <UsersBlock
                value={game.players}
                keyValue={"user_id"}
                name={"user_name"}
                nameBtn="Видалити"
                setValue={deleteUser}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
