class User {
    constructor(data) {
      this.userId = data.id;
      this.firstName = data.userInfos.firstName;
      this.lastName = data.userInfos.lastName;
      this.age = data.userInfos.age;
      this.score = data.todayScore || data.score;
      this.keyDatas = [
        {
            name: 'Calories',
            quantity: data.keyData.calorieCount,
          },
          {
            name: 'Proteines',
            quantity: data.keyData.proteinCount,
          },
          {
            name: 'Glucides',
            quantity: data.keyData.carbohydrateCount,
          },
          {
            name: 'Lipides',
            quantity: data.keyData.lipidCount,
          }
      ]
    }

  }
  
  export default User;