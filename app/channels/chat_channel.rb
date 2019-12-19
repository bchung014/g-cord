class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end

  def speak(data)
    # remove hardcodededness
    message = Message.create(body: data['message'], channel_id: 1, author_id: 1)
    socket = { message: message.body }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  
  def unsubscribed; end
end
