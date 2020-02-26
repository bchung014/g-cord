export const fetchMessages = (serverId, channelId) => (
    $.ajax({
        url: `/api/servers/${serverId}/channels/${channelId}/messages`,
    })
);