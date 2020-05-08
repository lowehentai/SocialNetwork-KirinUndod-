let initialState = {
    SocialNetwork: {
        Name: 'KirinUndod',
        Version: 'Unit V2.2'
    },
    QuickAccess: {
        Puncts: [
            { id: 1, image: '../../All_Icons/Vectorhome.png', url: 'lok/home', name: 'Home' },
            { id: 2, image: '../../All_Icons/Vectorhome.png', url: 'lok/main', name: 'Main' },
            { id: 3, image: '../../All_Icons/Vectorhome.png', url: 'lok/message', name: 'Message' },
            { id: 4, image: '../../All_Icons/Vectorhome.png', url: 'lok/friend', name: 'Friend' }
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
    //user chat
    MessagesBlock: {
        UserDialogBlock: [
            { id: 1, image: '', url: '/lok/message/1', name: 'Hentai', lastMessage: '--', lastMsgTime: '12:00' },
            { id: 2, image: '', url: '/lok/message/2', name: 'Ecchi', lastMessage: '--', lastMsgTime: '12:00' },
            { id: 3, image: '', url: '/lok/message/3', name: 'Vladimir', lastMessage: '--', lastMsgTime: '12:00' },
            { id: 4, image: '', url: '/lok/message/4', name: 'Undod', lastMessage: '--', lastMsgTime: '12:00' },
            { id: 5, image: '', url: '/lok/message/5', name: 'NoN', lastMessage: '--', lastMsgTime: '12:00' },
            { id: 6, image: '', url: '/lok/message/6', name: 'Skritiy', lastMessage: '--', lastMsgTime: '12:00' }
        ]
    }
};

const PropsReducer = (state = initialState, action) => {
    return state;
}

export default PropsReducer;