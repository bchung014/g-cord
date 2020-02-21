class Api::MessagesController < ApplicationController
    def index
        @messages = Message.where(channel_id: params[:channel_id])
    end

end
