defmodule TrafficWardenWeb.PostsChannel do
  use TrafficWardenWeb, :channel


  alias TrafficWardenWeb.{PostView, CommentView, ChangesetView}
  alias TrafficWardenWeb.{Post, User, Vote, Comment}
#TODO online counter
  def join(channel_name, _params, socket) do
    {:ok, %{channel: channel_name}, socket}
  end

  def handle_in("make:post", attrs, socket) do
    changeset = Post.changeset(%Post{}, attrs)
    if changeset.valid? do
      case Repo.insert(changeset) do
        {:ok, post} ->
          post_json = PostView.render("post.json", %{post: post})
          broadcast_from! socket, "new:post", %{post: post_json}
          {:reply, {:ok, %{post: post_json}}, socket}
        {:error, changeset} ->
          show_error(changeset, socket)
      end
    else
      show_error(changeset, socket)
    end
  end

  # def handle_in("make:vote", %{"uid" => uid, "body" => body}, socket) do
  #   broadcast! socket, "new:vote", %{uid: uid, body: body}
  #   {:noreply, socket}
  # end

  # def handle_in("make:comment", %{"uid" => uid, "body" => body}, socket) do
  #   broadcast! socket, "new:comment", %{uid: uid, body: body}
  #   {:noreply, socket}
  # end

  defp show_error(changeset, socket) do
    response = ChangesetView.render("error.json", %{changeset: changeset})
    {:reply, {:error, response}, socket}
  end

end
