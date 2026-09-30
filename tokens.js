// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1544468726911602818",
        serverId: "1359463832812261547",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "dnd",
        },
        selfMute: true,
    },
];
