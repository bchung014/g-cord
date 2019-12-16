Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :destroy, :join] do
      collection do
        post 'join'
      end

      member do
        delete 'leave'
      end
    end
  end

end
