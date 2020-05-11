let initialState = {
    SocialNetwork: {
        Name: 'KirinUndod',
        Version: 'Unit V2.3'
    },
    QuickAccess: {
        Puncts: [
            { id: 1, image: '../../All_Icons/Vectorhome.png', url: 'lok/home', name: 'Home' },
            { id: 2, image: '../../All_Icons/Vectorhome.png', url: 'lok/main', name: 'Main' },
            { id: 3, image: '../../All_Icons/Vectorhome.png', url: 'lok/message', name: 'Message' },
            { id: 4, image: '../../All_Icons/Vectorhome.png', url: 'lok/users', name: 'Users' }
        ]
    },
    MediaMenu: {
        Puncts: [
            { id: 1, image: '../../All_Icons/Vectorhome.png', url: 'lok/main/news', name: 'News' },
            { id: 2, image: '../../All_Icons/Vectorhome.png', url: 'lok/main/photo', name: 'Photo' },
            { id: 3, image: '../../All_Icons/Vectorhome.png', url: 'lok/main/video', name: 'Video' }
        ]
    },
    MessageType: {
        Puncts: [
            { id: 1, image: '../../All_Icons/Vectorhome.png', url: 'lok/message/allmessage', name: 'All Message' },
            { id: 2, image: '../../All_Icons/Vectorhome.png', url: 'lok/message/unread', name: 'Unread' },
            { id: 3, image: '../../All_Icons/Vectorhome.png', url: 'lok/message/important', name: 'Important' }
        ]
    },
    UsersType: {
        Puncts: [
            { id: 1, image: '../../All_Icons/Vectorhome.png', url: 'lok/users/allUsers', name: 'All Users' },
            { id: 2, image: '../../All_Icons/Vectorhome.png', url: 'lok/users/Users', name: 'Users' },
            { id: 3, image: '../../All_Icons/Vectorhome.png', url: 'lok/users/Friend', name: 'Friend' }
        ]
    },
    //user chat
    MessagesBlock: {
        UserDialogBlock: [
            { id: 1, image: '', url: '/lok/message/1', name: 'Hentai', lastMessage: '--', lastMsgTime: '12:00' }
        ]
    }
};

const PropsReducer = (state = initialState, action) => {
    return state;
}

export default PropsReducer;