defmodule TrafficWardenWeb.PostController do
  use TrafficWardenWeb, :controller
  alias TrafficWardenWeb.{Post, User}
  import Ecto.Query, only: [limit: 2, order_by: 2]

  def get_previous(conn, _params) do
      posts = Post
              |>limit(20)
              |>order_by([desc: :id])
              |>Repo.all
      render(conn, "posts.json", posts: posts)
  end

end
