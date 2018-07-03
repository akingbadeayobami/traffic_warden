defmodule TrafficWardenWeb.Router do
  use TrafficWardenWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug CORSPlug, origin: ["http://localhost:3000"]
  end

  scope "/api", TrafficWardenWeb do
    pipe_through :api
    post "/newuser", UserController, :new_user
    get "/posts", PostController, :get_previous
  end
end
