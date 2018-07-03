defmodule TrafficWardenWeb.CommentView do
  use TrafficWardenWeb, :view

  def render("comments.json", %{comments: comments}) do
    Enum.map(comments, &comment_json/1)
  end

  def render("comment.json", %{post: post}) do
    comment_json(post)
  end

  def comment_json(comment) do
    %{
      id: comment.id,
      message: comment.message,
      post_id: comment.post_id,
      user_id: comment.user_id,
      author_name: "comment.user_id",
      # created_at: (comment.inserted_at |> NaiveDateTime.to_iso8601) <> "Z", // TODO remove
      created_at: comment.inserted_at
    }
  end

end
