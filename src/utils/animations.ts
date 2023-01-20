export const showAnimationFromBottom = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.2, duration: 0.7}
    })
  };


export const showAnimationFromLeft = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.2, duration: 0.3}
    })
  };