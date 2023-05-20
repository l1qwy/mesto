export default class UserInfo {
  constructor(userProfilSelectors) {
    this._userName = document.querySelector(userProfilSelectors.userNameSelector)
    this._userJob = document.querySelector(userProfilSelectors.userJobSelector)
  };

  getUserInfo() {
    return {
      nameProfile: this._userName.textContent,
      jobProfile: this._userJob.textContent
    };
  };

  setUserInfo = (userProfileData) => {
    this._userName.textContent = userProfileData.nameProfile,
    this._userJob.textContent = userProfileData.jobProfile
  };
}