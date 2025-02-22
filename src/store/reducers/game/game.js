export const SET_IS_LOADING_GAME = "SET_IS_LOADING_GAME";
export const SET_JOIN_THE_GAME = "JOIN_THE_GAME";
export const SET_IS_ACTIVE_MENU = "SET_IS_ACTIVE_MENU";
export const CLEARE_DATA_GAME = "CLEARE_DATA_GAME";
export const SET_IS_ACTIVE_PAGE = "SET_IS_ACTIVE_PAGE";
export const SET_IS_DATA_GAME = "SET_IS_DATA_GAME";

const initialState = {
  gameYouHaveJoined: { urlGame: "", nameGame: "", joinTheGame: false },
  isActivePage: false,
  isLoaderPage: false,
  joinTheGame: false,
  gameId: null,
  driving: { user_id: null, user_name: "" },
  stories: [],
  answers: {},
  nameGame: "",
  urlGame: "",
  game: { historyPoll: {}, idPlayersResponded: [], poll: false },
  historyNumber: 0,
  onlineUsers: [],
  statusChange: false,
  flipСardsAutomatically: false,
  isActiveMenu: false,
  fibonacci: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, "pass"],
};

export const gameReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_GAME:
      return { ...state, ...action.payload };

    case SET_IS_ACTIVE_MENU:
      return { ...state, isActiveMenu: action.payload };

    case SET_IS_ACTIVE_PAGE:
      return { ...state, isActivePage: action.payload };

    case SET_JOIN_THE_GAME:
      const { answers, joinTheGame, stories, onlineUsers, game } = action.payload;
      return {
        ...state,
        answers,
        joinTheGame,
        stories,
        onlineUsers,
        gameId: game.id,
        driving: game.driving,
        nameGame: game.name_game,
        urlGame: game.url,
        game: {
          historyPoll: game.history_poll,
          idPlayersResponded: game.id_players_answers,
          poll: game.poll,
        },
        statusChange: game.statusChange,
        flipСardsAutomatically: game.flipСardsAutomatically,
      };

    case SET_IS_DATA_GAME:
      return { ...state, ...action.payload };

    case CLEARE_DATA_GAME:
      return { ...initialState };

    default:
      return state;
  }
};
