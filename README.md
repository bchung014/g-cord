# g-cord

g-cord is a pixel-perfect clone of Discord with a fun and thematic hip-hop
twist. The technology stack consists of React/Redux for the frontend and
Ruby on Rails/PostgreSQL for the backend.

## Check out the site yourself
https://g-cord.herokuapp.com/

## Technologies and versions
* React - 16.12.0
* Redux - 4.0.4
* Ruby - 2.5.1
* Ruby on Rails - 5.2.4
* PostgreSQL - 12.0

## Features
* User authentication
A user must be logged in to access certain components of the application.
Users who log in will be saved via session tokens such that their
credentials will be preserved until they log out.

* Servers

    Users can create new servers to host channels. The user who creates a 
    given server is automatically added as a member and is deemed the
    server's admin. Admins possess certain priveleges such as editing and
    deleting the server.

    Upon creation, servers are also all given a unique invite code. This
    invite code can be given to other users such that they can join that
    server.

* Channels

    Within each server, users can create text channels to communicate.
    Similar to servers, channels can also be created, edited, and deleted.
    Any member of that server can view all of its channels.

* Chat rooms

    Each channel has an associated chat room that allows for live chat between
    members of the server. This was a particularly interesting component as there
    needed to be a way to listen for new HTTP requests.

```
  def speak(data)
    message = Message.create(body: data['message'])
    socket = { message: message.body }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
```

    Above is a solution that was used so a user's messages could be broadcast to
    the server in realtime. This type of exchange of data was accomplished through
    Rails ActionCable.

## Future features
* Direct messages
* Friending
* Online presence
* N+1 query busting
* AWS hosting for avatar images
* Voice channels
