class ChatChannel < ApplicationCable::Channel
  def subscribed
    @channel = Channel.find_by(id: params[:channelId])
    stream_for 'chat_channel'
  end

  def speak(data)
    message = Message.create(
      body: data['message'],
      channel_id: params[:channelId],
      author_id: params[:currentUserId])
    socket = { message: message.body }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  
  def unsubscribed; end
end
