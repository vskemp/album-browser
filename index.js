
const http = require('http');
const express = require("express");
const album = require("./albums");

const app = express();
const server = http.createServer(app);
const PORT = "3000";

app.get('/', (req, res)=>{
    res.send("Hewwo");
});

app.get("/albums", (req, res) => {
    for (let album of albums.getAlbums()) {
        // console.log(album.title);

        res.write(`
        <p>
            <a href="/albums/${album.id}">
                ${album.title}
            </a>
        </p>
        `);
    }
    res.end();
});

app.get('/album/:albumID', (req, res) =>{
    const albumID = req.params.albumID;
    res.send(album.getAlbums(albumID));

});

app.get('/album/:albumID/song', (req, res) =>{
    const albumID = req.params.albumID;
    res.send(album.getAllSongs(albumID));
});

app.get('/album/:albumID/song/:songID', (req, res) =>{
    const albumID = req.params.albumID;
    const songID = req.params.songID;
    res.send(album.getSongsForAlbum(albumID,songID));
});

app.get('/API/album/:albumID', (req, res) =>{
    const albumID = req.params.albumID;
    res.json(album.getAlbumJSON(albumID));
});

app.get('/API/album/:albumID/song/:songID', (req, res) =>{
    const albumID = req.params.albumID;
    const songID = req.params.songID;
    res.json(album.getSongJSON(albumID,songID));
});

server.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}!`);
});