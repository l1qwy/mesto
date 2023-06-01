export default class UserInfo {
  constructor(userProfilSelectors) {
    this._userName = document.querySelector(userProfilSelectors.userName)
    this._userJob = document.querySelector(userProfilSelectors.userJob)
    this._profileAvatar = document.querySelector(userProfilSelectors.userAvatar)
  };

  getUserInfo() {
    return {
      id: this._id,
      nameProfile: this._userName.textContent,
      jobProfile: this._userJob.textContent,
    }
  };

  setUserInfo = ({ avatarProfile, nameProfile, jobProfile }, id) => {{
    this._userName.textContent = nameProfile,
    this._userJob.textContent = jobProfile,
    this._profileAvatar.src = avatarProfile
  } this._id = id}
}