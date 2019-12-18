class Api::ChannelsController < ApplicationController
  # Retrieves all channels for a particular server
  def index
    curr_server = current_user.servers.find_by(id: params[:server_id])
    @channels = curr_server.channels
  end

  # Finds a specific channel within a server
  def show
    curr_server = current_user.servers.find_by(id: params[:server_id])
    @channel = Channel.find_by(id: params[:id])

    if @channel
      render :show
    else
      render json: ['Channel does not exist'], status: 404
    end
  end

  def create
    curr_server = current_user.servers.find_by(id: params[:server_id])
    @channel = curr_server.channels.new(channel_params)
    
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end
  
  def update
    # curr_server = Server.find_by(id: params[:id])
    # @channel = curr_server.find_by()


  end

  def destroy
  end

  private

  def channel_params
    params.require(:channel).permit(:name)
  end

end