var dataModule = (function () {


    let TVshows = {
        shows: [],
        limit: 50
    }


    
    class Show {

        constructor(name, image, id, summary) {
            this.name = name;
            this.image = image;
            this.id = id;
            this.summary = summary;
            // this.seasons = seasons;
            // this.casts = casts;
            
        }

        getName() {
            return name;
        }
    }



    class Cast {

        constructor() {
            this.name = name
        }
    }

    class Season {

        constructor() {
            this.startDate = startDate;
            this.endDate = endDate;
        }
    }


    return {
        TVshows: TVshows,
        Show: Show,
        Cast: Cast,
        Season: Season
    }

})();