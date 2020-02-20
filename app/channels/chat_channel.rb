class ChatChannel < ApplicationCable::Channel
  def subscribed
    @chat_channel = Channel.find(params[:id])
    stream_for @chat_channel
    # stream_for 'chat_channel'
  end

  def speak(data)
    puts 'here is the channel id'
    puts params[:id]

    message = @chat_channel.messages.new(body: data['message']);
    message.author_id = current_user.id


    if message.save!
      socket = { message: message.body }
      ChatChannel.broadcast_to(@chat_channel, socket)
    end

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
