defmodule TrafficWardenWeb.PostView do
  use TrafficWardenWeb, :view

  def render("posts.json", %{posts: posts}) do
    Enum.map(posts, &post_json/1)
  end

  def render("post.json", %{post: post}) do
    post_json(post)
  end

  def post_json(post) do
    %{
      id: post.id,
      message: post.message,
      location: post.location,
      net_vote: post.net_vote,
      user_id: post.user_id,
      level: post.level,
      author_name: post.user.display_name,
      created_at: post.inserted_at
    }
  end

end
