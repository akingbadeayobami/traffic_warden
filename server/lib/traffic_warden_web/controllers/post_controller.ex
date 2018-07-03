defmodule TrafficWardenWeb.PostController do
  use TrafficWardenWeb, :controller

  alias TrafficWardenWeb.{Post}

  def get_previous(conn, _params) do
      todos = Repo.all(Post)
      render(conn, "index.html", todos: todos)
  end

end
