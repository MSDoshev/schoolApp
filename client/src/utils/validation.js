export const formValidationUtil = {
    fullName: {
      minLength: 2,
      maxLength: 20,
      errorMessage: 'Full name should be between 2 and 30 characters'
    },
    email: {
        validate: (value) => {
          const regex = /^[A-Za-z0-9_.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/;
          return regex.test(value);
        },
        errorMessage: 'Email is not valid!'
    },
    imageUrl: {
      validate: (value) => {
        const regex = /^https?:\/\/.+/;
        return regex.test(value);
      },
      errorMessage: 'ImageUrl is not valid!'
    },
    password:{
      minLength: 8,
      errorMessage: 'Password should be at least 8 characters long!'
    },
    age: {
      min: 1,
      errorMessage: 'Age number should be a positive number!'
    },
    score: {
      min: 1,
      max: 6,
      errorMessage: 'Average score should be between 1 and 6!'
    },
    grade: {
      min: 1,
      max: 11,
      errorMessage: 'Grade should be between 1 and 12!'
    },
   
  };
  

  


