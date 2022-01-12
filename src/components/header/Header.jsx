import React from "react";
import { useSelector } from "react-redux";
import { useActions, useAddErrors } from "../../hooks/index";
import "./header.scss";

export default function Header() {
  const { addError } = useAddErrors();
  const { logoutAction } = useActions();
  const { isAuth, username } = useSelector((state) => state.auth);

  function authLogoUt() {
    logoutAction(addError);
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__row">
          <h1 className="header__title">Planning Poker</h1>
          {isAuth && (
            <div className="header__block">
              <h3 className="header__username">{username}</h3>
              <button onClick={authLogoUt} className="header__btn-log">
                Logo ut
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
