const fs = require("fs");
let albumData = fs.readFileSync('./albumsData.json');
albumData = JSON.parse(albumData);

function getAlbums(albumID){
    for(let album of albumData["albums"]){
        if (albumID == album.id){
            return `${album.title} by ${album.artist}`;
        }
    }
    return "no album found";
}

function getAlbumJSON(albumID){
    for(let album of albumData["albums"]){
        if (albumID == album.id){
            return album;
        }
    }
    return {};
}

function getSongsForAlbum(albumID,songID){
    for(let album of albumData["albums"]){
        if (albumID == album.id){
            for (let song of album.songs){
                if (songID == song.id){
                    return `${song.title}, off the album ${album.title} by ${album.artist}`;
                }
            }
        }
    }
    return "Song not found!";
}

function getSongJSON(albumID,songID){
    for(let album of albumData["albums"]){
        if (albumID == album.id){
            for (let song of album.songs){
                if (songID == song.id){
                    return song;
                }
            }
        }
    }
    return {};
}

function getAllSongs(albumID){
    for(let album of albumData["albums"]){
        if (albumID == album.id){
            let songString = `Songs from the album ${album.title} by ${album.artist}:` + "<br><ul>";
            for (let song of album.songs){
                songString += "<li>" + song.title;
            }
            songString += "</ul>"
            return songString;
        }
    }
    return "no album found";
}

module.exports = {
    getAlbums,
    getSongsForAlbum,
    getAllSongs,
    getAlbumJSON,
    getSongJSON
};