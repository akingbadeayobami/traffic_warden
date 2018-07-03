defmodule TrafficWardenWeb.PostView do
  use TrafficWardenWeb, :view

  def render("post.json", %{posts: posts}) do
    Enum.map(posts, &post_json/1)
  end

  def post_json(post) do
    %{
      id: post.id,
      message: post.message,
      location: post.location,
      net_vote: post.net_vote,
      user_id: post.user_id,
      level: post.level,
      author_name: "post.user_id",
      # created_at: (comment.inserted_at |> NaiveDateTime.to_iso8601) <> "Z", // TODO remove
      created_at: post.inserted_at
    }
  end

end
