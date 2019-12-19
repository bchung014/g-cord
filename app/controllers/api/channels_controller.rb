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
    curr_server = Server.find_by(id: params[:server_id])
    @channel = curr_server.channels.find_by(id: params[:id])

    if @channel && channel_params[:name] != @channel.name
      if @channel.update(channel_params)
        render :show
      else
        render json: @channel.errors.full_messages, status: 422
      end
    elsif @channel
      render json: ['Name cannot be the same'], status: 400
    else
      render json: ['Channel does not exist'], status: 404
    end
  end

  def destroy
    curr_server = Server.find_by(id: params[:server_id])
    @channel = curr_server.channels.find_by(id: params[:id])

    if @channel
      @channel.destroy
      render :show
    else
      render json: ['Unable to delete server'], status: 400
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:name)
  end

end