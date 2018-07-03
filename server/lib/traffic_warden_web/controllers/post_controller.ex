defmodule TrafficWardenWeb.PostController do
  use TrafficWardenWeb, :controller

  alias TrafficWardenWeb.{Post, User}

  def get_previous(conn, _params) do
      posts = Repo.all(Post)
      render(conn, "post.json", posts: posts)
  end

end
