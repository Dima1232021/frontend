import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FormPlayerCards from "./FormPlayerCards";
import FormStory from "./FormStory";
import FormUsers from "./FormUsers";
import FormMenu from "./FormMenu/FormMenu.jsx";

import "./form.scss";

export default function Form({ active }) {
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const userid = useSelector((state) => state.user.userid);

  return (
    <div className={`game__form form ${active && "active"}`}>
      <div className="form__row">
        <div className="form__header ">
          <h2 className="form__name-game">{game.name_game}</h2>
          <p className="form__driving">
            <b>Driving:</b>
            {game.driving.user_name}
          </p>
        </div>
      </div>

      {game.driving.user_id === userid && (
        <div className="form__row">
          <FormMenu />
        </div>
      )}

      <div className="form__row">
        <FormStory />
      </div>

      <div className="form__row">
        <FormUsers />
      </div>

      <div className="form__row">
        <FormPlayerCards />
      </div>
    </div>
  );
}
