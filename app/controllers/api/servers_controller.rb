class Api::ServersController < ApplicationController
  def index
    @servers = current_user.servers
  end

  def show
    @server = Server.find_by(id: params[:id])

    if @server
      render :show
    else
      render json: ['Server does not exist'], status: 404
    end
  end

  def create
    @server = current_user.admined_servers.new(server_params)

    if @server.save
      current_user.servers << @server
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = current_user.admined_servers.find_by(id: params[:id])

    if @server && server_params[:name] != @server.name
      if @server.update(server_params)
        render :show
      else
        render json: @server.errors.full_messages, status: 422
      end
    elsif @server
      render json: ['Name cannot be the same'], status: 400
    else
      render json: ['Server does not exist'], status: 404
    end
  end

  def destroy
    @server = current_user.admined_servers.find_by(id: params[:id])

    if @server
      @server.destroy
      render :show
    else
      render json: ['Unable to delete server'], status: 400
    end
  end
  
  def join
    @server = Server.find_by(invite_code: params[:inviteCode])

    if @server && !current_user.servers.include?(@server)
      current_user.servers << @server
      render :show
    elsif @server
      render json: ['Already a member of that server.'], status: 400
    else
      render json: ['This invite is invalid or has expired.'], status: 404
    end
  end

  def leave
    @server = current_user.servers.find_by(id: params[:id])

    if @server
      @server.members.delete(current_user)
      render :show
    else
      render json: ['Unable to leave server'], status: 400
    end
  end


  private

  def server_params
    params.require(:server).permit(:name)
  end

end