export const getDaysInMonth = () => {

    const daysNumber = 33 - new Date(new Date().getFullYear(), new Date().getMonth(), 33).getDate();
    const daysArr = [];

    for (let i = 1; i <= daysNumber; i++) {
      let dayOfWeek = new Date(new Date().getFullYear(), new Date().getMonth(), i).getDay();
      let dayObj = {
        dayOfWeek: dayOfWeek === 0 ? 7 : dayOfWeek,
        dayOfMonth: i,
      };
      daysArr.push(dayObj);
    }
    return daysArr;
  }