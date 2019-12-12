class Api::ServersController < ApplicationController
  def show
    @server = Server.find_by(id: params[:id])

    if @server
      render :show
    else
      render json: ['Server does not exist'], status: 404
    end
  end

  def create
    @server = Server.new(server_params)
    # @server.admin_id = current_user.id
    @server.admin_id = 2

    if @server.save
      render :show
    else
      render json @server.errors.full_messages, status: 422
    end
  end

  def destroy
    debugger;

    
  end

  private

  def server_params
    params.require(:server).permit(:name)
  end

end