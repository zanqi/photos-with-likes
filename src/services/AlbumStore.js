
function AlbumStore() {
    this.photos = {};
    this.currentId = 1;
    this.insertTestData();
}

AlbumStore.prototype.add = function (photo) {
    this.photos[this.currentId] = photo;
    photo.id = this.currentId;
    this.currentId++;
}

AlbumStore.prototype.get = function (id) {
    return this.photos[id];
}

AlbumStore.prototype.remove = function (id) {
    delete this.photos[id];
}

AlbumStore.prototype.find = function (term) {
    const result = [];
    Object.keys(this.photos).forEach((key) => {
        const val = this.photos[key];
        if (val.description !== undefined && val.description.includes(term)) {
            result.push(val);
        }
    });
    return result;
}

AlbumStore.prototype.edit = function (photo) {
    if (photo === undefined || photo.id === undefined || photo.url === undefined) {
        return false;
    }
    if (!(photo.id in this.photos)) {
        return false;
    }
    this.photos[photo.id] = photo;
    return true;
}

AlbumStore.prototype.insertTestData = function () {
    const testPhotos = [
        { id: 1, description: 'My Cat', likes: 100, url: 'http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg' },
        { id: 2, description: 'My Dog', likes: 10, url: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi' },
        { id: 3, description: 'My House', likes: 4, url: 'http://tinyhousetalk.com/wp-content/uploads/1020sf-small-house-with-garage-newport-lane-house-by-lanefab-001-600x397.jpg' },
        { id: 4, description: 'My Cat', likes: 100, url: 'http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg' }
    ];
    testPhotos.forEach(p => {
        this.add(p);
    })
}

export default AlbumStore;