const books = [
    {
        name: 'Java',
        author: 'Steve Luis',
        genre: 'Programming',
        year: 2008,
    },
     {
        name: 'Big game',
        author: 'Lolly Pop',
        genre: 'Gambling',
        year: 2016,
    },
     {
        name: 'Ford vs Ferrari',
        author: 'Henry Ford',
        genre: 'Cars',
        year: 1964,
    },
     {
        name: 'How to win 24H Leman',
        author: 'Enzo Ferrari',
        genre: 'Cars',
        year: 1966,
    },
     {
        name: '1600HP car',
        author: 'Horacio Pagani',
        genre: 'Cars',
        year: 2012,
    },
     {
        name: 'C++',
        author: 'Steve Luis',
        genre: 'Programming',
        year: 1987,
    },
     {
        name: 'How to be better than Ferrari',
        author: 'Feruccio Lamborghini',
        genre: 'Cars',
        year: 1974,
    },
     {
        name: 'Space craft',
        author: 'ILon Mask',
        genre: 'Space',
        year: 2018,
    },
     {
        name: 'Food',
        author: 'Cool from Ratatui',
        genre: 'Cooking',
        year: 2003,
    },
     {
        name: 'JavaScript',
        author: 'Steve Luis',
        genre: 'Programming',
        year: 1999,
    },
];

//функция адаптивна под любой массив и любые данные
function getMaxGenre(arr){
    // сoздаем массив строк только из жанров
    let genreArr = arr.map(item => {
         return item.genre;
    });
    genreArr.sort(); // сортируем чтобы одинаковые жанры шли рядом
    let maxGenre;
    let maxCount1 = 1, maxCount2 = 1;
    //в цыкле считаем сколько одинаковых жанров подряд идет больше, какого больше - ту строку и оставляем
    for(let i = 0; i < genreArr.length - 1; i++){
        while(genreArr[i] === genreArr[i+1] && i < genreArr.length - 1) {
            maxCount1++;
            i++;
        }
        if(maxCount1<maxCount2) {
            maxCount1 = 1;
            i++;
        }
        else {
            maxGenre = genreArr[i];
            maxCount2 = maxCount1;
            maxCount1 = 1;
            i++;
        }
    }
    // возвращаем книги жанра, которого больше всех
    return arr.filter(item => {
        return item.genre === maxGenre;
    });
}

function get21Century(arr){
    return arr.filter(item => {return item.year >= 2000})
}
function get20Century(arr){
    return arr.filter(item => {return item.year >= 1900 && item.year < 2000})
}

const genre = getMaxGenre(books);
console.log(`Books with the most widespread genre: ${genre.map(item => {return item.name.toUpperCase()})}`);
const yearFrom2000 = get21Century(books);
console.log(`Books of 21th century: ${yearFrom2000.map(item => {return item.name})}`);
const yearFrom1900 = get20Century(books);
console.log(`Books from 20th century ${yearFrom1900.map(item => {return item.name})}`);