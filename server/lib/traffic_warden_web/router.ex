defmodule TrafficWardenWeb.Router do
  use TrafficWardenWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", TrafficWardenWeb do
    pipe_through :api
  end
end
