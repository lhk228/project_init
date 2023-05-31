import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage = typeof window !== "undefined" ? window.sessionStorage : undefined;
const { persistAtom } = recoilPersist({ key: "WINDETECT", storage: sessionStorage });

// 유저 State
const userState = atom({
  key: "userState",
  default: { user_id: null, user_nm: null, auth: null, login: false },
  effects_UNSTABLE: [persistAtom],
});

// toastAlert state
const alertState = atom({
  key: "alertState",
  default: { show: false, type: "ok", msg: "", delay: 2000, openClass: "" },
});

// loading state
const loadingState = atom({
  key: "loadingState",
  default: "hide",
});


export { userState, alertState, loadingState };
