class ChatChannel < ApplicationCable::Channel
  def subscribed
    @chat_channel = Channel.find(params[:id])
    stream_for @chat_channel
    # stream_for 'chat_channel'
  end

  def speak(data)
    # remove hardcodededness
    message = Message.create(body: data['message'], channel_id: 1, author_id: 1)
    socket = { message: message.body }

    ChatChannel.broadcast_to(@chat_channel, socket)


    # ChatChannel.broadcast_to('chat_channel', socket)
  end
  
  def unsubscribed; end
end

  # def subscribed
  #   @channel = Channel.find_by(id: params[:channelId])
  #   stream_for 'chat_channel'
  # end

  # def speak(data)
  #   message = Message.create(
  #     body: data['message'],
  #     channel_id: params[:channelId],
  #     author_id: params[:currentUserId])
  #   socket = { message: message.body }
  #   ChatChannel.broadcast_to('chat_channel', socket)
  # end
  
  # def unsubscribed; end
