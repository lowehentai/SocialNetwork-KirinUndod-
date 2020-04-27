let store = {
    _state: {
        Dat_Users: {
            Dat_Information: [
                { id: 1, name: 'Hentai Hentaiovic', status: 'Tester', extraStatus: '', avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp&usqp=CAU' }
            ],
            TestingU: ''
        },
        Dat_QuickAccess: {
            Dat_Button: [
                { id: 1, image: '../../All_Icons/Vectorhome.png', url: 'home', name: 'Home' },
                { id: 2, image: '../../All_Icons/Vectorhome.png', url: 'main', name: 'Main' },
                { id: 3, image: '../../All_Icons/Vectorhome.png', url: 'message', name: 'Message' },
                { id: 4, image: '../../All_Icons/Vectorhome.png', url: 'friend', name: 'Friend' }
            ]
        },
        Dat_MediaMenu: {
            Dat_Button: [
                { id: 1, image: '../../All_Icons/Vectorhome.png', url: 'main/news', name: 'News' },
                { id: 2, image: '../../All_Icons/Vectorhome.png', url: 'main/photo', name: 'Photo' },
                { id: 3, image: '../../All_Icons/Vectorhome.png', url: 'main/video', name: 'Video' }
            ],
            Dat_UsersInfo: [
                { id: 1, Time: '12:00', avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS74_Vu6drYZHR24vv1UN4ueMtn2_d3wYXqBa2TO10p4wKAKPRy&usqp=CAU', like: 192, message: 51, name: 'Hentai is good !', descr: 'Hentai <3!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKvJ4WBzDoGvdtRkIGUyde9fC0DTcIDMQ2RlOm5YUqM3Vr8ojX&usqp=CAU' }
                // { id: 2, Time: '12:00', avatarImg: 'NoN', like: 112, message: 55, name: 'Hentai 2', descr: 'Hentai \"Amanee!\" the best !', image: '' },
                // { id: 3, Time: '12:00', avatarImg: 'NoN', like: 152, message: 58, name: 'Hentai 3', descr: 'Hey !', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZBULcIKT4DgTHbWetD2UYlH-QZZ8NVrFH1KwiZwTZLg_zaa2m&usqp=CAU' },
                // { id: 4, Time: '12:00', avatarImg: 'NoN', like: 172, message: 54, name: 'Hentai 4', descr: 'Hi World !', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS74_Vu6drYZHR24vv1UN4ueMtn2_d3wYXqBa2TO10p4wKAKPRy&usqp=CAU' },
                // { id: 5, Time: '12:00', avatarImg: 'NoN', like: 92, message: 85, name: 'Hentai 5', descr: 'Comment Testing !', image: '' },
                // { id: 6, Time: '12:00', avatarImg: 'NoN', like: 62, message: 53, name: 'Hentai 6', descr: 'oh ya !', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiKxD7WkZCz5G9nZBHgMSxEkLfJqah2EW3SNizKCZaBB99bqQV&usqp=CAU' }
            ]
        },
        Dat_Message: {
            Dat_MessageType: [
                { id: 1, image: '../../All_Icons/Vectorhome.png', url: 'message/allmessage', name: 'All Message' },
                { id: 2, image: '../../All_Icons/Vectorhome.png', url: 'message/unread', name: 'Unread' },
                { id: 3, image: '../../All_Icons/Vectorhome.png', url: 'message/important', name: 'Important' }
            ]
        },
        //user chat
        MessagesBlock: {
            Users: [
                { id: 1, image: '', url: '', name: 'Hentai' },
                { id: 2, image: '', url: '', name: 'Ecchi' },
                { id: 3, image: '', url: '', name: 'Vladimir' },
                { id: 4, image: '', url: '', name: 'Undod' },
                { id: 5, image: '', url: '', name: 'NoN' },
                { id: 6, image: '', url: '', name: 'Skritiy' }
            ]
        }
    },
    getState() {
        return this._state;
    },
    _ReRender() {
        //import the updateNewPostText
    },
    addTime() {
        let dat = new Date(),
            myHours = dat.getHours(),
            myMinutes = dat.getMinutes(),
            timeSet;
        if (myHours <= 9) {
            myHours = '0' + myHours;
        } if (myMinutes <= 9) {
            myMinutes = '0' + myMinutes;
        }
        timeSet = myHours + ':' + myMinutes;
        return timeSet;
    },
    addPost() {
        let newPost = {
            id: 7,
            Time: this.addTime(),
            avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp&usqp=CAU',
            like: 0,
            message: 0,
            name: this._state.Dat_Users.Dat_Information.map(element => [element.name]),
            descr: this._state.Dat_Users.TestingU,
            image: ''
        };
        this._state.Dat_MediaMenu.Dat_UsersInfo.push(newPost);
        this._ReRender(this._state);
        this._state.Dat_Users.TestingU = '';
    },

    updateNewPostText(newText) {
        this._state.Dat_Users.TestingU = newText;
        this._ReRender(this._state);
    },

    subscribe(observer) {
        this._ReRender = observer;
    }
}





window.store = store;
export default store;

//shotre - OOP