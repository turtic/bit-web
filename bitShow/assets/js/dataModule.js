var dataModule = (function () {


    class TVshows {

        constructor() {
            this.shows = [];
            this.limit = 50;
        }
    }


    class Show {

        constructor(name, image, id, ) {
            this.name = name;
            this.image = image;
            this.id = id;
            this.seasons = seasons;
            this.casts = casts;
            this.details = details;
        }

        getName(){
            return name;
        }
    }

    const req = $get(url);
    let tvShows = [];

    req.done(function(data){
        data.forEach(currentShow => {

            const show = new Show(currentShow.name, currentShow.image.medium);
            tvShows.push(show);
            
        });

        

    });

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
        Movie: Movie,
        Cast: Cast,
        Season: Season
    }

})();