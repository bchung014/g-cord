class Api::UsersController < ApplicationController
  def index
    @users = Server.find(params[:serverId]).members
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render :show
    else
      render json: ['User does not exist'], status: 404
    end
  end

  def create
    @user = User.new(user_params);

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  
  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end

end