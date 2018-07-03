defmodule TrafficWardenWeb.UserController do
  use TrafficWardenWeb, :controller

  alias TrafficWardenWeb.{User}

  def new_user(conn, _params) do
    # Generate double random names
    names = ["Oliver", "Jack", "Charlie", "Harry"]
    random_name = names
                  |>Enum.take_random(2)
                  |>Enum.join(" ")

    changeset = User.changeset(%User{}, %{
      display_name: random_name,
    })

    case Repo.insert(changeset) do
      {:ok, user} ->
        render(conn, "user.json", user: user)
      {:error, changeset} ->
        render(conn, TrafficWardenWeb.ChangesetView, "error.json", changeset: changeset)
    end
  end
end


