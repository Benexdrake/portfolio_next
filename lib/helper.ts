

export const getStars = (stars: number) => {
    const star = '★';
    const noStar = '☆';

    let allStars = '';

    for (let i = 0; i < stars; i++) {
        allStars += star;
    }
    for (let i = stars; i < 5; i++) {
        allStars += noStar;
    }
    return allStars;
}

export const getIcon = (icon: string) => {
    return `/assets/icons/${icon}`
}

  export const getImage = (language:string) =>
  {
   if(language)
   {
     if(language.includes('C#'))
     return '/assets/CSharp.png';
     else if(language.includes('TypeScript') || language.includes('HTML') || language.includes('CSS'))
     return '/assets/Typescript.png';
   }
   return '';
  }

  export const getColor =(type:string) =>
  {
     if(type === 'bug')
       return '#1c4b27';
     else if(type === 'dark')
       return '#5a5979';
     else if(type === 'dragon')
       return '#61cad9';
     else if(type === 'electric')
       return '#e3e32b';
     else if(type === 'fairy')
       return '#ea1369';
     else if(type === 'fighting')
       return '#ef6138';
     else if(type === 'fire')
       return '#fd4c5a';
     else if(type === 'flying')
       return '#93b2c7';
     else if(type === 'ghost')
       return '#906790';
     else if(type === 'grass')
       return '#27cb4f';
     else if(type === 'ground')
       return '#a9702c';
     else if(type === 'ice')
       return '#d7f0fc';
     else if(type === 'normal')
       return '#ca98a7';
     else if(type === 'poison')
       return '#9b69d9';
     else if(type === 'psychic')
       return '#f81c91';
     else if(type === 'rock')
       return '#8b3e21';
     else if(type === 'steel')
       return '#42bd94';
     else if(type === 'water')
       return '#86a8fc';
     else
       return 'orange';
  }

  export const getGender = (genders:string[])=>
  {
   if(genders.includes("male") && genders.includes("female"))
   {
     return "♀ / ♂";
   }
   else if(genders.includes("female"))
   {
     return "♀";
   }
   else if(genders.includes("male"))
   {
     return "♂";
   }
     return "Unkown";
  }