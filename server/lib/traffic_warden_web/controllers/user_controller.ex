defmodule TrafficWardenWeb.UserController do
  use TrafficWardenWeb, :controller

  alias TrafficWardenWeb.{User}

  def new_user(conn, _params) do
    changeset = User.changeset(%User{})
    render(conn, "create.html", changeset: changeset)
  end

end
