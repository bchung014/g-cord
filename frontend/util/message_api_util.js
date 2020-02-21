export const fetchMessages = channel => (
    $.ajax({
        url: `/api/servers/${channel.server_id}/channels/${channel.id}/messages`,
    })
);