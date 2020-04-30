let initialState = {
    QuickAccess: {
        Puncts: [
            { id: 1, image: '../../All_Icons/Vectorhome.png', url: 'home', name: 'Home' },
            { id: 2, image: '../../All_Icons/Vectorhome.png', url: 'main', name: 'Main' },
            { id: 3, image: '../../All_Icons/Vectorhome.png', url: 'message', name: 'Message' },
            { id: 4, image: '../../All_Icons/Vectorhome.png', url: 'friend', name: 'Friend' }
        ]
    },
    MediaMenu: {
        Puncts: [
            { id: 1, image: '../../All_Icons/Vectorhome.png', url: 'main/news', name: 'News' },
            { id: 2, image: '../../All_Icons/Vectorhome.png', url: 'main/photo', name: 'Photo' },
            { id: 3, image: '../../All_Icons/Vectorhome.png', url: 'main/video', name: 'Video' }
        ]
    },
    MessageType: {
        Puncts: [
            { id: 1, image: '../../All_Icons/Vectorhome.png', url: 'message/allmessage', name: 'All Message' },
            { id: 2, image: '../../All_Icons/Vectorhome.png', url: 'message/unread', name: 'Unread' },
            { id: 3, image: '../../All_Icons/Vectorhome.png', url: 'message/important', name: 'Important' }
        ]
    },
    //user chat
    MessagesBlock: {
        UserDialogBlock: [
            { id: 1, image: '', url: '/message/1', name: 'Hentai', lastMessage: '--', lastMsgTime: '12:00' },
            { id: 2, image: '', url: '/message/2', name: 'Ecchi', lastMessage: '--', lastMsgTime: '12:00' },
            { id: 3, image: '', url: '/message/3', name: 'Vladimir', lastMessage: '--', lastMsgTime: '12:00' },
            { id: 4, image: '', url: '/message/4', name: 'Undod', lastMessage: '--', lastMsgTime: '12:00' },
            { id: 5, image: '', url: '/message/5', name: 'NoN', lastMessage: '--', lastMsgTime: '12:00' },
            { id: 6, image: '', url: '/message/6', name: 'Skritiy', lastMessage: '--', lastMsgTime: '12:00' }
        ]
    }
};

const PropsReducer = (state = initialState, action) => {
    return state;
}

export default PropsReducer;