Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  mount ActionCable.server, at: '/cable'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy] do
      resources :channels, only: [:index, :show, :create, :update, :destroy] do
        resources :messages, only: [:index]
      end


      collection do
        post 'join'
      end

      member do
        delete 'leave'
      end
    end
  end

end
