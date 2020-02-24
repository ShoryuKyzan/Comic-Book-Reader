// production url, this may be typically baked into configuration instead of here
var BACKEND_URL = 'http://api.comicsite.com';
var developmentMode = false;
var productionMode = true;

// If in development mode, change the backend url
if(window.location.port === '3000')
{
    BACKEND_URL = 'http://api.comicsite.com:8000'
    developmentMode = true;
    productionMode = false;
}

function callJSONMethod(uri, data){
    return fetch(BACKEND_URL + uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if(response.status === 200){
            return response.json();
        }else{
            throw new Error(response.json());
        }
    })
    .catch(reason => {
        throw new Error(reason);
    });
}

function callGETMethod(uri){
    return fetch(BACKEND_URL + uri).then(response => {
        if(response.status === 200){
            return response.json();
        }else{
            throw new Error(response.json());
        }
    })
    .catch(reason => {
        throw new Error(reason);
    });
}

export class Series {
        
    // these are defined as variables so that they can be changed in one place
    static SERIES () { return '/series'}; // cant do this any other way in ES6 right now
    static CHAPTER () { return '/chapters'}; // cant do this any other way in ES6 right now

    static async getByName(name){
        // XXX MOCK
        return {
            id: 1,
            name: 'Lonely Hooves'
        };

        // TODO test below
        return await callGETMethod(Series.SERIES() + '/search/' + name);
    }

    static async chapters(seriesId){
        // XXX MOCK
        return [
            {
                id: 1,
                name: 'Chapter 1',
                image: 'abc'
            },
            {
                id: 2,
                name: 'Chapter 2',
                image: 'abc'
            },
            {
                id: 3,
                name: 'Chapter 3',
                image: 'abc'
            },
            {
                id: 4,
                name: 'Chapter 4',
                image: 'abc'
            },
        ];

        // TODO test below
        return await callGETMethod(Series.PREFIX() + '/' + seriesId + Series.CHAPTER() + '/list');
    }

    static async allPages(seriesId){
        // XXX MOCK
        return [
            {
                id: 1,
                chapterId: 1,
                image: 'images/1.jpg',
                nonChapter: false
            },
            {
                id: 2,
                chapterId: 1,
                image: 'images/2.jpg',
                nonChapter: true
            },
            {
                id: 3,
                chapterId: 2,
                image: 'images/3.jpg',
                nonChapter: false
            }
        ];
        // TODO test below
        return await callGETMethod(Series.PREFIX() + '/' + seriesId + '/pages/list');
    }
}


var Backend = {
    Series
};

export default Backend;