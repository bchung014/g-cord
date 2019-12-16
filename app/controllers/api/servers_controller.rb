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
    debugger;
    current_user.servers.find_by(id: params[:id]).destroy

  end

  def destroy
    debugger;
  end

  private

  def server_params
    params.require(:server).permit(:name)
  end

end